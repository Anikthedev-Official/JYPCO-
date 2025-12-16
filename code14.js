gdjs.TESTXCode = {};
gdjs.TESTXCode.localVariables = [];
gdjs.TESTXCode.idToCallbackMap = new Map();
gdjs.TESTXCode.GDPlayerObjects1= [];
gdjs.TESTXCode.GDPlayerObjects2= [];
gdjs.TESTXCode.GDBackgroundObjects1= [];
gdjs.TESTXCode.GDBackgroundObjects2= [];
gdjs.TESTXCode.GDCoinsObjects1= [];
gdjs.TESTXCode.GDCoinsObjects2= [];
gdjs.TESTXCode.GDJumpButtonObjects1= [];
gdjs.TESTXCode.GDJumpButtonObjects2= [];
gdjs.TESTXCode.GDMoveJoystickObjects1= [];
gdjs.TESTXCode.GDMoveJoystickObjects2= [];
gdjs.TESTXCode.GDPlatform_9595GroundObjects1= [];
gdjs.TESTXCode.GDPlatform_9595GroundObjects2= [];
gdjs.TESTXCode.GDPlatform_9595Ground2Objects1= [];
gdjs.TESTXCode.GDPlatform_9595Ground2Objects2= [];
gdjs.TESTXCode.GDNewSpriteObjects1= [];
gdjs.TESTXCode.GDNewSpriteObjects2= [];
gdjs.TESTXCode.GDLadderGroundObjects1= [];
gdjs.TESTXCode.GDLadderGroundObjects2= [];
gdjs.TESTXCode.GDNewSprite2Objects1= [];
gdjs.TESTXCode.GDNewSprite2Objects2= [];
gdjs.TESTXCode.GDSmallGreenButtonObjects1= [];
gdjs.TESTXCode.GDSmallGreenButtonObjects2= [];
gdjs.TESTXCode.GDNewTextObjects1= [];
gdjs.TESTXCode.GDNewTextObjects2= [];
gdjs.TESTXCode.GDNewTiledSpriteObjects1= [];
gdjs.TESTXCode.GDNewTiledSpriteObjects2= [];
gdjs.TESTXCode.GDNewSprite3Objects1= [];
gdjs.TESTXCode.GDNewSprite3Objects2= [];
gdjs.TESTXCode.GDJumpButton2Objects1= [];
gdjs.TESTXCode.GDJumpButton2Objects2= [];
gdjs.TESTXCode.GDNewText2Objects1= [];
gdjs.TESTXCode.GDNewText2Objects2= [];
gdjs.TESTXCode.GDHealthBarBoxObjects1= [];
gdjs.TESTXCode.GDHealthBarBoxObjects2= [];
gdjs.TESTXCode.GDHealthBarObjects1= [];
gdjs.TESTXCode.GDHealthBarObjects2= [];
gdjs.TESTXCode.GDPortal_9595BottomObjects1= [];
gdjs.TESTXCode.GDPortal_9595BottomObjects2= [];
gdjs.TESTXCode.GDPortal_9595MiddleObjects1= [];
gdjs.TESTXCode.GDPortal_9595MiddleObjects2= [];
gdjs.TESTXCode.GDPortal_9595TopObjects1= [];
gdjs.TESTXCode.GDPortal_9595TopObjects2= [];


gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TESTXCode.GDPlayerObjects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.TESTXCode.GDCoinsObjects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TESTXCode.GDPlayerObjects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlatform_95959595Ground2Objects1Objects = Hashtable.newFrom({"Platform_Ground2": gdjs.TESTXCode.GDPlatform_9595Ground2Objects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TESTXCode.GDPlayerObjects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.TESTXCode.GDNewSpriteObjects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TESTXCode.GDPlayerObjects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.TESTXCode.GDNewSprite3Objects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TESTXCode.GDPlayerObjects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.TESTXCode.GDNewSprite3Objects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDJumpButton2Objects1Objects = Hashtable.newFrom({"JumpButton2": gdjs.TESTXCode.GDJumpButton2Objects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TESTXCode.GDPlayerObjects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.TESTXCode.GDNewSprite3Objects1});
gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDJumpButton2Objects1Objects = Hashtable.newFrom({"JumpButton2": gdjs.TESTXCode.GDJumpButton2Objects1});
gdjs.TESTXCode.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.TESTXCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects, gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TESTXCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.TESTXCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform_Ground2"), gdjs.TESTXCode.GDPlatform_9595Ground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlatform_95959595Ground2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TESTXCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].activateBehavior("PlatformerMultitouchMapper", false);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TESTXCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects, gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("crouch");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LControl");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.TESTXCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects, gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TESTXCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.TESTXCode.GDPlayerObjects1[k] = gdjs.TESTXCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TESTXCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TESTXCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.TESTXCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BeepBox-Song.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.TESTXCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects, gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TESTXCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Up")) ) {
        isConditionTrue_0 = true;
        gdjs.TESTXCode.GDPlayerObjects1[k] = gdjs.TESTXCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TESTXCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23000028);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.TESTXCode.GDHealthBarObjects1);
/* Reuse gdjs.TESTXCode.GDNewSprite3Objects1 */
/* Reuse gdjs.TESTXCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TESTXCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("Bitwe");
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Biten");
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].returnVariable(gdjs.TESTXCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(25);
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDHealthBarObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.common.clamp((gdjs.RuntimeObject.getVariableNumber(((gdjs.TESTXCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TESTXCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))) / (gdjs.RuntimeObject.getVariableNumber(((gdjs.TESTXCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TESTXCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1))) * 153, 0, 100));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.TESTXCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TESTXCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.TESTXCode.GDNewSprite3Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.TESTXCode.GDNewSprite3Objects1[k] = gdjs.TESTXCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.TESTXCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TESTXCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.TESTXCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TESTXCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.TESTXCode.GDPlayerObjects1[k] = gdjs.TESTXCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TESTXCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TESTXCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].setPosition(355,315);
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.TESTXCode.GDMoveJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TESTXCode.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDMoveJoystickObjects1[i].ActivateControl(false, null);
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("HIT THEM");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton2"), gdjs.TESTXCode.GDJumpButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDJumpButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TESTXCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("HIT THEM");
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
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.TESTXCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton2"), gdjs.TESTXCode.GDJumpButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.TESTXCode.GDMoveJoystickObjects1);
{for(var i = 0, len = gdjs.TESTXCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDJumpButton2Objects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDJumpButton2Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.TESTXCode.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDMoveJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton2"), gdjs.TESTXCode.GDJumpButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.TESTXCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDPlayerObjects1Objects, gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TESTXCode.mapOfGDgdjs_9546TESTXCode_9546GDJumpButton2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.TESTXCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.TESTXCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.TESTXCode.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "BeepBox-Song.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TESTXCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TESTXCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TESTXCode.GDPlayerObjects1[i].getVariableNumber(gdjs.TESTXCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TESTXCode.GDPlayerObjects1[k] = gdjs.TESTXCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TESTXCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lost", false);
}
}

}


};

gdjs.TESTXCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TESTXCode.GDPlayerObjects1.length = 0;
gdjs.TESTXCode.GDPlayerObjects2.length = 0;
gdjs.TESTXCode.GDBackgroundObjects1.length = 0;
gdjs.TESTXCode.GDBackgroundObjects2.length = 0;
gdjs.TESTXCode.GDCoinsObjects1.length = 0;
gdjs.TESTXCode.GDCoinsObjects2.length = 0;
gdjs.TESTXCode.GDJumpButtonObjects1.length = 0;
gdjs.TESTXCode.GDJumpButtonObjects2.length = 0;
gdjs.TESTXCode.GDMoveJoystickObjects1.length = 0;
gdjs.TESTXCode.GDMoveJoystickObjects2.length = 0;
gdjs.TESTXCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.TESTXCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.TESTXCode.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.TESTXCode.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.TESTXCode.GDNewSpriteObjects1.length = 0;
gdjs.TESTXCode.GDNewSpriteObjects2.length = 0;
gdjs.TESTXCode.GDLadderGroundObjects1.length = 0;
gdjs.TESTXCode.GDLadderGroundObjects2.length = 0;
gdjs.TESTXCode.GDNewSprite2Objects1.length = 0;
gdjs.TESTXCode.GDNewSprite2Objects2.length = 0;
gdjs.TESTXCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.TESTXCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.TESTXCode.GDNewTextObjects1.length = 0;
gdjs.TESTXCode.GDNewTextObjects2.length = 0;
gdjs.TESTXCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.TESTXCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.TESTXCode.GDNewSprite3Objects1.length = 0;
gdjs.TESTXCode.GDNewSprite3Objects2.length = 0;
gdjs.TESTXCode.GDJumpButton2Objects1.length = 0;
gdjs.TESTXCode.GDJumpButton2Objects2.length = 0;
gdjs.TESTXCode.GDNewText2Objects1.length = 0;
gdjs.TESTXCode.GDNewText2Objects2.length = 0;
gdjs.TESTXCode.GDHealthBarBoxObjects1.length = 0;
gdjs.TESTXCode.GDHealthBarBoxObjects2.length = 0;
gdjs.TESTXCode.GDHealthBarObjects1.length = 0;
gdjs.TESTXCode.GDHealthBarObjects2.length = 0;
gdjs.TESTXCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.TESTXCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.TESTXCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.TESTXCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.TESTXCode.GDPortal_9595TopObjects1.length = 0;
gdjs.TESTXCode.GDPortal_9595TopObjects2.length = 0;

gdjs.TESTXCode.eventsList0(runtimeScene);
gdjs.TESTXCode.GDPlayerObjects1.length = 0;
gdjs.TESTXCode.GDPlayerObjects2.length = 0;
gdjs.TESTXCode.GDBackgroundObjects1.length = 0;
gdjs.TESTXCode.GDBackgroundObjects2.length = 0;
gdjs.TESTXCode.GDCoinsObjects1.length = 0;
gdjs.TESTXCode.GDCoinsObjects2.length = 0;
gdjs.TESTXCode.GDJumpButtonObjects1.length = 0;
gdjs.TESTXCode.GDJumpButtonObjects2.length = 0;
gdjs.TESTXCode.GDMoveJoystickObjects1.length = 0;
gdjs.TESTXCode.GDMoveJoystickObjects2.length = 0;
gdjs.TESTXCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.TESTXCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.TESTXCode.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.TESTXCode.GDPlatform_9595Ground2Objects2.length = 0;
gdjs.TESTXCode.GDNewSpriteObjects1.length = 0;
gdjs.TESTXCode.GDNewSpriteObjects2.length = 0;
gdjs.TESTXCode.GDLadderGroundObjects1.length = 0;
gdjs.TESTXCode.GDLadderGroundObjects2.length = 0;
gdjs.TESTXCode.GDNewSprite2Objects1.length = 0;
gdjs.TESTXCode.GDNewSprite2Objects2.length = 0;
gdjs.TESTXCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.TESTXCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.TESTXCode.GDNewTextObjects1.length = 0;
gdjs.TESTXCode.GDNewTextObjects2.length = 0;
gdjs.TESTXCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.TESTXCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.TESTXCode.GDNewSprite3Objects1.length = 0;
gdjs.TESTXCode.GDNewSprite3Objects2.length = 0;
gdjs.TESTXCode.GDJumpButton2Objects1.length = 0;
gdjs.TESTXCode.GDJumpButton2Objects2.length = 0;
gdjs.TESTXCode.GDNewText2Objects1.length = 0;
gdjs.TESTXCode.GDNewText2Objects2.length = 0;
gdjs.TESTXCode.GDHealthBarBoxObjects1.length = 0;
gdjs.TESTXCode.GDHealthBarBoxObjects2.length = 0;
gdjs.TESTXCode.GDHealthBarObjects1.length = 0;
gdjs.TESTXCode.GDHealthBarObjects2.length = 0;
gdjs.TESTXCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.TESTXCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.TESTXCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.TESTXCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.TESTXCode.GDPortal_9595TopObjects1.length = 0;
gdjs.TESTXCode.GDPortal_9595TopObjects2.length = 0;


return;

}

gdjs['TESTXCode'] = gdjs.TESTXCode;
