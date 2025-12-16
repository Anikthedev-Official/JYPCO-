gdjs.LEVEL8Code = {};
gdjs.LEVEL8Code.localVariables = [];
gdjs.LEVEL8Code.idToCallbackMap = new Map();
gdjs.LEVEL8Code.GDPlayerObjects1= [];
gdjs.LEVEL8Code.GDPlayerObjects2= [];
gdjs.LEVEL8Code.GDBackgroundObjects1= [];
gdjs.LEVEL8Code.GDBackgroundObjects2= [];
gdjs.LEVEL8Code.GDCoinsObjects1= [];
gdjs.LEVEL8Code.GDCoinsObjects2= [];
gdjs.LEVEL8Code.GDJumpButtonObjects1= [];
gdjs.LEVEL8Code.GDJumpButtonObjects2= [];
gdjs.LEVEL8Code.GDMoveJoystickObjects1= [];
gdjs.LEVEL8Code.GDMoveJoystickObjects2= [];
gdjs.LEVEL8Code.GDPlatform_9595GroundObjects1= [];
gdjs.LEVEL8Code.GDPlatform_9595GroundObjects2= [];
gdjs.LEVEL8Code.GDPlatform_9595Ground2Objects1= [];
gdjs.LEVEL8Code.GDPlatform_9595Ground2Objects2= [];
gdjs.LEVEL8Code.GDNewSpriteObjects1= [];
gdjs.LEVEL8Code.GDNewSpriteObjects2= [];
gdjs.LEVEL8Code.GDLadderGroundObjects1= [];
gdjs.LEVEL8Code.GDLadderGroundObjects2= [];
gdjs.LEVEL8Code.GDNewSprite2Objects1= [];
gdjs.LEVEL8Code.GDNewSprite2Objects2= [];
gdjs.LEVEL8Code.GDNewLightObjects1= [];
gdjs.LEVEL8Code.GDNewLightObjects2= [];
gdjs.LEVEL8Code.GDHealthBarBoxObjects1= [];
gdjs.LEVEL8Code.GDHealthBarBoxObjects2= [];
gdjs.LEVEL8Code.GDHealthBarObjects1= [];
gdjs.LEVEL8Code.GDHealthBarObjects2= [];
gdjs.LEVEL8Code.GDPortal_9595BottomObjects1= [];
gdjs.LEVEL8Code.GDPortal_9595BottomObjects2= [];
gdjs.LEVEL8Code.GDPortal_9595MiddleObjects1= [];
gdjs.LEVEL8Code.GDPortal_9595MiddleObjects2= [];
gdjs.LEVEL8Code.GDPortal_9595TopObjects1= [];
gdjs.LEVEL8Code.GDPortal_9595TopObjects2= [];


gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL8Code.GDPlayerObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.LEVEL8Code.GDCoinsObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL8Code.GDPlayerObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlatform_95959595Ground2Objects1Objects = Hashtable.newFrom({"Platform_Ground2": gdjs.LEVEL8Code.GDPlatform_9595Ground2Objects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL8Code.GDPlayerObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPortal_95959595TopObjects1Objects = Hashtable.newFrom({"Portal_Top": gdjs.LEVEL8Code.GDPortal_9595TopObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL8Code.GDPlayerObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LEVEL8Code.GDNewSprite2Objects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL8Code.GDPlayerObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LEVEL8Code.GDNewSprite2Objects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL8Code.GDPlayerObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPortal_95959595MiddleObjects1Objects = Hashtable.newFrom({"Portal_Middle": gdjs.LEVEL8Code.GDPortal_9595MiddleObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL8Code.GDPlayerObjects1});
gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPortal_95959595BottomObjects1Objects = Hashtable.newFrom({"Portal_Bottom": gdjs.LEVEL8Code.GDPortal_9595BottomObjects1});
gdjs.LEVEL8Code.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LEVEL8Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects, gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL8Code.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.LEVEL8Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_Ground2"), gdjs.LEVEL8Code.GDPlatform_9595Ground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlatform_95959595Ground2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL8Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL8Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
{for(var i = 0, len = gdjs.LEVEL8Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDPlayerObjects1[i].activateBehavior("PlatformerMultitouchMapper", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL8Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal_Top"), gdjs.LEVEL8Code.GDPortal_9595TopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects, gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPortal_95959595TopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL9", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL8Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("crouch");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL8Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LEVEL8Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects, gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL8Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL8Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL8Code.GDPlayerObjects1[k] = gdjs.LEVEL8Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL8Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19232012);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.LEVEL8Code.GDHealthBarObjects1);
/* Reuse gdjs.LEVEL8Code.GDNewSprite2Objects1 */
/* Reuse gdjs.LEVEL8Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL8Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BeepBox-Song.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.LEVEL8Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDPlayerObjects1[i].returnVariable(gdjs.LEVEL8Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(7);
}
}
{for(var i = 0, len = gdjs.LEVEL8Code.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDHealthBarObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.common.clamp((gdjs.RuntimeObject.getVariableNumber(((gdjs.LEVEL8Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LEVEL8Code.GDPlayerObjects1[0].getVariables()).getFromIndex(0))) / (gdjs.RuntimeObject.getVariableNumber(((gdjs.LEVEL8Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.LEVEL8Code.GDPlayerObjects1[0].getVariables()).getFromIndex(1))) * 153, 0, 100));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LEVEL8Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects, gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL8Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LEVEL8Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL8Code.GDPlayerObjects1[k] = gdjs.LEVEL8Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL8Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL8Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL8Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDPlayerObjects1[i].setPosition(355,315);
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
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LEVEL8Code.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.LEVEL8Code.GDMoveJoystickObjects1);
{for(var i = 0, len = gdjs.LEVEL8Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.LEVEL8Code.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.LEVEL8Code.GDMoveJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal_Middle"), gdjs.LEVEL8Code.GDPortal_9595MiddleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects, gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPortal_95959595MiddleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL9", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL8Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal_Bottom"), gdjs.LEVEL8Code.GDPortal_9595BottomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPlayerObjects1Objects, gdjs.LEVEL8Code.mapOfGDgdjs_9546LEVEL8Code_9546GDPortal_95959595BottomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL9", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LEVEL8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEVEL8Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL8Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL8Code.GDBackgroundObjects1.length = 0;
gdjs.LEVEL8Code.GDBackgroundObjects2.length = 0;
gdjs.LEVEL8Code.GDCoinsObjects1.length = 0;
gdjs.LEVEL8Code.GDCoinsObjects2.length = 0;
gdjs.LEVEL8Code.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL8Code.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL8Code.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL8Code.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL8Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL8Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL8Code.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL8Code.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL8Code.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL8Code.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL8Code.GDLadderGroundObjects1.length = 0;
gdjs.LEVEL8Code.GDLadderGroundObjects2.length = 0;
gdjs.LEVEL8Code.GDNewSprite2Objects1.length = 0;
gdjs.LEVEL8Code.GDNewSprite2Objects2.length = 0;
gdjs.LEVEL8Code.GDNewLightObjects1.length = 0;
gdjs.LEVEL8Code.GDNewLightObjects2.length = 0;
gdjs.LEVEL8Code.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL8Code.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL8Code.GDHealthBarObjects1.length = 0;
gdjs.LEVEL8Code.GDHealthBarObjects2.length = 0;
gdjs.LEVEL8Code.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL8Code.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL8Code.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL8Code.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL8Code.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL8Code.GDPortal_9595TopObjects2.length = 0;

gdjs.LEVEL8Code.eventsList0(runtimeScene);
gdjs.LEVEL8Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL8Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL8Code.GDBackgroundObjects1.length = 0;
gdjs.LEVEL8Code.GDBackgroundObjects2.length = 0;
gdjs.LEVEL8Code.GDCoinsObjects1.length = 0;
gdjs.LEVEL8Code.GDCoinsObjects2.length = 0;
gdjs.LEVEL8Code.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL8Code.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL8Code.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL8Code.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL8Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL8Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL8Code.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL8Code.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL8Code.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL8Code.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL8Code.GDLadderGroundObjects1.length = 0;
gdjs.LEVEL8Code.GDLadderGroundObjects2.length = 0;
gdjs.LEVEL8Code.GDNewSprite2Objects1.length = 0;
gdjs.LEVEL8Code.GDNewSprite2Objects2.length = 0;
gdjs.LEVEL8Code.GDNewLightObjects1.length = 0;
gdjs.LEVEL8Code.GDNewLightObjects2.length = 0;
gdjs.LEVEL8Code.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL8Code.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL8Code.GDHealthBarObjects1.length = 0;
gdjs.LEVEL8Code.GDHealthBarObjects2.length = 0;
gdjs.LEVEL8Code.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL8Code.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL8Code.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL8Code.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL8Code.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL8Code.GDPortal_9595TopObjects2.length = 0;


return;

}

gdjs['LEVEL8Code'] = gdjs.LEVEL8Code;
