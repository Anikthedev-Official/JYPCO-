gdjs.LEVEL11Code = {};
gdjs.LEVEL11Code.localVariables = [];
gdjs.LEVEL11Code.idToCallbackMap = new Map();
gdjs.LEVEL11Code.GDPlayerObjects1= [];
gdjs.LEVEL11Code.GDPlayerObjects2= [];
gdjs.LEVEL11Code.GDBackgroundObjects1= [];
gdjs.LEVEL11Code.GDBackgroundObjects2= [];
gdjs.LEVEL11Code.GDCoinsObjects1= [];
gdjs.LEVEL11Code.GDCoinsObjects2= [];
gdjs.LEVEL11Code.GDJumpButtonObjects1= [];
gdjs.LEVEL11Code.GDJumpButtonObjects2= [];
gdjs.LEVEL11Code.GDMoveJoystickObjects1= [];
gdjs.LEVEL11Code.GDMoveJoystickObjects2= [];
gdjs.LEVEL11Code.GDPlatform_9595GroundObjects1= [];
gdjs.LEVEL11Code.GDPlatform_9595GroundObjects2= [];
gdjs.LEVEL11Code.GDPlatform_9595Ground2Objects1= [];
gdjs.LEVEL11Code.GDPlatform_9595Ground2Objects2= [];
gdjs.LEVEL11Code.GDNewSpriteObjects1= [];
gdjs.LEVEL11Code.GDNewSpriteObjects2= [];
gdjs.LEVEL11Code.GDLadderGroundObjects1= [];
gdjs.LEVEL11Code.GDLadderGroundObjects2= [];
gdjs.LEVEL11Code.GDNewSprite2Objects1= [];
gdjs.LEVEL11Code.GDNewSprite2Objects2= [];
gdjs.LEVEL11Code.GDSmallGreenButtonObjects1= [];
gdjs.LEVEL11Code.GDSmallGreenButtonObjects2= [];
gdjs.LEVEL11Code.GDNewTextObjects1= [];
gdjs.LEVEL11Code.GDNewTextObjects2= [];
gdjs.LEVEL11Code.GDHealthBarBoxObjects1= [];
gdjs.LEVEL11Code.GDHealthBarBoxObjects2= [];
gdjs.LEVEL11Code.GDHealthBarObjects1= [];
gdjs.LEVEL11Code.GDHealthBarObjects2= [];
gdjs.LEVEL11Code.GDPortal_9595BottomObjects1= [];
gdjs.LEVEL11Code.GDPortal_9595BottomObjects2= [];
gdjs.LEVEL11Code.GDPortal_9595MiddleObjects1= [];
gdjs.LEVEL11Code.GDPortal_9595MiddleObjects2= [];
gdjs.LEVEL11Code.GDPortal_9595TopObjects1= [];
gdjs.LEVEL11Code.GDPortal_9595TopObjects2= [];


gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL11Code.GDPlayerObjects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.LEVEL11Code.GDCoinsObjects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL11Code.GDPlayerObjects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlatform_95959595Ground2Objects1Objects = Hashtable.newFrom({"Platform_Ground2": gdjs.LEVEL11Code.GDPlatform_9595Ground2Objects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL11Code.GDPlayerObjects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LEVEL11Code.GDNewSpriteObjects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL11Code.GDPlayerObjects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LEVEL11Code.GDNewSprite2Objects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL11Code.GDPlayerObjects1});
gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LEVEL11Code.GDNewSprite2Objects1});
gdjs.LEVEL11Code.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LEVEL11Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL11Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects, gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL11Code.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.LEVEL11Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_Ground2"), gdjs.LEVEL11Code.GDPlatform_9595Ground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL11Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlatform_95959595Ground2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL11Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL11Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
{for(var i = 0, len = gdjs.LEVEL11Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDPlayerObjects1[i].activateBehavior("PlatformerMultitouchMapper", false);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL11Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL11Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.LEVEL11Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.LEVEL11Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LEVEL11Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL11Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects, gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL12", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL11Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL11Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("crouch");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL11Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL11Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LEVEL11Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL11Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects, gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL11Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL11Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL11Code.GDPlayerObjects1[k] = gdjs.LEVEL11Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL11Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL11Code.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.LEVEL11Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BeepBox-Song.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LEVEL11Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL11Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDPlayerObjects1Objects, gdjs.LEVEL11Code.mapOfGDgdjs_9546LEVEL11Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL11Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LEVEL11Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL11Code.GDPlayerObjects1[k] = gdjs.LEVEL11Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL11Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL11Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL11Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDPlayerObjects1[i].setPosition(355,315);
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
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LEVEL11Code.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.LEVEL11Code.GDMoveJoystickObjects1);
{for(var i = 0, len = gdjs.LEVEL11Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.LEVEL11Code.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.LEVEL11Code.GDMoveJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LEVEL11Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEVEL11Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL11Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL11Code.GDBackgroundObjects1.length = 0;
gdjs.LEVEL11Code.GDBackgroundObjects2.length = 0;
gdjs.LEVEL11Code.GDCoinsObjects1.length = 0;
gdjs.LEVEL11Code.GDCoinsObjects2.length = 0;
gdjs.LEVEL11Code.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL11Code.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL11Code.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL11Code.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL11Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL11Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL11Code.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL11Code.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL11Code.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL11Code.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL11Code.GDLadderGroundObjects1.length = 0;
gdjs.LEVEL11Code.GDLadderGroundObjects2.length = 0;
gdjs.LEVEL11Code.GDNewSprite2Objects1.length = 0;
gdjs.LEVEL11Code.GDNewSprite2Objects2.length = 0;
gdjs.LEVEL11Code.GDSmallGreenButtonObjects1.length = 0;
gdjs.LEVEL11Code.GDSmallGreenButtonObjects2.length = 0;
gdjs.LEVEL11Code.GDNewTextObjects1.length = 0;
gdjs.LEVEL11Code.GDNewTextObjects2.length = 0;
gdjs.LEVEL11Code.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL11Code.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL11Code.GDHealthBarObjects1.length = 0;
gdjs.LEVEL11Code.GDHealthBarObjects2.length = 0;
gdjs.LEVEL11Code.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL11Code.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL11Code.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL11Code.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL11Code.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL11Code.GDPortal_9595TopObjects2.length = 0;

gdjs.LEVEL11Code.eventsList0(runtimeScene);
gdjs.LEVEL11Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL11Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL11Code.GDBackgroundObjects1.length = 0;
gdjs.LEVEL11Code.GDBackgroundObjects2.length = 0;
gdjs.LEVEL11Code.GDCoinsObjects1.length = 0;
gdjs.LEVEL11Code.GDCoinsObjects2.length = 0;
gdjs.LEVEL11Code.GDJumpButtonObjects1.length = 0;
gdjs.LEVEL11Code.GDJumpButtonObjects2.length = 0;
gdjs.LEVEL11Code.GDMoveJoystickObjects1.length = 0;
gdjs.LEVEL11Code.GDMoveJoystickObjects2.length = 0;
gdjs.LEVEL11Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.LEVEL11Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.LEVEL11Code.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.LEVEL11Code.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.LEVEL11Code.GDNewSpriteObjects1.length = 0;
gdjs.LEVEL11Code.GDNewSpriteObjects2.length = 0;
gdjs.LEVEL11Code.GDLadderGroundObjects1.length = 0;
gdjs.LEVEL11Code.GDLadderGroundObjects2.length = 0;
gdjs.LEVEL11Code.GDNewSprite2Objects1.length = 0;
gdjs.LEVEL11Code.GDNewSprite2Objects2.length = 0;
gdjs.LEVEL11Code.GDSmallGreenButtonObjects1.length = 0;
gdjs.LEVEL11Code.GDSmallGreenButtonObjects2.length = 0;
gdjs.LEVEL11Code.GDNewTextObjects1.length = 0;
gdjs.LEVEL11Code.GDNewTextObjects2.length = 0;
gdjs.LEVEL11Code.GDHealthBarBoxObjects1.length = 0;
gdjs.LEVEL11Code.GDHealthBarBoxObjects2.length = 0;
gdjs.LEVEL11Code.GDHealthBarObjects1.length = 0;
gdjs.LEVEL11Code.GDHealthBarObjects2.length = 0;
gdjs.LEVEL11Code.GDPortal_9595BottomObjects1.length = 0;
gdjs.LEVEL11Code.GDPortal_9595BottomObjects2.length = 0;
gdjs.LEVEL11Code.GDPortal_9595MiddleObjects1.length = 0;
gdjs.LEVEL11Code.GDPortal_9595MiddleObjects2.length = 0;
gdjs.LEVEL11Code.GDPortal_9595TopObjects1.length = 0;
gdjs.LEVEL11Code.GDPortal_9595TopObjects2.length = 0;


return;

}

gdjs['LEVEL11Code'] = gdjs.LEVEL11Code;
