///////////
// MENUS //
///////////

::menu <- []
::menuLast <- []
::menuItemsPos <- [] //Positions of all menu items
::cursor <- 0
::cursorOffset <- 0
::cursorTimer <- 30
const menuMax = 8 //Maximum number of slots that can be shown on screen
const fontW = 8
const fontH = 14
const menuY = 40

::textMenu <- function(){
	//If no menu is loaded
	if(menu == []) return

	if(menu != menuLast) {
		cursor = 0
		cursorOffset = 0
	}
	menuLast = menu
	menuItemsPos = []

	//Draw options
	//If there are more items than can be displayed at once
	if(menu.len() > menuMax) for(local i = cursorOffset; i < cursorOffset + menuMax; i++) {
		//Detect if menu item is disabled (has no function). Display it with gray font if so.
		local currFont = font2
		if(menu[i].rawin("disabled") && menu[i].disabled == true) { currFont = font2G }

		if(cursor == i) {
			//Make current selection blink
			currFont = font2I
			drawSprite(font2, 110, (screenW() / 2) - (menu[i].name().len() * 4) - 16, screenH() - menuY - (menuMax * fontH) + ((i - cursorOffset) * fontH))
			drawSprite(font2, 115, (screenW() / 2) + (menu[i].name().len() * 4) + 7, screenH() - menuY - (menuMax * fontH) + ((i - cursorOffset) * fontH))
			//Display option description
			if(menu[i].rawin("desc")){
				setDrawColor(0x00000080)
				drawRec(0, screenH() - fontH - 10, screenW(), 12, true)
				if(typeof menu[i].desc() == "string") drawText(font, (screenW() / 2) - (menu[i].desc().len() * 3), screenH() - fontH - 8, menu[i].desc())
			}
		}

		local textX = (screenW() / 2) - (menu[i].name().len() * 4)
		local textY = screenH() - menuY - (menuMax * fontH) + ((i - cursorOffset) * fontH)

		drawText(currFont, textX, textY, menu[i].name())
		menuItemsPos.append({index = i, x = textX, y = textY, len = menu[i].name().len() * fontW})

		//Draw scroll indicators
		// webBrowserVersionChange: avoid reusing the variable name i
		if(cursorOffset > 0) for(local ii = 0; ii < 4; ii++) drawSprite(font2, 116, (screenW() / 2 - 24) + (ii * 12), screenH() - menuY - (fontH * (menuMax + 1)))
		// webBrowserVersionChange: avoid reusing the variable name i
		if(cursorOffset < menu.len() - menuMax) for(local ii = 0; ii < 4; ii++) drawSprite(font2, 111, (screenW() / 2 - 24) + (ii * 12), screenH() - menuY)
	}
	//If all items can fit on screen at once
	else for(local i = 0; i < menu.len(); i++) {
		//Detect if menu item is disabled (has no function). Display it with gray font if so.
		local currFont = font2
		if(menu[i].rawin("disabled") && menu[i].disabled == true) { currFont = font2G }

		if(cursor == i) {
			currFont = font2I
			drawSprite(font2, 110, (screenW() / 2) - (menu[i].name().len() * 4) - 16, screenH() - menuY - (menu.len() * fontH) + (i * fontH))
			drawSprite(font2, 115, (screenW() / 2) + (menu[i].name().len() * 4) + 7, screenH() - menuY - (menu.len() * fontH) + (i * fontH))
			if(menu[i].rawin("desc")) {
				setDrawColor(0x00000080)
				drawRec(0, screenH() - fontH - 10, screenW(), 12, true)
				if(typeof menu[i].desc() == "string") drawText(font, (screenW() / 2) - (menu[i].desc().len() * 3), screenH() - fontH - 8, menu[i].desc())
			}
		}

		local textX = (screenW() / 2) - (menu[i].name().len() * 4)
		local textY = screenH() - menuY - (menu.len() * fontH) + (i * fontH)

		drawText(currFont, textX, textY, menu[i].name())
		menuItemsPos.append({index = i, x = textX, y = textY, len = menu[i].name().len() * fontW})
	}

	//Mouse cursor update + left click input check
	updateCursor()
	if(mouseRelease(0)) processCursorInput()

	//Keyboard input
	if(getcon("down", "press") || (getcon("down", "hold") && cursorTimer <= 0)) {
		cursor++
		if(cursor >= cursorOffset + menuMax) cursorOffset++
		if(cursor >= menu.len()) {
			cursor = 0
			cursorOffset = 0
		}
		if(getcon("down", "press")) cursorTimer = 40
		else cursorTimer = 10
		popSound(sndMenuMove, 0)
	}

	if(getcon("up", "press") || (getcon("up", "hold") && cursorTimer <= 0)) {
		cursor--
		if(cursor < cursorOffset) cursorOffset--
		if(cursor < 0) {
			cursor = menu.len() - 1
			if(menu.len() > menuMax) cursorOffset = menu.len() - menuMax
		}
		if(getcon("up", "press")) cursorTimer = 40
		else cursorTimer = 10
		popSound(sndMenuMove, 0)
	}

	if(getcon("down", "hold") || getcon("up", "hold")) cursorTimer--

	if(getcon("jump", "press") || getcon("accept", "press")) {
		if(menu[cursor].rawin("disabled") && menu[cursor].disabled == true) return;
		popSound(sndMenuSelect, 0)
		menu[cursor].func()
	}

	if(getcon("pause", "press")) {
		for(local i = 0; i < menu.len(); i++) {
				if(menu[i].rawin("back")) {
					menu[i]["back"]()
					break
				}
		}
	}

	if(mouseWheelY() < 0 && cursorOffset < menu.len() - menuMax) {
		cursorOffset++
		cursor++
	}
	if(mouseWheelY() > 0 && cursorOffset > 0) {
		cursorOffset--
		cursor--
	}
}

//Names are stored as functions because some need to change each time
//they're brought up again.
::meMain <- [
	{
		name = function() { return gvLangObj["main-menu"]["new"] },
		func = function() { gvTimeAttack = false; menu = meDifficulty }
	},
	{
		name = function() { return gvLangObj["main-menu"]["load"] },
		func = function() { gvTimeAttack = false; selectLoadGame() }
	},
	{
		name = function() { return gvLangObj["main-menu"]["time-attack"] },
		func = function() { gvTimeAttack = true; menu = meTimeAttack }
	},
	{
		name = function() { return gvLangObj["main-menu"]["contrib-levels"] },
		func = function() { gvTimeAttack = false; selectContrib(); }
	},
	{
		name = function() { return gvLangObj["main-menu"]["options"] },
		func = function() { menu = meOptions }
	},
	{
		name = function() { return gvLangObj["main-menu"]["extras"] },
		func = function() { menu = meExtras }
	}
	// webBrowserVersionChange: remove "quit" option 
	//{
	//	name = function() { return gvLangObj["main-menu"]["quit"] },
	//	func = function() { gvQuit = 1 }
	//}
]

::meExtras <- [
	{
		name = function() { return gvLangObj["extras-menu"]["achievements"] },
		func = function() { selectAchievements() }
	},
	{
		name = function() { return gvLangObj["extras-menu"]["credits"] },
		func = function() { startCredits("res") }
	},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] }
		func = function() { menu = meMain }
		back = function() { menu = meMain }
	}
]

::meTimeAttack <- [
	{
		name = function() { return gvLangObj["time-attack-menu"]["start-run"] },
		func = function() { cursor = 0; menu = meTimeAttackWorld }
	},
	{
		name = function() { return format(gvLangObj["time-attack-menu"]["player1"], gvCharacters[game.playerChar].shortname) },
		func = function() { pickCharInitialize(1, true); gvGameMode = pickChar}
	},
	// webBrowserVersionChange: remove "Player 2" option
	//{
	//	name = function() { return format(gvLangObj["time-attack-menu"]["player2"], (game.playerChar2 != 0 && game.playerChar2 != "" ? gvCharacters[game.playerChar2].shortname : gvLangObj["menu-commons"]["noone"])) },
	//	func = function() { pickCharInitialize(2, true); gvGameMode = pickChar}
	//},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { cursor = 0; menu = meMain },
		back = function() { menu = meMain }
	}
]

::meTimeAttackWorld <- [
	/*{
		name = function() { return gvLangObj["level"]["full-game"] },
		func = function() { game.path = "res/map/"; gvTACourse = [
			"aurora-learn",
			"aurora-crystal",
			"aurora-iceguy",
			"aurora-slip",
			"aurora-subsea",
			"aurora-tnt",
			"aurora-fishy",
			"aurora-sense",
			"aurora-branches",
			"aurora-frozen",
			"aurora-forest",
			"aurora-bridge",
			"aurora-wind",
			"aurora-steps",
			"aurora-fort",
			"nessland-left",
			"nessland-attack",
			"nessland-earth",
			"nessland-mint",
			"nessland-owl",
			"nessland-shells",
			"nessland-henge",
			"nessland-situation",
			"nessland-fly",
			"nessland-cliffs",
			"nessland-well",
			"nessland-bedrock",
			"nessland-crush"
		]; menu = meDifficulty },
		desc = function() { return gvLangObj["options-menu-desc"]["fullgame"] }
	},*/
	{
		name = function() { return gvLangObj["level"]["overworld-0"] },
		func = function() { game.path = "res/map/"; gvTACourse = [
			"aurora-learn",
			"aurora-crystal",
			"aurora-iceguy",
			"aurora-slip",
			"aurora-subsea",
			"aurora-tnt",
			"aurora-fishy",
			"aurora-sense",
			"aurora-branches",
			"aurora-frozen",
			"aurora-forest",
			"aurora-bridge",
			"aurora-wind",
			"aurora-steps",
			"aurora-fort"
		]; menu = meDifficulty }
	},
	/*{
		name = function() { return gvLangObj["level"]["overworld-1"] },
		func = function() { game.path = "res/map/"; gvTACourse = [
			"nessland-left",
			"nessland-attack",
			"nessland-earth",
			"nessland-mint",
			"nessland-owl",
			"nessland-shells",
			"nessland-henge",
			"nessland-situation",
			"nessland-fly",
			"nessland-cliffs",
			"nessland-well",
			"nessland-bedrock",
			"nessland-crush"
		]; menu = meDifficulty }
	},*/
	{
		name = function() { return gvLangObj["menu-commons"]["back"] }
		func = function() { menu = meMain }
		back = function() { menu = meMain }
	}
]

::mePausePlay <- [
	{
		name = function() { return gvLangObj["pause-menu"]["continue"]},
		func = function() { gvGameMode = gmPlay }
	},
	{
		name = function() { return gvLangObj["pause-menu"]["restart"]},
		func = function() {
			gvIGT = 0;
			game.check = false;
			startPlay(gvMap.file, true, true)
		}
	},
	{
		name = function() { return gvLangObj["main-menu"]["options"] },
		func = function() { menu = meOptions }
	},
	{
		name = function() { return gvLangObj["pause-menu"]["quit-level"]},
		func = function() {
			if(gvTimeAttack) startMain()
			else startOverworld(game.world)
		}
	}
]

::mePauseTimeAttack <- [
	{
		name = function() { return gvLangObj["pause-menu"]["continue"]},
		func = function() { gvGameMode = gmPlay }
	},
	{
		name = function() { return gvLangObj["pause-menu"]["restart"]},
		func = function() {
			gvIGT = 0; game.check = false;
			startPlay(gvMap.file, true, true)
		}
	},
	{
		name = function() { return gvLangObj["main-menu"]["options"] },
		func = function() { menu = meOptions }
	},
	{
		name = function() { return gvLangObj["pause-menu"]["restart-run"]},
		func = function() {
			newTimeAttack()
		}
	},
	{
		name = function() { return gvLangObj["pause-menu"]["end-run"]},
		func = function() {
			if(gvTimeAttack) startMain()
			else startOverworld(game.world)
		}
	}
]

::mePauseOver <- [
	{
		name = function() { return gvLangObj["pause-menu"]["continue"]},
		func = function() { gvGameMode = gmOverworld }
	},
	{
		name = function() { return gvLangObj["pause-menu"]["save"]},
		func = function() { saveGame(); popSound(sndHeal, 0); gvGameMode = gmOverworld }
	},
	{
		name = function() { return gvLangObj["pause-menu"]["character"]},
		func = function() { pickCharInitialize(); gvGameMode = pickChar }
		desc = function() { return game.playerChar }
	},
	// webBrowserVersionChange: remove "Change Player 2" option
	//{
	//	name = function() { return gvLangObj["pause-menu"]["character2"]},
	//	func = function() { pickCharInitialize(2); gvGameMode = pickChar }
	//	desc = function() { return game.playerChar2 }
	//},
	{
		name = function() { return gvLangObj["main-menu"]["options"] },
		func = function() { menu = meOptions }
	},
	{
		name = function() { return gvLangObj["pause-menu"]["quit-game"]},
		func = function() { saveGame(); startMain(); }
	}
]

::meOptions <- [
	{
		name = function() { return gvLangObj["options-menu"]["graphics"] },
		func = function() { cursor = 0; menu = meGraphics }
	},
	{
		name = function() { return gvLangObj["options-menu"]["speedrun"] },
		desc = function() { return gvLangObj["options-menu-desc"]["speedrun"] },
		func = function() { menu = meSpeedrun }
	},
	{
		name = function() { return gvLangObj["options-menu"]["input"] },
		func = function() { cursor = 0; menu = meInput }
	},
	{
		name = function() { return gvLangObj["options-menu"]["audio"] },
		func = function() { cursor = 0; menu = meAudio }
	},
	// webBrowserVersionChange: remove language option
	//{
	//	name = function() { return gvLangObj["options-menu"]["language"] },
	//	desc = function() { return gvLangObj["options-menu-desc"]["language"] },
	//	func = function() { selectLanguage() }
	//},
	{
		name = function() { return gvLangObj["options-menu"]["accessibility"] },
		func = function() { cursor = 0; menu = meAccessibility }
	},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() {
			if(gvGameMode == gmPause) {
				if(gvPauseMode) menu = mePauseOver
				else if(gvTimeAttack) menu = mePauseTimeAttack
				else menu = mePausePlay
			}
			else menu = meMain;
			fileWrite("config.json", jsonWrite(config))
		}
		back = function() {
			if(gvGameMode == gmPause) {
				if(gvPauseMode) menu = mePauseOver
				else menu = mePausePlay
			}
			else menu = meMain;
			fileWrite("config.json", jsonWrite(config))
		}
	}

]

::meGraphics <- [
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() {
	//		local val = gvLangObj["menu-commons"][config.light ? "on" : "off"]
	//		return format(gvLangObj["options-menu"]["light"], val)
	//	},
	//	desc = function() { return gvLangObj["options-menu-desc"]["light"] },
	//	func = function() { config.light = !config.light; fileWrite("config.json", jsonWrite(config)) }
	//},
	{
		name = function() {
			local val = gvLangObj["menu-commons"][config.weather ? "on" : "off"]
			return format(gvLangObj["options-menu"]["weather"], val)
		},
		desc = function() { return gvLangObj["options-menu-desc"]["weather"] },
		func = function() { config.weather = !config.weather; fileWrite("config.json", jsonWrite(config)) }
	},
	{
		name = function() {
			local val = gvLangObj["menu-commons"][config.lookAhead ? "on" : "off"]
			return format(gvLangObj["options-menu"]["lookahead"], val)
		},
		desc = function() { return gvLangObj["options-menu-desc"]["lookahead"] },
		func = function() { config.lookAhead = !config.lookAhead }
	},
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() { return gvLangObj["options-menu"]["fullscreen"] },
	//	desc = function() { return gvLangObj["options-menu-desc"]["fullscreen"] },
	//	func = function() { toggleFullscreen(); config.fullscreen = !config.fullscreen }
	//},
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() {
	//		local val = gvLangObj["menu-commons"][config.usefilter ? "on" : "off"]
	//		return format(gvLangObj["options-menu"]["usefilter"], val)
	//	},
	//	desc = function() { return gvLangObj["options-menu-desc"]["usefilter"] },
	//	func = function() {
	//		config.usefilter = !config.usefilter;
	//		fileWrite("config.json", jsonWrite(config))
	//		setScalingFilter(int(config.usefilter))
	//		deleteTexture(gvScreen)
	//		gvScreen = newTexture(screenW(), screenH())
	//		setScalingFilter(0)
	//	}
	//},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { menu = meOptions }
		back = function() { menu = meOptions }
	}
]

::meAccessibility <- [
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() {
	//		local val = gvLangObj["menu-commons"][config.light ? "on" : "off"]
	//		return format(gvLangObj["options-menu"]["light"], val)
	//	},
	//	desc = function() { return gvLangObj["options-menu-desc"]["light"] },
	//	func = function() { config.light = !config.light; fileWrite("config.json", jsonWrite(config)) }
	//},
	{
		name = function() {
			local val = gvLangObj["menu-commons"][config.weather ? "on" : "off"]
			return format(gvLangObj["options-menu"]["weather"], val)
		},
		desc = function() { return gvLangObj["options-menu-desc"]["weather"] },
		func = function() { config.weather = !config.weather; fileWrite("config.json", jsonWrite(config)) }
	},
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() {
	//		local val = gvLangObj["menu-commons"][config.nearbars ? "on" : "off"]
	//		return format(gvLangObj["options-menu"]["nearbars"], val)
	//	},
	//	desc = function() { return gvLangObj["options-menu-desc"]["nearbars"] },
	//	func = function() { config.nearbars = !config.nearbars; fileWrite("config.json", jsonWrite(config)) }
	//},
	{
		name = function() {
			local val = gvLangObj["menu-commons"][config.bigItems ? "on" : "off"]
			return format(gvLangObj["options-menu"]["big-items"], val)
		},
		desc = function() { return gvLangObj["options-menu-desc"]["big-items"] },
		func = function() { config.bigItems = !config.bigItems; fileWrite("config.json", jsonWrite(config)) }
	},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { menu = meOptions }
		back = function() { menu = meOptions }
	}
]

::meInput <- [
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() { return gvLangObj["options-menu"]["keyboard"] },
	//	desc = function() { return gvLangObj["options-menu-desc"]["keyboard"] },
	//	func = function() { menu = meKeybinds }
	//},
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() { return gvLangObj["options-menu"]["joystick1"] },
	//	desc = function() { return gvLangObj["options-menu-desc"]["joystick"] },
	//	func = function() { menu = meJoyBinds }
	//},
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() { return gvLangObj["options-menu"]["joystick2"] },
	//	desc = function() { return gvLangObj["options-menu-desc"]["joystick"] },
	//	func = function() { menu = meJoyBinds2 }
	//},
	{
		name = function() {
			local val = gvLangObj["menu-commons"][config.showcursor ? "on" : "off"]
			return format(gvLangObj["options-menu"]["cursor"], val)
		},
		desc = function() { return gvLangObj["options-menu-desc"]["cursor"] },
		func = function() { config.showcursor = !config.showcursor; fileWrite("config.json", jsonWrite(config)) }
	},
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() {
	//		local val = gvLangObj["menu-commons"][config.stickspeed ? "on" : "off"]
	//		return format(gvLangObj["options-menu"]["stickspeed"], val)
	//	},
	//	desc = function() { return gvLangObj["options-menu-desc"]["stickspeed"] },
	//	func = function() { config.stickspeed = !config.stickspeed; fileWrite("config.json", jsonWrite(config)) }
	//},
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() {
	//		local val = gvLangObj["menu-commons"][config.stickactive ? "on" : "off"]
	//		return format(gvLangObj["options-menu"]["stickactive"], val)
	//	},
	//	desc = function() { return gvLangObj["options-menu-desc"]["stickactive"] },
	//	func = function() { config.stickactive = !config.stickactive; fileWrite("config.json", jsonWrite(config)) }
	//},
	// webBrowserVersionChange: comment out this option
	//{
	//	name = function() {
	//		local val = gvLangObj["menu-commons"][config.stickcam ? "on" : "off"]
	//		return format(gvLangObj["options-menu"]["stickcam"], val)
	//	},
	//	desc = function() { return gvLangObj["options-menu-desc"]["stickcam"] },
	//	func = function() { config.stickcam = !config.stickcam; fileWrite("config.json", jsonWrite(config)) }
	//},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { menu = meOptions }
		back = function() { menu = meOptions }
	}
]

::meAudio <- [
	{
		name = function() { return gvLangObj["options-menu"]["sound-volume"] },
		desc = function() {
			if(getcon("left", "press") && getSoundVolume() > 0) {
				config.soundVolume -= 4
				setSoundVolume(config.soundVolume)
				popSound(sndMenuMove, 0)
			}
			if(getcon("right", "press") && getSoundVolume() < 128) {
				config.soundVolume += 4
				setSoundVolume(config.soundVolume)
				popSound(sndMenuMove, 0)
			}

			local vol = "VOL: ["
			for(local i = 0; i < 16; i++) {
				if(i < getSoundVolume() / 8) vol += chint(8)
				else vol += chint(7)
			}
			vol += "] (<-/->)"
			return vol
		},
		func = function() {}
	},
	{
		name = function() { return gvLangObj["options-menu"]["music-volume"] },
		desc = function() {
			if(getcon("left", "press") && getMusicVolume() > 0) {
				config.musicVolume -= 4
				setMusicVolume(config.musicVolume)
				popSound(sndMenuMove, 0)
			}
			if(getcon("right", "press") && getMusicVolume() < 128) {
				config.musicVolume += 4
				setMusicVolume(config.musicVolume)
				popSound(sndMenuMove, 0)
			}

			local vol = "VOL: ["
			for(local i = 0; i < 16; i++) {
				if(i < getMusicVolume() / 8) vol += chint(8)
				else vol += chint(7)
			}
			vol += "] (<-/->)"
			return vol
		},
		func = function() {}
	},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { menu = meOptions }
		back = function() { menu = meOptions }
	}
]

::meKeybinds <- [
	{
		name = function() { return format(gvLangObj["controls-menu"]["up"], getConName("up", true, false)) },
		func = function() { rebindKeys(0) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["down"], getConName("down", true, false)) },
		func = function() { rebindKeys(1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["left"], getConName("left", true, false)) },
		func = function() { rebindKeys(2) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["right"], getConName("right", true, false)) },
		func = function() { rebindKeys(3) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["jump"], getConName("jump", true, false)) },
		func = function() { rebindKeys(4) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["shoot"], getConName("shoot", true, false)) },
		func = function() { rebindKeys(5) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["spec1"], getConName("spec1", true, false)) },
		func = function() { rebindKeys(6) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["spec2"], getConName("spec2", true, false)) },
		func = function() { rebindKeys(7) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["pause"], getConName("pause", true, false)) },
		func = function() { rebindKeys(8) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["item-swap"], getConName("swap", true, false)) },
		func = function() { rebindKeys(9) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["menu-accept"], getConName("accept", true, false)) },
		func = function() { rebindKeys(10) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-left-peek"], getConName("leftPeek", true, false)) },
		func = function() { rebindKeys(11) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-right-peek"], getConName("rightPeek", true, false)) },
		func = function() { rebindKeys(12) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-down-peek"], getConName("downPeek", true, false)) },
		func = function() { rebindKeys(13) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-up-peek"], getConName("upPeek", true, false)) },
		func = function() { rebindKeys(14) }
	},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { menu = meInput }
		back = function() { menu = meInput }
	}
]

::meJoyBinds <- [
	{
		name = function() { return format(gvLangObj["options-menu"]["joymode"], config.joymode) },
		func = function() { 
			local newMode = gvPadTypes.find(config.joymode)
			if(newMode == null)
				newMode = 0
			else newMode++
			newMode = wrap(newMode, 0, gvPadTypes.len() - 1)
			config.joymode = gvPadTypes[newMode]
		}
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["jump"], config.joy.jump != -1 ? getConName("jump", false) : "") },
		func = function() { rebindGamepad(4) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["shoot"], config.joy.shoot != -1 ? getConName("shoot", false) : "") },
		func = function() { rebindGamepad(5) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["spec1"], config.joy.spec1 != -1 ? getConName("spec1", false) : "") },
		func = function() { rebindGamepad(6) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["spec2"], config.joy.spec2 != -1 ? getConName("spec2", false) : "") },
		func = function() { rebindGamepad(7) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["pause"], config.joy.shoot != -1 ? getConName("pause", false) : "") },
		func = function() { rebindGamepad(8) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["item-swap"], config.joy.swap != -1 ? getConName("swap", false) : "") },
		func = function() { rebindGamepad(9) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["menu-accept"], config.joy.accept != -1 ? getConName("accept", false) : "") },
		func = function() { rebindGamepad(10) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-left-peek"], config.joy.leftPeek != -1 ? getConName("leftPeek", false) : "") },
		func = function() { rebindGamepad(11) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-right-peek"], config.joy.rightPeek != -1 ? getConName("rightPeek", false) : "") },
		func = function() { rebindGamepad(12) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-down-peek"], config.joy.downPeek != -1 ? getConName("downPeek", false) : "") },
		func = function() { rebindGamepad(13) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-up-peek"], config.joy.upPeek != -1 ? getConName("upPeek", false) : "") },
		func = function() { rebindGamepad(14) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-peek-x"], config.joy.xPeek.tostring()) },
		func = function() { rebindJoyPeek(0) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-peek-y"], config.joy.yPeek.tostring()) },
		func = function() { rebindJoyPeek(1) }
	},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { menu = meInput }
		back = function() { menu = meInput }
	}
]

::meJoyBinds2 <- [
	{
		name = function() { return format(gvLangObj["options-menu"]["joymode"], config.joymode) },
		func = function() { 
			local newMode = gvPadTypes.find(config.joymode)
			if(newMode == null)
				newMode = 0
			else newMode++
			newMode = wrap(newMode, 0, gvPadTypes.len() - 1)
			config.joymode = gvPadTypes[newMode]
		}
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["jump"], config.joy2.jump != -1 ? getConName("jump", false) : "") },
		func = function() { rebindGamepad(4, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["shoot"], config.joy2.shoot != -1 ? getConName("shoot", false) : "") },
		func = function() { rebindGamepad(5, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["spec1"], config.joy2.spec1 != -1 ? getConName("spec1", false) : "") },
		func = function() { rebindGamepad(6, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["spec2"], config.joy2.spec2 != -1 ? getConName("spec2", false) : "") },
		func = function() { rebindGamepad(7, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["pause"], config.joy2.shoot != -1 ? getConName("pause", false) : "") },
		func = function() { rebindGamepad(8, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["item-swap"], config.joy2.swap != -1 ? getConName("swap", false) : "") },
		func = function() { rebindGamepad(9, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["menu-accept"], config.joy2.accept != -1 ? getConName("accept", false) : "") },
		func = function() { rebindGamepad(10, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-left-peek"], config.joy2.leftPeek != -1 ? getConName("leftPeek", false) : "") },
		func = function() { rebindGamepad(11, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-right-peek"], config.joy2.rightPeek != -1 ? getConName("rightPeek", false) : "") },
		func = function() { rebindGamepad(12, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-down-peek"], config.joy2.downPeek != -1 ? getConName("downPeek", false) : "") },
		func = function() { rebindGamepad(13, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-up-peek"], config.joy2.upPeek != -1 ? getConName("upPeek", false) : "") },
		func = function() { rebindGamepad(14, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-peek-x"], config.joy2.xPeek.tostring()) },
		func = function() { rebindJoyPeek(0, 1) }
	},
	{
		name = function() { return format(gvLangObj["controls-menu"]["cam-peek-y"], config.joy2.yPeek.tostring()) },
		func = function() { rebindJoyPeek(1, 1) }
	},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { menu = meInput }
		back = function() { menu = meInput }
	}
]

::meSpeedrun <- [
	{
		name = function() { return format(gvLangObj["speedrun-menu"]["speedrun-timer-level"], config.showleveligt ? gvLangObj["bool"]["on"] : gvLangObj["bool"]["off"]) },
		func = function() { config.showleveligt = !config.showleveligt }
	},
	{
		name = function() { return format(gvLangObj["speedrun-menu"]["speedrun-timer-global"], config.showglobaligt ? gvLangObj["bool"]["on"] : gvLangObj["bool"]["off"]) },
		func = function() { config.showglobaligt = !config.showglobaligt }
	},
	{
		name = function() { return format(gvLangObj["options-menu"]["showkeys"], config.showkeys ? gvLangObj["bool"]["on"] : gvLangObj["bool"]["off"]) },
		func = function() { config.showkeys = !config.showkeys }
	},
	{
		name = function() { return format(gvLangObj["options-menu"]["completion"], config.completion ? gvLangObj["bool"]["on"] : gvLangObj["bool"]["off"]) }
		func = function() { config.completion = !config.completion }
		desc = function() { return gvLangObj["options-menu-desc"]["completion"] }
	},
	{
		name = function() { return format(gvLangObj["options-menu"]["usebeam"], config.useBeam ? gvLangObj["bool"]["on"] : gvLangObj["bool"]["off"]) }
		func = function() { config.useBeam = !config.useBeam }
		desc = function() { return gvLangObj["options-menu-desc"]["usebeam"] }
	},
	{
		name = function() { return gvLangObj["menu-commons"]["back"] },
		func = function() { menu = meOptions }
		back = function() { menu = meOptions }
	}
]

::meDifficulty <- [
	{
		name = function() { return gvLangObj["difficulty-levels"]["easy"] },
		func = function() {
			game.difficulty = 0
			if(gvTimeAttack) newTimeAttack()
			else menu = meNewGame
		}
	},
	{
		name = function() { return gvLangObj["difficulty-levels"]["normal"] },
		func = function() {
			game.difficulty = 1
			if(gvTimeAttack) newTimeAttack()
			else menu = meNewGame
		}
	},
	{
		name = function() { return gvLangObj["difficulty-levels"]["hard"] },
		func = function() {
			game.difficulty = 2
			if(gvTimeAttack) newTimeAttack()
			else menu = meNewGame
		}
	},
	{
		name = function() { return gvLangObj["difficulty-levels"]["super"] },
		func = function() {
			game.difficulty = 3
			if(gvTimeAttack) newTimeAttack()
			else menu = meNewGame
		}
	},
	{
		name = function() { return gvLangObj["menu-commons"]["cancel"] },
		func = function() { menu = meMain }
		back = function() { menu = meMain }
	}
]

::meNewGame <- [
	{
		name = function() {
			local m = "File 0"
			if(fileExists("save/0.json")) m += " " + gvLangObj["new-game-menu"]["file-exists"]
			return m
		},
		func = function() {
			game.file = 0
			if(fileExists("save/0.json")) menu = meOverwrite
			else newGame(0)
		}
	},
	{
		name = function() {
			local m = "File 1"
			if(fileExists("save/1.json")) m += " " + gvLangObj["new-game-menu"]["file-exists"]
			return m
		},
		func = function() {
			game.file = 1
			if(fileExists("save/1.json")) menu = meOverwrite
			else newGame(1)
		}
	},
	{
		name = function() {
			local m = "File 2"
			if(fileExists("save/2.json")) m += " " + gvLangObj["new-game-menu"]["file-exists"]
			return m
		},
		func = function() {
			game.file = 2
			if(fileExists("save/2.json")) menu = meOverwrite
			else newGame(2)
		}
	},
	{
		name = function() {
			local m = "File 3"
			if(fileExists("save/3.json")) m += " " + gvLangObj["new-game-menu"]["file-exists"]
			return m
		},
		func = function() {
			game.file = 3
			if(fileExists("save/3.json")) menu = meOverwrite
			else newGame(3)
		}
	},
	{
		name = function() { return gvLangObj["menu-commons"]["cancel"] }
		func = function() { menu = meMain }
		back = function() { menu = meMain }
	}
]

::meOverwrite <- [
	{
		name = function() { drawText(font2, screenW() / 2 - (15 * 4), screenH() / 2, "Overwrite save?"); return gvLangObj["menu-commons"]["no"] }
		func = function() { menu = meNewGame; }
		back = function() { menu = meNewGame; }
	},
	{
		name = function() { return gvLangObj["menu-commons"]["yes"] }
		func = function() { newGame(game.file) }
	}
]

::meLoadGame <- []
//This menu is left empty intentionally; it will be created dynamically at runtime.
