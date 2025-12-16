gdjs.mENUCode = {};
gdjs.mENUCode.localVariables = [];
gdjs.mENUCode.idToCallbackMap = new Map();
gdjs.mENUCode.GDNewTextObjects1= [];
gdjs.mENUCode.GDNewTextObjects2= [];
gdjs.mENUCode.GDSmallBlueButtonObjects1= [];
gdjs.mENUCode.GDSmallBlueButtonObjects2= [];
gdjs.mENUCode.GDNewText2Objects1= [];
gdjs.mENUCode.GDNewText2Objects2= [];
gdjs.mENUCode.GDNewText3Objects1= [];
gdjs.mENUCode.GDNewText3Objects2= [];
gdjs.mENUCode.GDNewPanelSpriteObjects1= [];
gdjs.mENUCode.GDNewPanelSpriteObjects2= [];
gdjs.mENUCode.GDTinyBlueButtonObjects1= [];
gdjs.mENUCode.GDTinyBlueButtonObjects2= [];
gdjs.mENUCode.GDSmallBlueButton2Objects1= [];
gdjs.mENUCode.GDSmallBlueButton2Objects2= [];
gdjs.mENUCode.GDHealthBarBoxObjects1= [];
gdjs.mENUCode.GDHealthBarBoxObjects2= [];
gdjs.mENUCode.GDHealthBarObjects1= [];
gdjs.mENUCode.GDHealthBarObjects2= [];
gdjs.mENUCode.GDPortal_9595BottomObjects1= [];
gdjs.mENUCode.GDPortal_9595BottomObjects2= [];
gdjs.mENUCode.GDPortal_9595MiddleObjects1= [];
gdjs.mENUCode.GDPortal_9595MiddleObjects2= [];
gdjs.mENUCode.GDPortal_9595TopObjects1= [];
gdjs.mENUCode.GDPortal_9595TopObjects2= [];


gdjs.mENUCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Menu Start2.mp3", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Menu Loop.mp3", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallBlueButton"), gdjs.mENUCode.GDSmallBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mENUCode.GDSmallBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.mENUCode.GDSmallBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mENUCode.GDSmallBlueButtonObjects1[k] = gdjs.mENUCode.GDSmallBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.mENUCode.GDSmallBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallBlueButton2"), gdjs.mENUCode.GDSmallBlueButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mENUCode.GDSmallBlueButton2Objects1.length;i<l;++i) {
    if ( gdjs.mENUCode.GDSmallBlueButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mENUCode.GDSmallBlueButton2Objects1[k] = gdjs.mENUCode.GDSmallBlueButton2Objects1[i];
        ++k;
    }
}
gdjs.mENUCode.GDSmallBlueButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TinyBlueButton"), gdjs.mENUCode.GDTinyBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mENUCode.GDTinyBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.mENUCode.GDTinyBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mENUCode.GDTinyBlueButtonObjects1[k] = gdjs.mENUCode.GDTinyBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.mENUCode.GDTinyBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TEST NAVIGATION", false);
}
}

}


};

gdjs.mENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mENUCode.GDNewTextObjects1.length = 0;
gdjs.mENUCode.GDNewTextObjects2.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.mENUCode.GDNewText2Objects1.length = 0;
gdjs.mENUCode.GDNewText2Objects2.length = 0;
gdjs.mENUCode.GDNewText3Objects1.length = 0;
gdjs.mENUCode.GDNewText3Objects2.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects1.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects2.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects1.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects2.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects1.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects2.length = 0;
gdjs.mENUCode.GDHealthBarObjects1.length = 0;
gdjs.mENUCode.GDHealthBarObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects2.length = 0;

gdjs.mENUCode.eventsList0(runtimeScene);
gdjs.mENUCode.GDNewTextObjects1.length = 0;
gdjs.mENUCode.GDNewTextObjects2.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.mENUCode.GDNewText2Objects1.length = 0;
gdjs.mENUCode.GDNewText2Objects2.length = 0;
gdjs.mENUCode.GDNewText3Objects1.length = 0;
gdjs.mENUCode.GDNewText3Objects2.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects1.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects2.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects1.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects2.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects1.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects2.length = 0;
gdjs.mENUCode.GDHealthBarObjects1.length = 0;
gdjs.mENUCode.GDHealthBarObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects2.length = 0;


return;

}

gdjs['mENUCode'] = gdjs.mENUCode;
