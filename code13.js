gdjs.lostCode = {};
gdjs.lostCode.localVariables = [];
gdjs.lostCode.idToCallbackMap = new Map();
gdjs.lostCode.GDNewSpriteObjects1= [];
gdjs.lostCode.GDNewSpriteObjects2= [];
gdjs.lostCode.GDNewButtonObjects1= [];
gdjs.lostCode.GDNewButtonObjects2= [];
gdjs.lostCode.GDDino_9595VitaObjects1= [];
gdjs.lostCode.GDDino_9595VitaObjects2= [];
gdjs.lostCode.GDSmallBlueButtonObjects1= [];
gdjs.lostCode.GDSmallBlueButtonObjects2= [];
gdjs.lostCode.GDSmallBlueButton2Objects1= [];
gdjs.lostCode.GDSmallBlueButton2Objects2= [];
gdjs.lostCode.GDNewTextObjects1= [];
gdjs.lostCode.GDNewTextObjects2= [];
gdjs.lostCode.GDHealthBarBoxObjects1= [];
gdjs.lostCode.GDHealthBarBoxObjects2= [];
gdjs.lostCode.GDHealthBarObjects1= [];
gdjs.lostCode.GDHealthBarObjects2= [];
gdjs.lostCode.GDPortal_9595BottomObjects1= [];
gdjs.lostCode.GDPortal_9595BottomObjects2= [];
gdjs.lostCode.GDPortal_9595MiddleObjects1= [];
gdjs.lostCode.GDPortal_9595MiddleObjects2= [];
gdjs.lostCode.GDPortal_9595TopObjects1= [];
gdjs.lostCode.GDPortal_9595TopObjects2= [];
gdjs.lostCode.GDNewSprite2Objects1= [];
gdjs.lostCode.GDNewSprite2Objects2= [];
gdjs.lostCode.GDTinyGreyButtonObjects1= [];
gdjs.lostCode.GDTinyGreyButtonObjects2= [];
gdjs.lostCode.GDTinyGreyButton2Objects1= [];
gdjs.lostCode.GDTinyGreyButton2Objects2= [];
gdjs.lostCode.GDNewText4Objects1= [];
gdjs.lostCode.GDNewText4Objects2= [];
gdjs.lostCode.GDArmandObjects1= [];
gdjs.lostCode.GDArmandObjects2= [];
gdjs.lostCode.GDArmand2Objects1= [];
gdjs.lostCode.GDArmand2Objects2= [];
gdjs.lostCode.GDNewText5Objects1= [];
gdjs.lostCode.GDNewText5Objects2= [];
gdjs.lostCode.GDATMOZObjects1= [];
gdjs.lostCode.GDATMOZObjects2= [];


gdjs.lostCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Loss.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallBlueButton"), gdjs.lostCode.GDSmallBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lostCode.GDSmallBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.lostCode.GDSmallBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lostCode.GDSmallBlueButtonObjects1[k] = gdjs.lostCode.GDSmallBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.lostCode.GDSmallBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game Scene");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallBlueButton2"), gdjs.lostCode.GDSmallBlueButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.lostCode.GDSmallBlueButton2Objects1.length;i<l;++i) {
    if ( gdjs.lostCode.GDSmallBlueButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.lostCode.GDSmallBlueButton2Objects1[k] = gdjs.lostCode.GDSmallBlueButton2Objects1[i];
        ++k;
    }
}
gdjs.lostCode.GDSmallBlueButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mENU", false);
}
}

}


};

gdjs.lostCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lostCode.GDNewSpriteObjects1.length = 0;
gdjs.lostCode.GDNewSpriteObjects2.length = 0;
gdjs.lostCode.GDNewButtonObjects1.length = 0;
gdjs.lostCode.GDNewButtonObjects2.length = 0;
gdjs.lostCode.GDDino_9595VitaObjects1.length = 0;
gdjs.lostCode.GDDino_9595VitaObjects2.length = 0;
gdjs.lostCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.lostCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.lostCode.GDSmallBlueButton2Objects1.length = 0;
gdjs.lostCode.GDSmallBlueButton2Objects2.length = 0;
gdjs.lostCode.GDNewTextObjects1.length = 0;
gdjs.lostCode.GDNewTextObjects2.length = 0;
gdjs.lostCode.GDHealthBarBoxObjects1.length = 0;
gdjs.lostCode.GDHealthBarBoxObjects2.length = 0;
gdjs.lostCode.GDHealthBarObjects1.length = 0;
gdjs.lostCode.GDHealthBarObjects2.length = 0;
gdjs.lostCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.lostCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.lostCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.lostCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.lostCode.GDPortal_9595TopObjects1.length = 0;
gdjs.lostCode.GDPortal_9595TopObjects2.length = 0;
gdjs.lostCode.GDNewSprite2Objects1.length = 0;
gdjs.lostCode.GDNewSprite2Objects2.length = 0;
gdjs.lostCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.lostCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.lostCode.GDTinyGreyButton2Objects1.length = 0;
gdjs.lostCode.GDTinyGreyButton2Objects2.length = 0;
gdjs.lostCode.GDNewText4Objects1.length = 0;
gdjs.lostCode.GDNewText4Objects2.length = 0;
gdjs.lostCode.GDArmandObjects1.length = 0;
gdjs.lostCode.GDArmandObjects2.length = 0;
gdjs.lostCode.GDArmand2Objects1.length = 0;
gdjs.lostCode.GDArmand2Objects2.length = 0;
gdjs.lostCode.GDNewText5Objects1.length = 0;
gdjs.lostCode.GDNewText5Objects2.length = 0;
gdjs.lostCode.GDATMOZObjects1.length = 0;
gdjs.lostCode.GDATMOZObjects2.length = 0;

gdjs.lostCode.eventsList0(runtimeScene);
gdjs.lostCode.GDNewSpriteObjects1.length = 0;
gdjs.lostCode.GDNewSpriteObjects2.length = 0;
gdjs.lostCode.GDNewButtonObjects1.length = 0;
gdjs.lostCode.GDNewButtonObjects2.length = 0;
gdjs.lostCode.GDDino_9595VitaObjects1.length = 0;
gdjs.lostCode.GDDino_9595VitaObjects2.length = 0;
gdjs.lostCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.lostCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.lostCode.GDSmallBlueButton2Objects1.length = 0;
gdjs.lostCode.GDSmallBlueButton2Objects2.length = 0;
gdjs.lostCode.GDNewTextObjects1.length = 0;
gdjs.lostCode.GDNewTextObjects2.length = 0;
gdjs.lostCode.GDHealthBarBoxObjects1.length = 0;
gdjs.lostCode.GDHealthBarBoxObjects2.length = 0;
gdjs.lostCode.GDHealthBarObjects1.length = 0;
gdjs.lostCode.GDHealthBarObjects2.length = 0;
gdjs.lostCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.lostCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.lostCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.lostCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.lostCode.GDPortal_9595TopObjects1.length = 0;
gdjs.lostCode.GDPortal_9595TopObjects2.length = 0;
gdjs.lostCode.GDNewSprite2Objects1.length = 0;
gdjs.lostCode.GDNewSprite2Objects2.length = 0;
gdjs.lostCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.lostCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.lostCode.GDTinyGreyButton2Objects1.length = 0;
gdjs.lostCode.GDTinyGreyButton2Objects2.length = 0;
gdjs.lostCode.GDNewText4Objects1.length = 0;
gdjs.lostCode.GDNewText4Objects2.length = 0;
gdjs.lostCode.GDArmandObjects1.length = 0;
gdjs.lostCode.GDArmandObjects2.length = 0;
gdjs.lostCode.GDArmand2Objects1.length = 0;
gdjs.lostCode.GDArmand2Objects2.length = 0;
gdjs.lostCode.GDNewText5Objects1.length = 0;
gdjs.lostCode.GDNewText5Objects2.length = 0;
gdjs.lostCode.GDATMOZObjects1.length = 0;
gdjs.lostCode.GDATMOZObjects2.length = 0;


return;

}

gdjs['lostCode'] = gdjs.lostCode;
