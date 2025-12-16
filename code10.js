gdjs.LEVEL10AFALSECode = {};
gdjs.LEVEL10AFALSECode.localVariables = [];
gdjs.LEVEL10AFALSECode.idToCallbackMap = new Map();
gdjs.LEVEL10AFALSECode.GDPlayerObjects1= [];
gdjs.LEVEL10AFALSECode.GDPlayerObjects2= [];
gdjs.LEVEL10AFALSECode.GDBackgroundObjects1= [];
gdjs.LEVEL10AFALSECode.GDBackgroundObjects2= [];
gdjs.LEVEL10AFALSECode.GDCoinsObjects1= [];
gdjs.LEVEL10AFALSECode.GDCoinsObjects2= [];
gdjs.LEVEL10AFALSECode.GDJumpButtonObjects1= [];
gdjs.LEVEL10AFALSECode.GDJumpButtonObjects2= [];
gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects1= [];
gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects2= [];
gdjs.LEVEL10AFALSECode.GDPlatform_9595GroundObjects1= [];
gdjs.LEVEL10AFALSECode.GDPlatform_9595GroundObjects2= [];
gdjs.LEVEL10AFALSECode.GDPlatform_9595Ground2Objects1= [];
gdjs.LEVEL10AFALSECode.GDPlatform_9595Ground2Objects2= [];
gdjs.LEVEL10AFALSECode.GDNewSpriteObjects1= [];
gdjs.LEVEL10AFALSECode.GDNewSpriteObjects2= [];
gdjs.LEVEL10AFALSECode.GDLadderGroundObjects1= [];
gdjs.LEVEL10AFALSECode.GDLadderGroundObjects2= [];
gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1= [];
gdjs.LEVEL10AFALSECode.GDNewSprite2Objects2= [];
gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1= [];
gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects2= [];
gdjs.LEVEL10AFALSECode.GDNewTextObjects1= [];
gdjs.LEVEL10AFALSECode.GDNewTextObjects2= [];
gdjs.LEVEL10AFALSECode.GDHealthBarBoxObjects1= [];
gdjs.LEVEL10AFALSECode.GDHealthBarBoxObjects2= [];
gdjs.LEVEL10AFALSECode.GDHealthBarObjects1= [];
gdjs.LEVEL10AFALSECode.GDHealthBarObjects2= [];
gdjs.LEVEL10AFALSECode.GDPortal_9595BottomObjects1= [];
gdjs.LEVEL10AFALSECode.GDPortal_9595BottomObjects2= [];
gdjs.LEVEL10AFALSECode.GDPortal_9595MiddleObjects1= [];
gdjs.LEVEL10AFALSECode.GDPortal_9595MiddleObjects2= [];
gdjs.LEVEL10AFALSECode.GDPortal_9595TopObjects1= [];
gdjs.LEVEL10AFALSECode.GDPortal_9595TopObjects2= [];


gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL10AFALSECode.GDPlayerObjects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.LEVEL10AFALSECode.GDCoinsObjects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL10AFALSECode.GDPlayerObjects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlatform_95959595Ground2Objects1Objects = Hashtable.newFrom({"Platform_Ground2": gdjs.LEVEL10AFALSECode.GDPlatform_9595Ground2Objects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL10AFALSECode.GDPlayerObjects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LEVEL10AFALSECode.GDNewSpriteObjects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL10AFALSECode.GDPlayerObjects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL10AFALSECode.GDPlayerObjects1});
gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1});
gdjs.LEVEL10AFALSECode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Background", 0);
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "LEVEL3");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LEVEL10AFALSECode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10AFALSECode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects, gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL10AFALSECode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_Ground2"), gdjs.LEVEL10AFALSECode.GDPlatform_9595Ground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10AFALSECode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlatform_95959595Ground2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL10AFALSECode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].activateBehavior("PlatformerMultitouchMapper", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10AFALSECode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LEVEL10AFALSECode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10AFALSECode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects, gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL8", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10AFALSECode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("crouch");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10AFALSECode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10AFALSECode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects, gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL10AFALSECode.GDPlayerObjects1[k] = gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BeepBox-Song.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10AFALSECode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDPlayerObjects1Objects, gdjs.LEVEL10AFALSECode.mapOfGDgdjs_9546LEVEL10AFALSECode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL10AFALSECode.GDPlayerObjects1[k] = gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL10AFALSECode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDPlayerObjects1[i].setPosition(355,315);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1[k] = gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL10", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LEVEL10AFALSECode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects1);
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LEVEL10AFALSECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPlayerObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDBackgroundObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDBackgroundObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDCoinsObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDCoinsObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL10AFALSECode.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDLadderGroundObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDLadderGroundObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1.length = 0;
gdjs.LEVEL10AFALSECode.GDNewSprite2Objects2.length = 0;
gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDNewTextObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDNewTextObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDHealthBarObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDHealthBarObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595TopObjects2.length = 0;

gdjs.LEVEL10AFALSECode.eventsList0(runtimeScene);
gdjs.LEVEL10AFALSECode.GDPlayerObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPlayerObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDBackgroundObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDBackgroundObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDCoinsObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDCoinsObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL10AFALSECode.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDLadderGroundObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDLadderGroundObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDNewSprite2Objects1.length = 0;
gdjs.LEVEL10AFALSECode.GDNewSprite2Objects2.length = 0;
gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDSmallGreenButtonObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDNewTextObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDNewTextObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDHealthBarObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDHealthBarObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL10AFALSECode.GDPortal_9595TopObjects2.length = 0;


return;

}

gdjs['LEVEL10AFALSECode'] = gdjs.LEVEL10AFALSECode;
