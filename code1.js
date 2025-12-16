gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDCoinsObjects1= [];
gdjs.Game_32SceneCode.GDCoinsObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects2= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32SceneCode.GDNewTextObjects1= [];
gdjs.Game_32SceneCode.GDNewTextObjects2= [];
gdjs.Game_32SceneCode.GDHealthBarBoxObjects1= [];
gdjs.Game_32SceneCode.GDHealthBarBoxObjects2= [];
gdjs.Game_32SceneCode.GDHealthBarObjects1= [];
gdjs.Game_32SceneCode.GDHealthBarObjects2= [];
gdjs.Game_32SceneCode.GDPortal_9595BottomObjects1= [];
gdjs.Game_32SceneCode.GDPortal_9595BottomObjects2= [];
gdjs.Game_32SceneCode.GDPortal_9595MiddleObjects1= [];
gdjs.Game_32SceneCode.GDPortal_9595MiddleObjects2= [];
gdjs.Game_32SceneCode.GDPortal_9595TopObjects1= [];
gdjs.Game_32SceneCode.GDPortal_9595TopObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32SceneCode.GDCoinsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595Ground2Objects1Objects = Hashtable.newFrom({"Platform_Ground2": gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPortal_95959595TopObjects1Objects = Hashtable.newFrom({"Portal_Top": gdjs.Game_32SceneCode.GDPortal_9595TopObjects1});
gdjs.Game_32SceneCode.asyncCallback21728372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL2", false);
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(21728372, gdjs.Game_32SceneCode.asyncCallback21728372);
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback21728372(runtimeScene, asyncObjectsList)), 21728372, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPortal_95959595MiddleObjects1Objects = Hashtable.newFrom({"Portal_Middle": gdjs.Game_32SceneCode.GDPortal_9595MiddleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPortal_95959595BottomObjects1Objects = Hashtable.newFrom({"Portal_Bottom": gdjs.Game_32SceneCode.GDPortal_9595BottomObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Background", 0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Menu-THHHEMEE.mp3", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32SceneCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_Ground2"), gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595Ground2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerMultitouchMapper", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal_Top"), gdjs.Game_32SceneCode.GDPortal_9595TopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPortal_95959595TopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "LEVEL2");
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.Game_32SceneCode.GDMoveJoystickObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMoveJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal_Middle"), gdjs.Game_32SceneCode.GDPortal_9595MiddleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPortal_95959595MiddleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal_Bottom"), gdjs.Game_32SceneCode.GDPortal_9595BottomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPortal_95959595BottomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL2", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDHealthBarBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDHealthBarBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDHealthBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDHealthBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595TopObjects1.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595TopObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList1(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDHealthBarBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDHealthBarBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDHealthBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDHealthBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595TopObjects1.length = 0;
gdjs.Game_32SceneCode.GDPortal_9595TopObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
