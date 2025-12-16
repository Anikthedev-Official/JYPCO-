gdjs.LEVEL10Code = {};
gdjs.LEVEL10Code.localVariables = [];
gdjs.LEVEL10Code.idToCallbackMap = new Map();
gdjs.LEVEL10Code.GDPlayerObjects1= [];
gdjs.LEVEL10Code.GDPlayerObjects2= [];
gdjs.LEVEL10Code.GDBackgroundObjects1= [];
gdjs.LEVEL10Code.GDBackgroundObjects2= [];
gdjs.LEVEL10Code.GDCoinsObjects1= [];
gdjs.LEVEL10Code.GDCoinsObjects2= [];
gdjs.LEVEL10Code.GDJumpButtonObjects1= [];
gdjs.LEVEL10Code.GDJumpButtonObjects2= [];
gdjs.LEVEL10Code.GDMoveJoystickObjects1= [];
gdjs.LEVEL10Code.GDMoveJoystickObjects2= [];
gdjs.LEVEL10Code.GDPlatform_9595GroundObjects1= [];
gdjs.LEVEL10Code.GDPlatform_9595GroundObjects2= [];
gdjs.LEVEL10Code.GDPlatform_9595Ground2Objects1= [];
gdjs.LEVEL10Code.GDPlatform_9595Ground2Objects2= [];
gdjs.LEVEL10Code.GDNewSpriteObjects1= [];
gdjs.LEVEL10Code.GDNewSpriteObjects2= [];
gdjs.LEVEL10Code.GDNewTextObjects1= [];
gdjs.LEVEL10Code.GDNewTextObjects2= [];
gdjs.LEVEL10Code.GDNewText2Objects1= [];
gdjs.LEVEL10Code.GDNewText2Objects2= [];
gdjs.LEVEL10Code.GDNewText3Objects1= [];
gdjs.LEVEL10Code.GDNewText3Objects2= [];
gdjs.LEVEL10Code.GDHealthBarBoxObjects1= [];
gdjs.LEVEL10Code.GDHealthBarBoxObjects2= [];
gdjs.LEVEL10Code.GDHealthBarObjects1= [];
gdjs.LEVEL10Code.GDHealthBarObjects2= [];
gdjs.LEVEL10Code.GDPortal_9595BottomObjects1= [];
gdjs.LEVEL10Code.GDPortal_9595BottomObjects2= [];
gdjs.LEVEL10Code.GDPortal_9595MiddleObjects1= [];
gdjs.LEVEL10Code.GDPortal_9595MiddleObjects2= [];
gdjs.LEVEL10Code.GDPortal_9595TopObjects1= [];
gdjs.LEVEL10Code.GDPortal_9595TopObjects2= [];


gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL10Code.GDPlayerObjects1});
gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.LEVEL10Code.GDCoinsObjects1});
gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL10Code.GDPlayerObjects1});
gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDPlatform_95959595Ground2Objects1Objects = Hashtable.newFrom({"Platform_Ground2": gdjs.LEVEL10Code.GDPlatform_9595Ground2Objects1});
gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL10Code.GDPlayerObjects1});
gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LEVEL10Code.GDNewSpriteObjects1});
gdjs.LEVEL10Code.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LEVEL10Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDPlayerObjects1Objects, gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL10Code.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.LEVEL10Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_Ground2"), gdjs.LEVEL10Code.GDPlatform_9595Ground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDPlatform_95959595Ground2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL10Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL10Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
{for(var i = 0, len = gdjs.LEVEL10Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDPlayerObjects1[i].activateBehavior("PlatformerMultitouchMapper", false);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL10Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.LEVEL10Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.LEVEL10Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LEVEL10Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDPlayerObjects1Objects, gdjs.LEVEL10Code.mapOfGDgdjs_9546LEVEL10Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL11", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL10Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("crouch");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL10Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL10Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
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
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LEVEL10Code.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.LEVEL10Code.GDMoveJoystickObjects1);
{for(var i = 0, len = gdjs.LEVEL10Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.LEVEL10Code.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.LEVEL10Code.GDMoveJoystickObjects1[i].deleteFromScene(runtimeScene);
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

gdjs.LEVEL10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEVEL10Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL10Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL10Code.GDBackgroundObjects1.length = 0;
gdjs.LEVEL10Code.GDBackgroundObjects2.length = 0;
gdjs.LEVEL10Code.GDCoinsObjects1.length = 0;
gdjs.LEVEL10Code.GDCoinsObjects2.length = 0;
gdjs.LEVEL10Code.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL10Code.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL10Code.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL10Code.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL10Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL10Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL10Code.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL10Code.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL10Code.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL10Code.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL10Code.GDNewTextObjects1.length = 0;
gdjs.LEVEL10Code.GDNewTextObjects2.length = 0;
gdjs.LEVEL10Code.GDNewText2Objects1.length = 0;
gdjs.LEVEL10Code.GDNewText2Objects2.length = 0;
gdjs.LEVEL10Code.GDNewText3Objects1.length = 0;
gdjs.LEVEL10Code.GDNewText3Objects2.length = 0;
gdjs.LEVEL10Code.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL10Code.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL10Code.GDHealthBarObjects1.length = 0;
gdjs.LEVEL10Code.GDHealthBarObjects2.length = 0;
gdjs.LEVEL10Code.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL10Code.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL10Code.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL10Code.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL10Code.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL10Code.GDPortal_9595TopObjects2.length = 0;

gdjs.LEVEL10Code.eventsList0(runtimeScene);
gdjs.LEVEL10Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL10Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL10Code.GDBackgroundObjects1.length = 0;
gdjs.LEVEL10Code.GDBackgroundObjects2.length = 0;
gdjs.LEVEL10Code.GDCoinsObjects1.length = 0;
gdjs.LEVEL10Code.GDCoinsObjects2.length = 0;
gdjs.LEVEL10Code.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL10Code.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL10Code.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL10Code.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL10Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL10Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL10Code.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL10Code.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL10Code.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL10Code.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL10Code.GDNewTextObjects1.length = 0;
gdjs.LEVEL10Code.GDNewTextObjects2.length = 0;
gdjs.LEVEL10Code.GDNewText2Objects1.length = 0;
gdjs.LEVEL10Code.GDNewText2Objects2.length = 0;
gdjs.LEVEL10Code.GDNewText3Objects1.length = 0;
gdjs.LEVEL10Code.GDNewText3Objects2.length = 0;
gdjs.LEVEL10Code.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL10Code.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL10Code.GDHealthBarObjects1.length = 0;
gdjs.LEVEL10Code.GDHealthBarObjects2.length = 0;
gdjs.LEVEL10Code.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL10Code.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL10Code.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL10Code.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL10Code.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL10Code.GDPortal_9595TopObjects2.length = 0;


return;

}

gdjs['LEVEL10Code'] = gdjs.LEVEL10Code;
