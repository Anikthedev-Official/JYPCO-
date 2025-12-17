gdjs.LEVEL7Code = {};
gdjs.LEVEL7Code.localVariables = [];
gdjs.LEVEL7Code.idToCallbackMap = new Map();
gdjs.LEVEL7Code.GDPlayerObjects1= [];
gdjs.LEVEL7Code.GDPlayerObjects2= [];
gdjs.LEVEL7Code.GDBackgroundObjects1= [];
gdjs.LEVEL7Code.GDBackgroundObjects2= [];
gdjs.LEVEL7Code.GDCoinsObjects1= [];
gdjs.LEVEL7Code.GDCoinsObjects2= [];
gdjs.LEVEL7Code.GDJumpButtonObjects1= [];
gdjs.LEVEL7Code.GDJumpButtonObjects2= [];
gdjs.LEVEL7Code.GDMoveJoystickObjects1= [];
gdjs.LEVEL7Code.GDMoveJoystickObjects2= [];
gdjs.LEVEL7Code.GDPlatform_9595GroundObjects1= [];
gdjs.LEVEL7Code.GDPlatform_9595GroundObjects2= [];
gdjs.LEVEL7Code.GDPlatform_9595Ground2Objects1= [];
gdjs.LEVEL7Code.GDPlatform_9595Ground2Objects2= [];
gdjs.LEVEL7Code.GDNewSpriteObjects1= [];
gdjs.LEVEL7Code.GDNewSpriteObjects2= [];
gdjs.LEVEL7Code.GDLadderGroundObjects1= [];
gdjs.LEVEL7Code.GDLadderGroundObjects2= [];
gdjs.LEVEL7Code.GDNewSprite2Objects1= [];
gdjs.LEVEL7Code.GDNewSprite2Objects2= [];
gdjs.LEVEL7Code.GDHealthBarBoxObjects1= [];
gdjs.LEVEL7Code.GDHealthBarBoxObjects2= [];
gdjs.LEVEL7Code.GDHealthBarObjects1= [];
gdjs.LEVEL7Code.GDHealthBarObjects2= [];
gdjs.LEVEL7Code.GDPortal_9595BottomObjects1= [];
gdjs.LEVEL7Code.GDPortal_9595BottomObjects2= [];
gdjs.LEVEL7Code.GDPortal_9595MiddleObjects1= [];
gdjs.LEVEL7Code.GDPortal_9595MiddleObjects2= [];
gdjs.LEVEL7Code.GDPortal_9595TopObjects1= [];
gdjs.LEVEL7Code.GDPortal_9595TopObjects2= [];


gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL7Code.GDPlayerObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.LEVEL7Code.GDCoinsObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL7Code.GDPlayerObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlatform_95959595Ground2Objects1Objects = Hashtable.newFrom({"Platform_Ground2": gdjs.LEVEL7Code.GDPlatform_9595Ground2Objects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL7Code.GDPlayerObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LEVEL7Code.GDNewSpriteObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL7Code.GDPlayerObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LEVEL7Code.GDNewSprite2Objects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL7Code.GDPlayerObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LEVEL7Code.GDNewSprite2Objects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL7Code.GDPlayerObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPortal_95959595MiddleObjects1Objects = Hashtable.newFrom({"Portal_Middle": gdjs.LEVEL7Code.GDPortal_9595MiddleObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL7Code.GDPlayerObjects1});
gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPortal_95959595BottomObjects1Objects = Hashtable.newFrom({"Portal_Bottom": gdjs.LEVEL7Code.GDPortal_9595BottomObjects1});
gdjs.LEVEL7Code.eventsList0 = function(runtimeScene) {

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
{gdjs.evtTools.sound.playSound(runtimeScene, "Game-SoundTrack.mp3", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LEVEL7Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects, gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL7Code.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.LEVEL7Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_Ground2"), gdjs.LEVEL7Code.GDPlatform_9595Ground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlatform_95959595Ground2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL7Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].activateBehavior("PlatformerMultitouchMapper", false);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LEVEL7Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects, gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("crouch");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LEVEL7Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects, gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL7Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL7Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL7Code.GDPlayerObjects1[k] = gdjs.LEVEL7Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL7Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL7Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.LEVEL7Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BeepBox-Song.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LEVEL7Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects, gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL7Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LEVEL7Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL7Code.GDPlayerObjects1[k] = gdjs.LEVEL7Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL7Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22418196);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.LEVEL7Code.GDHealthBarObjects1);
/* Reuse gdjs.LEVEL7Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].returnVariable(gdjs.LEVEL7Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(7);
}
}
{for(var i = 0, len = gdjs.LEVEL7Code.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDHealthBarObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.common.clamp((gdjs.RuntimeObject.getVariableNumber(((gdjs.LEVEL7Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LEVEL7Code.GDPlayerObjects1[0].getVariables()).getFromIndex(0))) / (gdjs.RuntimeObject.getVariableNumber(((gdjs.LEVEL7Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LEVEL7Code.GDPlayerObjects1[0].getVariables()).getFromIndex(1))) * 153, 0, 100));
}
}
{for(var i = 0, len = gdjs.LEVEL7Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDPlayerObjects1[i].setPosition(355,315);
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
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LEVEL7Code.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.LEVEL7Code.GDMoveJoystickObjects1);
{for(var i = 0, len = gdjs.LEVEL7Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.LEVEL7Code.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.LEVEL7Code.GDMoveJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL7Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL7Code.GDPlayerObjects1[i].getVariableNumber(gdjs.LEVEL7Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL7Code.GDPlayerObjects1[k] = gdjs.LEVEL7Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL7Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal_Middle"), gdjs.LEVEL7Code.GDPortal_9595MiddleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects, gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPortal_95959595MiddleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL8", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL7Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal_Bottom"), gdjs.LEVEL7Code.GDPortal_9595BottomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPlayerObjects1Objects, gdjs.LEVEL7Code.mapOfGDgdjs_9546LEVEL7Code_9546GDPortal_95959595BottomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL8", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LEVEL7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEVEL7Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL7Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL7Code.GDBackgroundObjects1.length = 0;
gdjs.LEVEL7Code.GDBackgroundObjects2.length = 0;
gdjs.LEVEL7Code.GDCoinsObjects1.length = 0;
gdjs.LEVEL7Code.GDCoinsObjects2.length = 0;
gdjs.LEVEL7Code.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL7Code.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL7Code.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL7Code.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL7Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL7Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL7Code.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL7Code.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL7Code.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL7Code.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL7Code.GDLadderGroundObjects1.length = 0;
gdjs.LEVEL7Code.GDLadderGroundObjects2.length = 0;
gdjs.LEVEL7Code.GDNewSprite2Objects1.length = 0;
gdjs.LEVEL7Code.GDNewSprite2Objects2.length = 0;
gdjs.LEVEL7Code.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL7Code.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL7Code.GDHealthBarObjects1.length = 0;
gdjs.LEVEL7Code.GDHealthBarObjects2.length = 0;
gdjs.LEVEL7Code.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL7Code.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL7Code.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL7Code.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL7Code.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL7Code.GDPortal_9595TopObjects2.length = 0;

gdjs.LEVEL7Code.eventsList0(runtimeScene);
gdjs.LEVEL7Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL7Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL7Code.GDBackgroundObjects1.length = 0;
gdjs.LEVEL7Code.GDBackgroundObjects2.length = 0;
gdjs.LEVEL7Code.GDCoinsObjects1.length = 0;
gdjs.LEVEL7Code.GDCoinsObjects2.length = 0;
gdjs.LEVEL7Code.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL7Code.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL7Code.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL7Code.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL7Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL7Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL7Code.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL7Code.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL7Code.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL7Code.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL7Code.GDLadderGroundObjects1.length = 0;
gdjs.LEVEL7Code.GDLadderGroundObjects2.length = 0;
gdjs.LEVEL7Code.GDNewSprite2Objects1.length = 0;
gdjs.LEVEL7Code.GDNewSprite2Objects2.length = 0;
gdjs.LEVEL7Code.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL7Code.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL7Code.GDHealthBarObjects1.length = 0;
gdjs.LEVEL7Code.GDHealthBarObjects2.length = 0;
gdjs.LEVEL7Code.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL7Code.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL7Code.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL7Code.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL7Code.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL7Code.GDPortal_9595TopObjects2.length = 0;


return;

}

gdjs['LEVEL7Code'] = gdjs.LEVEL7Code;
