if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/tux.nut'] = function () { 


Tux =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Player ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . canJump = 16 ; 
 returnVal . didJump = false ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = 0 ; 
 returnVal . canMove = true ; 
 returnVal . mspeed = 4 ; 
 returnVal . climbdir = 1.0 ; 
 returnVal . blinking = 0 ; 
 returnVal . xstart = 0.0 ; 
 returnVal . ystart = 0.0 ; 
 returnVal . firetime = 0 ; 
 returnVal . guardtime = 0 ; 
 returnVal . hurt = 0 ; 
 returnVal . swimming = false ; 
 returnVal . inMelee = false ; 
 returnVal . canStomp = true ; 
 returnVal . sprite = sprTux ; 
 returnVal . invincible = 0 ; 
 returnVal . shapeStand = 0 ; 
 returnVal . shapeSlide = 0 ; 
 returnVal . tftime =  - 1 ; 
 returnVal . hidden = false ; 
 returnVal . jumpBuffer = 0 ; 
 returnVal . rspeed = 0.0 ; 
 returnVal . slideframe = 0.0 ; 
 returnVal . antigrav = 0 ; 
 returnVal . groundx = 0.0 ; 
 returnVal . groundy = 0.0 ; 
 returnVal . slippery = false ; 
 returnVal . accel = 0.2 ; 
 returnVal . noot = sndNootA ; 
 returnVal . rollspeed = 8.0 ; 
 returnVal . an =  { stand :  [ 0 ]  , standN :  [ 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 76 , 77 , 78 , 79 , 78 , 79 , 78 , 79 , 78 , 79 , 78 , 77 , 76 ]  , standF :  [ 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 76 , 77 , 78 , 79 ]  , standI :  [ 0 , 1 , 2 , 3 ]  , standA :  [ 0 , 1 , 2 , 3 ]  , standE :  [ 0 , 1 , 2 , 3 ]  , walk :  [ 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 ]  , run :  [ 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 ]  , dive :  [ 24 , 25 ]  , slide :  [ 26 , 27 , 28 , 29 ]  , hurt :  [ 30 , 31 ]  , jumpU :  [ 32 , 33 ]  , jumpT :  [ 34 , 35 ]  , fall :  [ 0 ]  , fallN :  [ 36 , 37 ]  , fallW :  [ 48 ]  , swimF :  [ 52 , 53 , 54 , 55 ]  , swimUF :  [ 56 , 57 , 58 , 59 ]  , swimDF :  [ 60 , 61 , 62 , 63 ]  , swimU :  [ 64 , 65 , 66 , 67 ]  , swimD :  [ 68 , 69 , 70 , 71 ]  , skid :  [ 4 , 5 ]  , push :  [ 6 , 7 ]  , climb :  [ 44 , 45 , 46 , 47 , 46 , 45 ]  , wall :  [ 48 , 49 ]  , crawl :  [ 72 , 73 , 74 , 75 , 74 , 73 ]  , die :  [ 50 , 51 ]  , win :  [ 38 ]  }  ; 
 returnVal . animOffset = 0 ; 
 returnVal . mySprNormal = null ; 
 returnVal . mySprFire = null ; 
 returnVal . mySprIce = null ; 
 returnVal . mySprAir = null ; 
 returnVal . mySprEarth = null ; 
 returnVal . mySprShock = null ; 
 returnVal . mySprWater = null ; 
 returnVal . mySprLight = null ; 
 returnVal . mySprDark = null ; 
 returnVal . nowInWater = false ; 
 returnVal . damageMultN =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultF =  { normal : 1.0 , fire : 0.5 , ice : 1.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultI =  { normal : 1.0 , fire : 2.0 , ice : 0.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultA =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 2.0 , air : 0.5 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 0.5 }  ; 
 returnVal . damageMultE =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 0.50 , air : 2.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 0.5 , blast : 1.0 }  ; 
 returnVal . damageMultS =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 0.5 , water : 1.5 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultW =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 2.0 , water : 0.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultL =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 0.5 , dark : 2.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultD =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 2.0 , dark : 0.5 , cut : 1.0 , blast : 1.0 }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
an =  window.clone( an)  ; 
damageMultF =  window.clone( damageMultF)  ; 
an . stand = an . standN ; 
anim = "stand" ; 
shapeStand = Rec ( x , y , 5 , 12 , 0 , 0 , 0 )  ; 
shapeSlide = Rec ( x , y , 5 , 6 , 0 , 0 , 6 )  ; 
shape = shapeStand ; 
xstart = _x . tofloat (  )  ; 
ystart = _y . tofloat (  )  ; 
an . fall = an . fallN ; 
xprev = x ; 
yprev = y ; 
mySprNormal = sprTux ; 
mySprFire = sprTuxFire ; 
mySprIce = sprTuxIce ; 
mySprAir = sprTuxAir ; 
mySprEarth = sprTuxEarth ; 
mySprShock = sprTuxShock ; 
mySprWater = sprTuxWater ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
shapeSlide . setPos ( x , y )  ; 
shapeStand . setPos ( x , y )  ; 
 if ( shape == shapeStand &&  ! placeFree ( x , y )  )  { 
 shape = shapeSlide ; 
 if ( anim == "stand" || anim == "walk" || anim == "run" ) anim = "crawl" ; 
 
  } 
  
 magnetic = stats . weapon == "shock" ; 
mustSink = stats . weapon == "earth" ; 
 var freeDown = placeFree ( x , y + 1 )  ;
  var freeDown2 = placeFree ( x , y + 2 )  ;
  var freeLeft = placeFree ( x - 1 , y )  ;
  var freeRight = placeFree ( x + 1 , y )  ;
  var freeUp = placeFree ( x , y - 1 )  ;
 wasInWater = nowInWater ; 
nowInWater = inWater ( x , y )  ; 
 if ( firetime > 0 ) firetime --  ; 
 
  if ( guardtime > 0 && anim != "slide" ) guardtime --  ; 
 
  if ( firetime <= 0 && stats . energy < stats . maxEnergy ) stats . energy += 1.0 / 60.0 ; 
 
  if (  (  ! inWater ( x , y )  || stats . weapon == "earth" )  && resTime <= 0 )  { 
 swimming = false ; 
shapeStand . h = 12.0 ; 
slippery =  ( anim == "dive" || anim == "slide" || onIce (  )  )  ; 
 if ( getcon ( "spec2" , "press" , true , playerNum )  ) popSound ( noot )  ; 
 
  switch ( anim )  {  case "stand" :  if ( stats . weapon == "ice" && floor ( frame )  == 0 ) frame += 0.01 ; 
 
  else  if ( stats . weapon == "ice" || stats . weapon == "fire" ) frame += 0.1 ; 
 
  else  if ( stats . weapon == "air" ) frame += 0.05 ; 
 
  else frame += 0.05 ; 
 
  
  
  if ( abs ( rspeed )  > 0.1 )  { 
 anim = "walk" ; 
frame = 0.0 ; 
 } 
  
  if ( placeFree ( x , y + 8 )  &&  ! onPlatform (  )  && fabs ( vspeed )  >= 1 )  { 
  if ( vspeed >= 0 ) anim = "fall" ; 
 
  else anim = "jumpU" ; 
 
 frame = 0.0 ; 
 } 
  
  break ;  case "walk" : frame += abs ( rspeed )  / 8 ; 
 if ( abs ( rspeed )  <= 0.1 || fabs ( hspeed )  <= 0.1 ) anim = "stand" ; 
 
  if ( abs ( rspeed )  > 2.4 ) anim = "run" ; 
 
  if ( placeFree ( x , y + 8 )  &&  ! onPlatform (  )  && fabs ( vspeed )  >= 1 )  { 
  if ( vspeed >= 0 ) anim = "fall" ; 
 
  else anim = "jumpU" ; 
 
 frame = 0.0 ; 
 } 
  
  break ;  case "run" :  case "skid" :  if ( flip == 0 && hspeed < 0 )  { 
 hspeed += 0.05 ; 
anim = "skid" ; 
 } 
  
  else  if ( flip == 1 && hspeed > 0 )  { 
 hspeed -= 0.05 ; 
anim = "skid" ; 
 } 
  
  else anim = "run" ; 
 
  
  if ( anim == "skid" ) frame += 0.2 ; 
 
  else  if ( stats . weapon == "ice" ) frame += abs ( rspeed )  / 16 ; 
 
  else frame += abs ( rspeed )  / 8 ; 
 
  
  if ( abs ( rspeed )  < 2 && anim != "skid" ) anim = "walk" ; 
 
  if ( placeFree ( x , y + 8 )  &&  ! onPlatform (  )  && fabs ( vspeed )  >= 1 )  { 
  if ( vspeed >= 0 ) anim = "fall" ; 
 
  else anim = "jumpU" ; 
 
 frame = 0.0 ; 
 } 
  
  break ;  case "push" :  break ;  case "jumpU" :  if ( frame < 1 ) frame += 0.1 ; 
 
  if (  (  ! placeFree ( x , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  if ( vspeed > 0 )  { 
 anim = "jumpT" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "jumpT" : frame += 0.2 ; 
 if (  (  ! placeFree ( x , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  if ( floor ( frame )  > an [ anim ]  . len (  )  - 1 )  { 
 anim = "fall" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "fall" : frame += 0.1 ; 
 if (  (  ! placeFree ( x , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "wall" : frame += 0.3 ; 
vspeed = 0 ; 
 if ( floor ( frame )  > 1 )  { 
 vspeed =  - 5.0 ; 
 if ( getcon ( "down" , "hold" , true , playerNum )  ) vspeed =  - 3.0 ; 
 
  var w = 3.0 ;
  if ( getcon ( "up" , "hold" , true , playerNum )  ) w = 1.5 ; 
 
  if ( flip == 0 ) hspeed = w ; 
 
  else hspeed =  - w ; 
 
 anim = "jumpU" ; 
frame = 0.0 ; 
canJump = 0 ; 
 } 
  
  if (  ! freeLeft ) flip = 0 ; 
 
  if (  ! freeRight ) flip = 1 ; 
 
  break ;  case "dive" : frame += 0.25 ; 
 if ( floor ( frame )  > 1 )  { 
  if ( fabs ( hspeed )  <= 0.5 && stats . weapon != "earth" ) anim = "crawl" ; 
 
  else anim = "slide" ; 
 
 shape = shapeSlide ; 
 } 
  
  break ;  case "slide" :  if ( stats . weapon == "earth" ) slideframe += abs ( hspeed / rollspeed )  ; 
 
  else slideframe += abs ( hspeed / 24.0 )  ; 
 
 frame = slideframe ; 
 if (  ! freeDown && hspeed != 0 )  if ( floor ( getFrames (  )  % 8 - fabs ( hspeed )  )  == 0 || fabs ( hspeed )  > 8 )  { 
  if ( stats . weapon == "fire" ) newActor ( FlameTiny , x -  ( 8 *  ( hspeed / fabs ( hspeed )  )  )  , y + 10 )  ; 
 
  if ( stats . weapon == "ice" ) newActor ( Glimmer , x -  ( 12 *  ( hspeed / fabs ( hspeed )  )  )  , y + 10 )  ; 
 
  } 
  
  
  break ;  case "hurt" : frame += 0.1 ; 
 if ( floor ( frame )  > 1 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "swimF" : anim = "jumpT" ; 
frame = 0.0 ; 
 break ;  case "swimUF" :  case "swimU" :  if ( fabs ( hspeed )  > 1.5 ) anim = "slide" ; 
 
  else anim = "jumpU" ; 
 
 frame = 0.0 ; 
vspeed -= 1 ; 
 if ( getcon ( "jump" , "hold" , true , playerNum )  && vspeed >  - 4 ) vspeed =  - 6 ; 
 
  break ;  case "swimDF" :  case "swim" : anim = "fall" ; 
frame = 0.0 ; 
 break ;  }  if ( anim == "stand" && zoomies ) frame += 0.1 ; 
 
  if (  ( (an[ ( anim ) ] !== undefined) )  && an [ anim ]  != null && anim != "hurt" ) frame = wrap ( frame , 0 , an [ anim ]  . len (  )  - 1 )  ; 
 
  if ( endMode && hspeed == 0 ) anim = "win" ; 
 
  else  if ( anim == "win" ) anim = "stand" ; 
 
  
 onWall =  ( anim == "wall" || an [ anim ]  == an [ "fallW" ]  )  ; 
 if ( slippery )  { 
  if (  ! placeFree ( x , y + 8 )  &&  ( fabs ( hspeed )  < 8 ||  ( fabs ( hspeed )  < 12 &&  ( stats . weapon == "ice" ||  ( stats . weapon == "earth" && anim == "slide" )  )  )  )  )  { 
  if ( placeFree ( x + 4 , y + 1 )  ) hspeed += 0.3 ; 
 
  if ( placeFree ( x - 4 , y + 1 )  ) hspeed -= 0.3 ; 
 
  if ( freeDown2 && vspeed >= 0 ) vspeed += 1.0 ; 
 
  } 
  
  else  if (  ! placeFree ( x , y + 8 )  &&  ( fabs ( hspeed )  < 8 ||  ( fabs ( hspeed )  < 12 && vspeed > 0 )  )  ) vspeed += 0.2 ; 
 
  
  if (  (  ! getcon ( "down" , "hold" , true , playerNum )  && stats . weapon != "air" && stats . weapon != "earth" &&  ! getcon ( "shoot" , "hold" , true , playerNum )  )  ||  ( fabs ( hspeed )  < 0.05 &&  ! placeFree ( x , y + 2 )  && stats . weapon != "earth" )  ||  ( fabs ( hspeed )  < 0.05 &&  ( stats . weapon != "air" || stats . weapon == "earth" )  &&  ! getcon ( "shoot" , "hold" , true , playerNum )  )  ||  (  ( stats . weapon == "earth" || stats . weapon == "air" )  &&  ! getcon ( "shoot" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  )  )  { 
  if ( anim == "slide" || anim == "crawl" )  { 
  if ( getcon ( "down" , "hold" , true , playerNum )  ||  ! placeFree ( x , y - 8 )  ) anim = "crawl" ; 
 
  else anim = "walk" ; 
 
  } 
  
  } 
  
  if ( getcon ( "jump" , "press" , true , playerNum )  || getcon ( "up" , "press" , true , playerNum )  )  if (  ! getcon ( "shoot" , "hold" , true , playerNum )  )  if ( placeFree ( x , y + 2 )  && placeFree ( x , y - 2 )  ) anim = "fall" ; 
 
  
  
  } 
  
  if ( anim != "climb" && anim != "wall" )  { 
  if (  ( getcon ( "right" , "hold" , true , playerNum )  &&  ! getcon ( "left" , "hold" , true , playerNum )  && anim != "slide" && canMove )  ||  ( hspeed > 0.1 && anim == "slide" )  ) flip = 0 ; 
 
  if (  ( getcon ( "left" , "hold" , true , playerNum )  &&  ! getcon ( "right" , "hold" , true , playerNum )  && anim != "slide" && canMove )  ||  ( hspeed <  - 0.1 && anim == "slide" )  ) flip = 1 ; 
 
  } 
  
  if ( stats . weapon != "air" && stats . stamina < stats . maxStamina && blinking == 0.0 && guardtime <= 0 ) stats . stamina += 0.05 ; 
 
  if (  (  (  ! placeFree ( x - hspeed , y + 2 )  && vspeed >= 0 )  ||  ! placeFree ( x , y + 2 )  || anim == "climb" || onPlatform (  )  )  &&  ! onWall )  { 
 canJump = 16 ; 
 if ( stats . weapon == "air" && stats . stamina < stats . maxStamina ) stats . stamina += 0.2 ; 
 
  } 
  
  else  { 
  if ( canJump > 0 ) canJump --  ; 
 
  if ( stats . weapon == "air" && stats . stamina < 1 ) stats . stamina += 0.02 ; 
 
  } 
  
  if ( canMove )  { 
 mspeed = 3.0 ; 
 if ( config . stickspeed )  { 
  var j = null ;
  if ( playerNum == 1 ) j = config . joy ; 
 
  if ( playerNum == 2 ) j = config . joy2 ; 
 
  if ( abs ( joyX ( j . index )  )  > js_max * 0.1 ) mspeed =  ( 3.0 * abs ( joyX ( j . index )  )  )  / float ( js_max )  ; 
 
  } 
  
  if ( stats . weapon == "ice" ) mspeed += 0.5 ; 
 
  if ( invincible ) mspeed += 0.4 ; 
 
  if ( nowInWater ) mspeed *= 0.8 ; 
 
  if ( anim == "crawl" ) mspeed = 1.0 ; 
 
  if ( zoomies > 0 ) mspeed *= 2.0 ; 
 
  if ( zoomies > 0 ) accel = 0.4 ; 
 
  else accel = 0.2 ; 
 
  if ( getcon ( "right" , "hold" , true , playerNum )  && hspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "skid" )  { 
  if ( hspeed >= 2 )  { 
  if ( onIce (  )  ) hspeed += accel * 0.2 ; 
 
  else hspeed += accel * 0.4 ; 
 
  } 
  
  else  if ( onIce (  )  ) hspeed += accel / 2.0 ; 
 
  else hspeed += accel ; 
 
  
  } 
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && hspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "skid" )  { 
  if ( hspeed <=  - 2 )  { 
  if ( onIce (  )  ) hspeed -= accel * 0.2 ; 
 
  else hspeed -= accel * 0.4 ; 
 
  } 
  
  else  if ( onIce (  )  ) hspeed -= accel / 2.0 ; 
 
  else hspeed -= accel ; 
 
  
  } 
  
  if ( getcon ( "right" , "hold" , true , playerNum )  && rspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "skid" )  if ( freeRight || placeFree ( x + 1 , y - 2 )  )  { 
  if ( hspeed >= 2 ) rspeed += accel / 2.0 ; 
 
  else rspeed += accel ; 
 
  if ( rspeed < hspeed ) rspeed = hspeed ; 
 
  } 
  
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && rspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "skid" )  if ( freeLeft || placeFree ( x - 1 , y - 2 )  )  { 
  if ( hspeed <=  - 2 ) rspeed += accel / 2.0 ; 
 
  else rspeed -= accel ; 
 
  if ( rspeed > hspeed ) rspeed = hspeed ; 
 
  } 
  
  
  if ( rspeed > 0 ) rspeed -= 0.1 ; 
 
  if ( rspeed < 0 ) rspeed += 0.1 ; 
 
  if (  ( abs ( rspeed )  <= 0.5 || hspeed == 0 )  &&  ! getcon ( "right" , "hold" , true , playerNum )  &&  ! getcon ( "left" , "hold" , true , playerNum )  ) rspeed = 0.0 ; 
 
  if ( anim == "slide" && stats . weapon == "fire" )  { 
 rspeed = hspeed ; 
 if ( fabs ( hspeed )  > 4 )  { 
  if ( getFrames (  )  % 4 == 0 ) fireWeapon ( DashFlame , x + hspeed * 2 , y + 4 + vspeed , 1 , id )  ; 
 
 damageMultF . fire = 0.0 ; 
 } 
  
  } 
  
  else damageMultF . fire = 0.5 ; 
 
  if ( anim == "climb" )  { 
 vspeed = 0 ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  if ( placeFree ( x , y - 2 )  )  { 
 frame -= climbdir / 8 ; 
y -= 2 ; 
 } 
  
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  if ( placeFree ( x , y + 2 )  )  { 
 frame += climbdir / 8 ; 
y += 2 ; 
 } 
  
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && atCrossLadder (  )  )  if ( placeFree ( x - 2 , y )  )  { 
  if (  ! getcon ( "up" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  ) frame -= climbdir / 8 ; 
 
 x -= 1 ; 
 } 
  
  
  if ( getcon ( "right" , "hold" , true , playerNum )  && atCrossLadder (  )  )  if ( placeFree ( x + 2 , y )  )  { 
  if (  ! getcon ( "up" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  ) frame += climbdir / 8 ; 
 
 x += 1 ; 
 } 
  
  
  var felloff = true ;
  if ( atLadder (  )  || atCrossLadder (  )  ) felloff = false ; 
 
  if ( felloff )  { 
 anim = "fall" ; 
frame = 0.0 ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  ) vspeed =  - 2.5 ; 
 
  } 
  
  else  if (  ! atCrossLadder (  )  )  { 
 x -=  (  squirrelThreeWaysCompare (  ( x % 16 )  , 8 )  )  ; 
 } 
  
  
  if ( getcon ( "right" , "press" , true , playerNum )  && canMove ) flip = 0 ; 
 
  if ( getcon ( "left" , "press" , true , playerNum )  && canMove ) flip = 1 ; 
 
  } 
  
  if (  (  ( getcon ( "down" , "hold" , true , playerNum )  && placeFree ( x , y + 2 )  )  || getcon ( "up" , "hold" , true , playerNum )  )  && anim != "hurt" && anim != "climb" &&  ( vspeed >= 0 || getcon ( "down" , "press" , true , playerNum )  || getcon ( "up" , "press" , true , playerNum )  )  )  { 
  if ( atLadder (  )  || atCrossLadder (  )  )  { 
 anim = "climb" ; 
frame = 0.0 ; 
hspeed = 0 ; 
vspeed = 0 ; 
x = round ( x )  ; 
 } 
  
  } 
  
  if ( getcon ( "jump" , "press" , true , playerNum )  || jumpBuffer > 0 )  { 
  if ( onPlatform (  )  &&  ! placeFree ( x , y + 1 )  && getcon ( "down" , "hold" , true , playerNum )  )  { 
 y ++  ; 
canJump = 32 ; 
 if (  ! placeFree ( x , y )  &&  ! placeFree ( x , y - 1 )  ) y --  ; 
 
  } 
  
  else  if ( canJump > 0 && placeFree ( x , y - 2 )  )  { 
 jumpBuffer = 0 ; 
 if ( anim == "climb" ) vspeed =  - 3 ; 
 
  else  if ( stats . weapon == "air" || nowInWater ) vspeed =  - 5.0 ; 
 
  else vspeed =  - 5.8 ; 
 
  
 didJump = true ; 
 if ( stats . weapon != "air" ) canJump = 0 ; 
 
  if ( anim != "hurt" && anim != "dive" &&  ( stats . weapon != "earth" || anim != "slide" )  )  { 
 anim = "jumpU" ; 
frame = 0.0 ; 
 } 
  
  if (  ! freeDown2 || freeRight && freeLeft )  { 
  if ( stats . weapon != "air" ) popSound ( sndJump )  ; 
 
  else popSound ( sndFlap )  ; 
 
  } 
  
  } 
  
  else  if ( freeDown && anim != "climb" &&  ! placeFree ( x - 2 , y )  && anim != "wall" && hspeed <= 0 && tileGetSolid ( x - 12 , y - 12 )  != 40 && tileGetSolid ( x - 12 , y + 12 )  != 40 && tileGetSolid ( x - 12 , y )  != 40 )  { 
 flip = 0 ; 
anim = "wall" ; 
frame = 0.0 ; 
playSound ( sndWallkick , 0 )  ; 
 } 
  
  else  if ( freeDown && anim != "climb" &&  ! placeFree ( x + 2 , y )  && anim != "wall" && hspeed >= 0 && tileGetSolid ( x + 12 , y - 12 )  != 40 && tileGetSolid ( x + 12 , y + 12 )  != 40 && tileGetSolid ( x + 12 , y )  != 40 )  { 
 flip = 1 ; 
anim = "wall" ; 
frame = 0.0 ; 
playSound ( sndWallkick , 0 )  ; 
 } 
  
  else  if ( floor ( stats . stamina )  > 0 && stats . weapon == "air" && getcon ( "jump" , "press" , true , playerNum )  )  { 
  if ( vspeed > 0 ) vspeed = 0.0 ; 
 
  if ( vspeed >  - 4 ) vspeed -= 3.0 ; 
 
 didJump = true ; 
 if ( stats . weapon != "air" ) canJump = 0 ; 
 
  if ( anim != "hurt" && anim != "dive" )  { 
 anim = "jumpU" ; 
frame = 0.0 ; 
 } 
  
  if ( stats . weapon != "air" )  { 
 stopSound ( sndJump )  ; 
playSound ( sndJump , 0 )  ; 
 } 
  
  else  { 
 stopSound ( sndFlap )  ; 
playSound ( sndFlap , 0 )  ; 
 } 
  
 stats . stamina --  ; 
 } 
  
  
  
  
  
  } 
  
  if (  ( anim == "fall" )  &&  (  ( getcon ( "left" , "hold" , true , playerNum )  &&  ! freeLeft )  ||  ( getcon ( "right" , "hold" , true , playerNum )  &&  ! freeRight )  )  )  { 
  if (  ! freeLeft &&  !  ( onIce ( x - 8 , y )  || onIce ( x - 8 , y - 16 )  )  )  { 
  if ( vspeed > 0.5 ) vspeed = 0.5 ; 
 
  if ( getFrames (  )  / 4 % 4 == 0 ) newActor ( PoofTiny , x - 4 , y + 12 )  ; 
 
 an [ "fall" ] = an [ "fallW" ]  ; 
anim = "fall" ; 
flip = 0 ; 
 } 
  
  if (  ! freeRight &&  !  ( onIce ( x + 8 , y )  || onIce ( x + 8 , y - 16 )  )  )  { 
  if ( vspeed > 0.5 ) vspeed = 0.5 ; 
 
  if ( getFrames (  )  / 4 % 4 == 0 ) newActor ( PoofTiny , x + 4 , y + 12 )  ; 
 
 an [ "fall" ] = an [ "fallW" ]  ; 
anim = "fall" ; 
flip = 1 ; 
 } 
  
  } 
  
  else an [ "fall" ] = an [ "fallN" ]  ; 
 
  if ( getcon ( "jump" , "press" , true , playerNum )  && jumpBuffer <= 0 && freeDown ) jumpBuffer = 8 ; 
 
  if ( jumpBuffer > 0 ) jumpBuffer --  ; 
 
  if ( getcon ( "jump" , "release" , true , playerNum )  && vspeed < 0 && didJump )  { 
 didJump = false ; 
vspeed /= 2.5 ; 
 } 
  
  if (  (  (  (  ! freeDown2 || onPlatform (  )  )  && getcon ( "down" , "hold" , true , playerNum )  )  ||  ( getcon ( "shoot" , "hold" , true , playerNum )  && stats . weapon == "earth" )  )  && anim != "dive" && anim != "slide" && anim != "jumpU" && anim != "jumpT" && anim != "fall" && anim != "hurt" && anim != "wall" && anim != "crawl" )  { 
  if ( placeFree ( x + 2 , y + 1 )  &&  ! onPlatform (  )  || hspeed >= 1.5 )  { 
 anim = "dive" ; 
frame = 0.0 ; 
flip = 0 ; 
popSound ( sndSlide , 0 )  ; 
 } 
  
  else  if ( placeFree ( x - 2 , y + 1 )  &&  ! onPlatform (  )  || hspeed <=  - 1.5 )  { 
 anim = "dive" ; 
frame = 0.0 ; 
flip = 1 ; 
popSound ( sndSlide , 0 )  ; 
 } 
  
  else  { 
 anim = "dive" ; 
frame = 0.0 ; 
 } 
  
  
  } 
  
  if ( anim == "crawl" )  { 
  if (  (  ! getcon ( "down" , "hold" , true , playerNum )  )  && placeFree ( x , y - 6 )  ) anim = "stand" ; 
 
  else  { 
 frame +=  ( hspeed / 8.0 )  ; 
shape = shapeSlide ; 
 } 
  
  if (  ( placeFree ( x + 2 , y + 1 )  || placeFree ( x - 2 , y + 1 )  )  &&  ! onPlatform (  )  ) anim = "slide" ; 
 
  } 
  
  } 
  
  else rspeed = min ( rspeed , abs ( hspeed )  )  ; 
 
  if (  ! freeDown2 || onPlatform (  )  )  { 
  if ( anim == "slide" )  { 
  if ( hspeed > 0 ) hspeed -= friction / 3.0 ; 
 
  if ( hspeed < 0 ) hspeed += friction / 3.0 ; 
 
  } 
  
  else  { 
  if ( hspeed > 0 )  { 
  if (  !  ( mspeed > 2 && getcon ( "right" , "hold" , true , playerNum )  )  || anim == "crawl" ||  ! canMove ) hspeed -= friction ; 
 
  } 
  
  if ( hspeed < 0 )  { 
  if (  !  ( mspeed > 2 && getcon ( "left" , "hold" , true , playerNum )  )  || anim == "crawl" ||  ! canMove ) hspeed += friction ; 
 
  } 
  
  } 
  
  } 
  
  else  if ( anim != "slide" && anim != "dive" )  { 
  if ( hspeed > 0 &&  ! getcon ( "right" , "hold" , true , playerNum )  ) hspeed -= friction / 3.0 ; 
 
  if ( hspeed < 0 &&  ! getcon ( "left" , "hold" , true , playerNum )  ) hspeed += friction / 3.0 ; 
 
  } 
  
  
  if ( fabs ( hspeed )  < friction ) hspeed = 0.0 ; 
 
  if (  ( placeFree ( x , y + 2 )  || vspeed < 0 )  &&  ( vspeed < 2 ||  ( vspeed < 16 &&  ( stats . weapon != "air" || getcon ( "down" , "hold" , true , playerNum )  )  &&  ! nowInWater )  )  && antigrav <= 0 ) vspeed +=  ( vspeed > 5 ? gravity / vspeed : gravity )  ; 
 
  else  if ( antigrav > 0 ) antigrav --  ; 
 
  
  if (  ! freeUp && vspeed < 0 ) vspeed = 0.0 ; 
 
  if ( anim == "slide" &&  ! placeFree ( x , y + 1 )  && vspeed >= 2 && placeFree ( x + hspeed , y )  &&  ! onPlatform (  )  )  { 
  if ( flip ) hspeed -= vspeed / 2.5 ; 
 
  else hspeed += vspeed / 2.5 ; 
 
 vspeed /= 2 ; 
 } 
  
  if ( anim == "dive" && vspeed >= 2 &&  ! placeFree ( x , y + 1 )  && stats . weapon == "earth" )  { 
 hspeed *= 2.0 ; 
vspeed /= 2 ; 
 } 
  
  var speedLimit = 6.0 ;
  if (  ! placeFree ( x , y + 1 )  )  { 
  if ( stats . weapon == "ice" )  { 
  if ( anim == "slide" ) speedLimit = 8.0 ; 
 
  else speedLimit = 8.0 ; 
 
  } 
  
  else  if ( stats . weapon == "earth" && anim == "slide" ) speedLimit = 8.0 ; 
 
  else  { 
  if ( slippery ) speedLimit = 7.0 ; 
 
  } 
  
  
  if ( hspeed > speedLimit ) hspeed = max ( speedLimit , hspeed * 0.9 )  ; 
 
  if ( hspeed <  - speedLimit ) hspeed =  - max ( speedLimit , hspeed * 0.9 )  ; 
 
  } 
  
  if ( stats . weapon == "air" || nowInWater ) gravity = 0.12 ; 
 
  else gravity = 0.25 ; 
 
  if ( anim == "climb" || anim == "wall" ) gravity = 0 ; 
 
  if ( canMove )  switch ( stats . weapon )  {  case "fire" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy >= 1 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Fireball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += hspeed ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  case "ice" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Iceball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += hspeed ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  case "air" :  if ( getcon ( "shoot" , "press" , true , playerNum )  &&  ( anim == "jumpT" || anim == "jumpU" || anim == "fall" )  && anim != "hurt" )  { 
 anim = "dive" ; 
frame = 0.0 ; 
playSound ( sndSlide , 0 )  ; 
 if ( flip == 0 && hspeed < 2 ) hspeed = 2 ; 
 
  if ( flip == 1 && hspeed >  - 2 ) hspeed =  - 2 ; 
 
  } 
  
  break ;  case "earth" :  if ( getcon ( "shoot" , "press" , true , playerNum )  &&  ( anim != "hurt" )  )  { 
 anim = "dive" ; 
frame = 0.0 ; 
playSound ( sndSlide , 0 )  ; 
 if ( flip == 0 && hspeed < 2 ) hspeed = 2 ; 
 
  if ( flip == 1 && hspeed >  - 2 ) hspeed =  - 2 ; 
 
  } 
  
  break ;  case "water" :  if ( getcon ( "shoot" , "hold" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy >= 0.25 && getFrames (  )  % 4 == 0 &&  ! holding )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Waterball , x + fx , y - 4 , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += hspeed ; 
c . hspeed += 1.0 - randFloat ( 2.0 )  ; 
c . vspeed += 0.5 - randFloat ( 2.0 )  ; 
playSound ( sndWaterball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  && freeDown2 )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy -= 0.25 ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  case "shock" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy >= 1 )  { 
  var fx = 5 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Shockball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 1 ; 
 
  else c . hspeed =  - 1 ; 
 
 c . hspeed += hspeed ; 
playSound ( sndExplodeT , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  }  
  if ( canMove )  switch ( stats . subitem )  {  case "fire" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy >= 1 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Fireball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += hspeed ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  case "ice" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Iceball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += hspeed ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  case "water" :  if ( getcon ( "spec1" , "hold" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy >= 0.25 && getFrames (  )  % 4 == 0 &&  ! holding )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Waterball , x + fx , y - 4 , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += hspeed ; 
c . hspeed += 1.0 - randFloat ( 2.0 )  ; 
c . vspeed += 0.5 - randFloat ( 2.0 )  ; 
playSound ( sndWaterball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  && freeDown2 )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy -= 0.25 ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  case "shock" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy >= 1 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Shockball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 4 ; 
 
  else c . hspeed =  - 4 ; 
 
 c . hspeed += hspeed ; 
playSound ( sndExplodeT , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  }  
  if (  ! placeFree ( x , y + 1 )  &&  ! onPlatform (  )  )  { 
 groundx = x ; 
groundy = y ; 
 } 
  
  } 
  
  else  { 
 swimming = true ; 
shapeStand . h = 6.0 ; 
an [ "fall" ] = an [ "fallN" ]  ; 
 if ( anim == "fallW" ) anim = "fallN" ; 
 
  switch ( anim )  {  case "swimF" :  case "swimU" :  case "swimD" :  case "swimUF" :  case "swimDF" : frame += sqrt ( abs ( hspeed * hspeed )  + abs ( vspeed * vspeed )  )  / 12 ; 
 break ;  case "hurt" : frame += 0.1 ; 
 if ( floor ( frame )  > 1 )  { 
 anim = "fall" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "fall" : frame += 0.01 ; 
 break ;  }  if (  ( (an[ ( anim ) ] !== undefined) )  && an [ anim ]  != null && anim != "hurt" ) frame = wrap ( abs ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ; 
 
  if ( anim != "hurt" )  { 
  if ( fabs ( hspeed )  < 0.3 && fabs ( vspeed )  < 0.2 ) anim = "fall" ; 
 
  if ( fabs ( hspeed )  > 0.3 ) anim = "swimF" ; 
 
  if ( vspeed > 0.2 ) anim = "swimD" ; 
 
  if ( vspeed <  - 0.2 ) anim = "swimU" ; 
 
  if ( fabs ( hspeed )  > 0.3 && vspeed > 0.2 ) anim = "swimDF" ; 
 
  if ( fabs ( hspeed )  > 0.3 && vspeed <  - 0.2 ) anim = "swimUF" ; 
 
  } 
  
  if ( canMove )  { 
 mspeed = 3.0 ; 
 if ( config . stickspeed )  { 
  var j = null ;
  if ( playerNum == 1 ) j = config . joy ; 
 
  if ( playerNum == 2 ) j = config . joy2 ; 
 
  if ( abs ( joyX ( j . index )  )  > js_max * 0.1 ) mspeed =  ( 3.0 * abs ( joyX ( j . index )  )  )  / float ( js_max )  ; 
 
  if ( abs ( joyY ( j . index )  )  > abs ( joyX ( j . index )  )  && abs ( joyY ( j . index )  )  > js_max * 0.1 ) mspeed = 3.0 / float ( js_max )  * abs ( joyY ( j . index )  )  ; 
 
  } 
  
  if ( invincible ) mspeed += 0.4 ; 
 
  if ( nowInWater ) mspeed *= 0.8 ; 
 
  if ( anim == "crawl" ) mspeed = 1.0 ; 
 
  if ( zoomies > 0 ) mspeed *= 2.0 ; 
 
  if ( zoomies > 0 ) accel = 0.2 ; 
 
  else accel = 0.1 ; 
 
  if ( getcon ( "right" , "hold" , true , playerNum )  && hspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" ) hspeed += accel ; 
 
  if ( getcon ( "left" , "hold" , true , playerNum )  && hspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" ) hspeed -= accel ; 
 
  if ( getcon ( "down" , "hold" , true , playerNum )  && vspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" ) vspeed += accel ; 
 
  if ( getcon ( "up" , "hold" , true , playerNum )  && vspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" ) vspeed -= accel ; 
 
  if ( stats . stamina >= 1 && getcon ( "spec2" , "press" , true , playerNum )  )  { 
  var dashdir = 0 ;
  var dashspd = max ( 6 , distance2 ( 0 , 0 , hspeed , vspeed )  )  ;
  if ( getcon ( "left" , "hold" , true , playerNum )  )  { 
  if ( getcon ( "up" , "hold" , true , playerNum )  ) dashdir = 225 ; 
 
  else  if ( getcon ( "down" , "hold" , true , playerNum )  ) dashdir = 135 ; 
 
  else dashdir = 180 ; 
 
  
  } 
  
  else  if ( getcon ( "right" , "hold" , true , playerNum )  )  { 
  if ( getcon ( "up" , "hold" , true , playerNum )  ) dashdir =  - 45 ; 
 
  else  if ( getcon ( "down" , "hold" , true , playerNum )  ) dashdir = 45 ; 
 
  else dashdir = 0 ; 
 
  
  } 
  
  else  if ( getcon ( "up" , "hold" , true , playerNum )  ) dashdir =  - 90 ; 
 
  else  if ( getcon ( "down" , "hold" , true , playerNum )  ) dashdir = 90 ; 
 
  else dashdir =  ( flip == 0 ? 0 : 180 )  ; 
 
  
  
  
 hspeed = lendirX ( dashspd , dashdir )  ; 
vspeed = lendirY ( dashspd , dashdir )  ; 
stats . stamina -= 1.0 ; 
guardtime = 120 ; 
 var c = actor [ fireWeapon ( InstaShield , x , y , 1 , id )  . id ]  ;
 c . sprite = sprShieldDash ; 
c . angle = dashdir ; 
blinking = max ( 8 , blinking )  ; 
 } 
  
  } 
  
  if ( guardtime <= 0 ) stats . stamina += 0.05 ; 
 
  if ( hspeed > 0 ) hspeed -= friction / 2 ; 
 
  if ( hspeed < 0 ) hspeed += friction / 2 ; 
 
  if ( fabs ( hspeed )  < friction / 2 ) hspeed = 0.0 ; 
 
  if ( vspeed > 0 ) vspeed -= friction / 2 ; 
 
  if ( vspeed < 0 ) vspeed += friction / 2 ; 
 
  if ( fabs ( vspeed )  < friction / 2 ) vspeed = 0.0 ; 
 
  if ( vspeed > 4 ) vspeed -= 0.2 ; 
 
  if ( anim != "climb" && anim != "wall" )  { 
  if ( hspeed > 0.1 ) flip = 0 ; 
 
  if ( hspeed <  - 0.1 ) flip = 1 ; 
 
  } 
  
  if ( canMove )  switch ( stats . weapon )  {  case "fire" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var c = fireWeapon ( Fireball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case "ice" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var c = fireWeapon ( Iceball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 2 ; 
c . vspeed += vspeed / 2 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case "water" :  if ( getcon ( "shoot" , "hold" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0.25 && getFrames (  )  % 4 == 0 &&  ! holding )  { 
  var c = fireWeapon ( Waterball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndWaterball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
c . hspeed += 1.0 - randFloat ( 2.0 )  ; 
c . vspeed += 1.0 - randFloat ( 2.0 )  ; 
stats . energy -= 0.25 ; 
firetime = 60 ; 
 } 
  
  break ;  case "shock" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var c = fireWeapon ( Shockball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndExplodeT , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  }  
  if ( canMove )  switch ( stats . subitem )  {  case "fire" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var c = fireWeapon ( Fireball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case "ice" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var c = fireWeapon ( Iceball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 2 ; 
c . vspeed += vspeed / 2 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case "water" :  if ( getcon ( "spec1" , "hold" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0.25 && getFrames (  )  % 4 == 0 &&  ! holding )  { 
  var c = fireWeapon ( Waterball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndWaterball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
c . hspeed += 1.0 - randFloat ( 2.0 )  ; 
c . vspeed += 1.0 - randFloat ( 2.0 )  ; 
stats . energy -= 0.25 ; 
firetime = 60 ; 
 } 
  
  break ;  case "shock" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var c = fireWeapon ( Shockball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndExplodeT , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  }  
  } 
  
  if ( canMove && getcon ( "swap" , "press" , true , playerNum )  ) swapitem (  )  ; 
 
 shape . setPos ( x , y )  ; 
xprev = x ; 
yprev = y ; 
 if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else  { 
 vspeed /= 2 ; 
 if ( fabs ( vspeed )  < 0.01 ) vspeed = 0 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  } 
  
  if ( hspeed != 0 )  { 
  if ( placeFree ( x + hspeed , y )  )  { 
  for (  var i = 0 ;
 i < max ( 8 , abs ( hspeed * 3 )  )  ; i ++  )  if (  ! placeFree ( x , y + max ( 6 , abs ( hspeed )  )  )  && placeFree ( x , y + 1 )  &&  ! swimming && vspeed >= 0 &&  ! onPlatform ( hspeed )  &&  ! onPlatform ( hspeed ,  - 1 )  )  { 
 y += 1 ; 
 } 
  
 x += hspeed ; 
 } 
  
  else  { 
  var didstep = false ;
  for (  var i = 1 ;
 i <= 8 ; i ++  )  { 
  if ( placeFree ( x + hspeed , y - i )  )  { 
 x += hspeed ; 
y -= i ; 
 if ( i > 2 )  { 
  if ( hspeed > 0 ) hspeed -= 0.2 ; 
 
  if ( hspeed < 0 ) hspeed += 0.2 ; 
 
  } 
  
 didstep = true ; 
 break ;  } 
  
  } 
  if ( didstep == false && fabs ( hspeed )  >= 1 ) hspeed -=  ( hspeed / fabs ( hspeed )  )  ; 
 
  else  if ( didstep == false && fabs ( hspeed )  < 1 ) hspeed = 0 ; 
 
  
  } 
  
  } 
  
  if ( anim == "slide" || anim == "crawl" ) shape = shapeSlide ; 
 
  else shape = shapeStand ; 
 
 shapeStand . setPos ( x , y )  ; 
shapeSlide . setPos ( x , y )  ; 
 if ( y <  - 100 ) y =  - 100.0 ; 
 
  switch ( escapeMoPlat ( 1 , 1 )  )  {  case 1 :  if ( vspeed < 0 ) vspeed = 0 ; 
 
  break ;  case 2 :  if ( hspeed < 0 ) hspeed = 0 ; 
 
  break ;  case  - 1 :  if ( vspeed > 0 ) vspeed = 0 ; 
 
  break ;  case  - 2 :  if ( hspeed > 0 ) hspeed = 0 ; 
 
  break ;  }  if ( onIce (  )  ) friction = 0.01 ; 
 
  else friction = 0.1 ; 
 
  if ( hurt > 0 && invincible == 0 )  { 
  if ( blinking == 0 )  { 
 blinking = 60 ; 
playSound ( sndHurt , 0 )  ; 
 if ( stats . weapon == "earth" && anim == "slide" && stats . stamina > 0 )  { 
 stats . stamina -= hurt ; 
guardtime = 180 ; 
newActor ( Spark , x , y )  ; 
 } 
  
  else  { 
  if ( stats . health > 0 ) stats . health -= hurt ; 
 
  if ( flip == 0 ) hspeed =  - 2.0 ; 
 
  else hspeed = 2.0 ; 
 
 anim = "hurt" ; 
frame = 0.0 ; 
 } 
  
  } 
  
 hurt = 0 ; 
 } 
  
  else hurt = 0 ; 
 
  if ( blinking > 0 ) blinking --  ; 
 
  if ( invincible > 0 ) invincible --  ; 
 
  if (  (  ( invincible % 2 == 0 && invincible > 240 )  ||  ( invincible % 4 == 0 && invincible > 120 )  || invincible % 8 == 0 )  && invincible > 0 ) newActor ( Glimmer , x + 10 - randInt ( 20 )  , y + 10 - randInt ( 20 )  )  ; 
 
  if (  ( zoomies > 0 )  && getFrames (  )  % 2 == 0 ) newActor ( AfterImage , x , y ,  [ sprite , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  , 0 , flip , 0 , 1 , 1 ]  )  ; 
 
 inMelee =  (  [ "slide" , "drill" ]  . squirrelFind ( anim )  != null || swimming && guardtime > 100 )  ; 
 } ;  returnVal . draw = function (  ) {  if (  ! hidden )  { 
  switch ( stats . weapon )  {  case "normal" : sprite = mySprNormal ; 
an [ "stand" ] = an [ "standN" ]  ; 
damageMult = damageMultN ; 
 break ;  case "fire" : sprite = mySprFire ; 
an [ "stand" ] = an [ "standF" ]  ; 
damageMult = damageMultF ; 
 break ;  case "ice" : sprite = mySprIce ; 
an [ "stand" ] = an [ "standI" ]  ; 
damageMult = damageMultI ; 
 break ;  case "air" : sprite = mySprAir ; 
an [ "stand" ] = an [ "standA" ]  ; 
damageMult = damageMultA ; 
 break ;  case "earth" : sprite = mySprEarth ; 
an [ "stand" ] = an [ "standE" ]  ; 
damageMult = damageMultE ; 
 break ;  case "shock" : sprite = mySprShock ; 
an [ "stand" ] = an [ "standN" ]  ; 
damageMult = damageMultS ; 
 break ;  case "water" : sprite = mySprWater ; 
an [ "stand" ] = an [ "standN" ]  ; 
damageMult = damageMultW ; 
 break ;  default : sprite = mySprNormal ; 
an [ "stand" ] = an [ "standN" ]  ; 
damageMult = damageMultN ; 
 break ;  }  if (  ( (an[ ( anim ) ] !== undefined) )  && an [ anim ]  != null )  { 
 frame = wrap ( frame , 0 , an [ anim ]  . len (  )  - 1 )  ; 
 if ( blinking == 0 || anim == "hurt" )  { 
 drawSpriteZ ( 2 , sprite , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 } 
  
 drawSpriteZ ( 2 , sprite , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx , y - camy , 0 , flip , 1 , 1 , wrap ( blinking , 0 , 10 )  . tofloat (  )  / 10.0 )  ; 
 } 
  
  if ( debug )  { 
 setDrawColor ( 0x008000ff )  ; 
shape . draw (  )  ; 
drawText ( font , x + 16 - camx , y - camy , anim )  ; 
 } 
  
  } 
  
  if ( tftime !=  - 1 )  { 
  if ( tftime < 4 )  { 
  if (  ! hidden ) drawSpriteZ ( 3 , sprTFflash , tftime , x - camx , y - camy )  ; 
 
 tftime += 0.25 ; 
 } 
  
  else tftime =  - 1 ; 
 
  } 
  
 drawLight ( sprLightBasic , 0 , x - camx , y - camy )  ; 
 } ;  returnVal . atLadder = function (  ) {  var ns = Rec ( x + shape . ox , y + shape . oy , shape . w , shape . h , shape . kind )  ;
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  ;
  var wl = null ;
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 wl = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  if ( wl != null )  { 
  var tile = cx +  ( cy * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 29 || wl . data [ tile ]  - gvMap . solidfid == 50 )  { 
 gvMap . shape . setPos (  ( cx * 16 )  + 8 ,  ( cy * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 1.0 ; 
gvMap . shape . h = 12.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  } 
  
  return false ;
  } ;  returnVal . die = function ( skipres = false ) {  if ( resTime > 0 )  return ; 
  
  if ( stats . canres &&  ! skipres )  { 
 stats . health = game . maxHealth ; 
blinking = 120 ; 
hspeed = 0.0 ; 
vspeed = 0.0 ; 
 if ( y > gvMap . h )  { 
 invincible = 300 ; 
resTime = 300 ; 
vspeed =  - 4.0 ; 
 } 
  
 stats . canres = false ; 
 } 
  
  else  { 
 stats . health = 0 ; 
deleteActor ( id )  ; 
 if ( playerNum == 1 ) gvPlayer = false ; 
 
  if ( playerNum == 2 ) gvPlayer2 = false ; 
 
 newActor ( DeadPlayer , x , y ,  [ sprite , an [ "die" ]  , playerNum ]  )  ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "Tux" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . canJump = 16 ; 
 squirrelClassFunction . didJump = false ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . canMove = true ; 
 squirrelClassFunction . mspeed = 4 ; 
 squirrelClassFunction . climbdir = 1.0 ; 
 squirrelClassFunction . blinking = 0 ; 
 squirrelClassFunction . xstart = 0.0 ; 
 squirrelClassFunction . ystart = 0.0 ; 
 squirrelClassFunction . firetime = 0 ; 
 squirrelClassFunction . guardtime = 0 ; 
 squirrelClassFunction . hurt = 0 ; 
 squirrelClassFunction . swimming = false ; 
 squirrelClassFunction . inMelee = false ; 
 squirrelClassFunction . canStomp = true ; 
 squirrelClassFunction . sprite = sprTux ; 
 squirrelClassFunction . invincible = 0 ; 
 squirrelClassFunction . shapeStand = 0 ; 
 squirrelClassFunction . shapeSlide = 0 ; 
 squirrelClassFunction . tftime =  - 1 ; 
 squirrelClassFunction . hidden = false ; 
 squirrelClassFunction . jumpBuffer = 0 ; 
 squirrelClassFunction . rspeed = 0.0 ; 
 squirrelClassFunction . slideframe = 0.0 ; 
 squirrelClassFunction . antigrav = 0 ; 
 squirrelClassFunction . groundx = 0.0 ; 
 squirrelClassFunction . groundy = 0.0 ; 
 squirrelClassFunction . slippery = false ; 
 squirrelClassFunction . accel = 0.2 ; 
 squirrelClassFunction . noot = sndNootA ; 
 squirrelClassFunction . rollspeed = 8.0 ; 
 squirrelClassFunction . an =  { stand :  [ 0 ]  , standN :  [ 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 76 , 77 , 78 , 79 , 78 , 79 , 78 , 79 , 78 , 79 , 78 , 77 , 76 ]  , standF :  [ 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 76 , 77 , 78 , 79 ]  , standI :  [ 0 , 1 , 2 , 3 ]  , standA :  [ 0 , 1 , 2 , 3 ]  , standE :  [ 0 , 1 , 2 , 3 ]  , walk :  [ 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 ]  , run :  [ 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 ]  , dive :  [ 24 , 25 ]  , slide :  [ 26 , 27 , 28 , 29 ]  , hurt :  [ 30 , 31 ]  , jumpU :  [ 32 , 33 ]  , jumpT :  [ 34 , 35 ]  , fall :  [ 0 ]  , fallN :  [ 36 , 37 ]  , fallW :  [ 48 ]  , swimF :  [ 52 , 53 , 54 , 55 ]  , swimUF :  [ 56 , 57 , 58 , 59 ]  , swimDF :  [ 60 , 61 , 62 , 63 ]  , swimU :  [ 64 , 65 , 66 , 67 ]  , swimD :  [ 68 , 69 , 70 , 71 ]  , skid :  [ 4 , 5 ]  , push :  [ 6 , 7 ]  , climb :  [ 44 , 45 , 46 , 47 , 46 , 45 ]  , wall :  [ 48 , 49 ]  , crawl :  [ 72 , 73 , 74 , 75 , 74 , 73 ]  , die :  [ 50 , 51 ]  , win :  [ 38 ]  }  ; 
 squirrelClassFunction . animOffset = 0 ; 
 squirrelClassFunction . mySprNormal = null ; 
 squirrelClassFunction . mySprFire = null ; 
 squirrelClassFunction . mySprIce = null ; 
 squirrelClassFunction . mySprAir = null ; 
 squirrelClassFunction . mySprEarth = null ; 
 squirrelClassFunction . mySprShock = null ; 
 squirrelClassFunction . mySprWater = null ; 
 squirrelClassFunction . mySprLight = null ; 
 squirrelClassFunction . mySprDark = null ; 
 squirrelClassFunction . nowInWater = false ; 
 squirrelClassFunction . damageMultN =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultF =  { normal : 1.0 , fire : 0.5 , ice : 1.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultI =  { normal : 1.0 , fire : 2.0 , ice : 0.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultA =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 2.0 , air : 0.5 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultE =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 0.50 , air : 2.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 0.5 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultS =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 0.5 , water : 1.5 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultW =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 2.0 , water : 0.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultL =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 0.5 , dark : 2.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultD =  { normal : 1.0 , fire : 1.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 0.5 , light : 2.0 , dark : 0.5 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Player;  return squirrelClassFunction; })()) ; 
Penny =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Tux ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
mySprNormal = sprPenny ; 
mySprFire = sprPennyFire ; 
mySprIce = sprPennyIce ; 
mySprAir = sprPennyAir ; 
mySprEarth = sprPennyEarth ; 
mySprShock = sprPenny ; 
mySprWater = sprPenny ; 
noot = sndNootB ; 
 } ;  returnVal . _typeof = function (  ) {  return "Penny" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Tux;  return squirrelClassFunction; })()) ; 
Lutris =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Tux ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . myAura = sprLutrisAura ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
mySprNormal = sprLutris ; 
mySprFire = sprLutris ; 
mySprIce = sprLutris ; 
mySprAir = sprLutris ; 
mySprEarth = sprLutris ; 
mySprShock = sprLutris ; 
mySprWater = sprLutris ; 
mySprLight = sprLutris ; 
mySprDark = sprLutris ; 
myAura = sprLutrisAura ; 
noot = sndDook ; 
 } ;  returnVal . draw = function (  ) {  if ( anim == "slide" && stats . weapon == "earth" ) animOffset =  ( 8 * 7 )  - 2 ; 
 
  else animOffset = 0 ; 
 
  if (  ! hidden )  { 
  var auraColor = 0xffffffff ;
  if ( stats . weapon != "normal" )  { 
  switch ( stats . weapon )  {  case "fire" : auraColor = 0xf84000ff ; 
 break ;  case "ice" : auraColor = 0x80d0f8ff ; 
 break ;  case "air" : auraColor = 0x00a060ff ; 
 break ;  case "earth" : auraColor = 0x705020ff ; 
 break ;  case "shock" : auraColor = 0xf8f800ff ; 
 break ;  case "water" : auraColor = 0x5050c0ff ; 
 break ;  case "light" : auraColor = 0xf8f8b0ff ; 
 break ;  case "dark" : auraColor = 0x201020ff ; 
 break ;  default : auraColor = 0xffffffff ; 
 break ;  } drawSpriteZ ( 2 , myAura , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  + animOffset , x - camx + 1 , y - camy , 0 , flip , 1 , 1 , sin ( float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , myAura , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  + animOffset , x - camx , y - camy + 1 , 0 , flip , 1 , 1 , sin ( torad ( 90 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , myAura , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  + animOffset , x - camx - 1 , y - camy , 0 , flip , 1 , 1 , sin ( torad ( 180 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , myAura , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  + animOffset , x - camx , y - camy - 1 , 0 , flip , 1 , 1 , sin ( torad ( 270 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
 } 
  
  } 
  
  baseMethods . draw  (  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Lutris" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . myAura = sprLutrisAura ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Tux;  return squirrelClassFunction; })()) ; 



}; 
