gdjs.MenuSettingsCode = {};
gdjs.MenuSettingsCode.localVariables = [];
gdjs.MenuSettingsCode.idToCallbackMap = new Map();
gdjs.MenuSettingsCode.GDQuestion_9595MarkObjects1= [];
gdjs.MenuSettingsCode.GDQuestion_9595MarkObjects2= [];
gdjs.MenuSettingsCode.GDNewTextObjects1= [];
gdjs.MenuSettingsCode.GDNewTextObjects2= [];
gdjs.MenuSettingsCode.GDNewText2Objects1= [];
gdjs.MenuSettingsCode.GDNewText2Objects2= [];
gdjs.MenuSettingsCode.GDDiscordObjects1= [];
gdjs.MenuSettingsCode.GDDiscordObjects2= [];
gdjs.MenuSettingsCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuSettingsCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects1= [];
gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects2= [];
gdjs.MenuSettingsCode.GDHealthBarBoxObjects1= [];
gdjs.MenuSettingsCode.GDHealthBarBoxObjects2= [];
gdjs.MenuSettingsCode.GDHealthBarObjects1= [];
gdjs.MenuSettingsCode.GDHealthBarObjects2= [];
gdjs.MenuSettingsCode.GDPortal_9595BottomObjects1= [];
gdjs.MenuSettingsCode.GDPortal_9595BottomObjects2= [];
gdjs.MenuSettingsCode.GDPortal_9595MiddleObjects1= [];
gdjs.MenuSettingsCode.GDPortal_9595MiddleObjects2= [];
gdjs.MenuSettingsCode.GDPortal_9595TopObjects1= [];
gdjs.MenuSettingsCode.GDPortal_9595TopObjects2= [];
gdjs.MenuSettingsCode.GDNewSprite2Objects1= [];
gdjs.MenuSettingsCode.GDNewSprite2Objects2= [];
gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1= [];
gdjs.MenuSettingsCode.GDTinyGreyButtonObjects2= [];
gdjs.MenuSettingsCode.GDTinyGreyButton2Objects1= [];
gdjs.MenuSettingsCode.GDTinyGreyButton2Objects2= [];
gdjs.MenuSettingsCode.GDNewText4Objects1= [];
gdjs.MenuSettingsCode.GDNewText4Objects2= [];
gdjs.MenuSettingsCode.GDArmandObjects1= [];
gdjs.MenuSettingsCode.GDArmandObjects2= [];
gdjs.MenuSettingsCode.GDArmand2Objects1= [];
gdjs.MenuSettingsCode.GDArmand2Objects2= [];
gdjs.MenuSettingsCode.GDNewText5Objects1= [];
gdjs.MenuSettingsCode.GDNewText5Objects2= [];
gdjs.MenuSettingsCode.GDATMOZObjects1= [];
gdjs.MenuSettingsCode.GDATMOZObjects2= [];


gdjs.MenuSettingsCode.mapOfGDgdjs_9546MenuSettingsCode_9546GDLeft_95959595ArrowObjects1Objects = Hashtable.newFrom({"Left_Arrow": gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects1});
gdjs.MenuSettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_Arrow"), gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuSettingsCode.mapOfGDgdjs_9546MenuSettingsCode_9546GDLeft_95959595ArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Left_Arrow"), gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects1);
{for(var i = 0, len = gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects1.length ;i < len;++i) {
    gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TinyGreyButton"), gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1[k] = gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.MenuSettingsCode.GDNewText4Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Skin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.MenuSettingsCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.MenuSettingsCode.GDNewText4Objects1[i].getBehavior("Text").setText("Skin : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Coins", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.MenuSettingsCode.GDNewText4Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Skin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.MenuSettingsCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.MenuSettingsCode.GDNewText4Objects1[i].getBehavior("Text").setText("Skin : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Coins", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
}

}


};

gdjs.MenuSettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuSettingsCode.GDQuestion_9595MarkObjects1.length = 0;
gdjs.MenuSettingsCode.GDQuestion_9595MarkObjects2.length = 0;
gdjs.MenuSettingsCode.GDNewTextObjects1.length = 0;
gdjs.MenuSettingsCode.GDNewTextObjects2.length = 0;
gdjs.MenuSettingsCode.GDNewText2Objects1.length = 0;
gdjs.MenuSettingsCode.GDNewText2Objects2.length = 0;
gdjs.MenuSettingsCode.GDDiscordObjects1.length = 0;
gdjs.MenuSettingsCode.GDDiscordObjects2.length = 0;
gdjs.MenuSettingsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuSettingsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.MenuSettingsCode.GDHealthBarBoxObjects1.length = 0;
gdjs.MenuSettingsCode.GDHealthBarBoxObjects2.length = 0;
gdjs.MenuSettingsCode.GDHealthBarObjects1.length = 0;
gdjs.MenuSettingsCode.GDHealthBarObjects2.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595TopObjects1.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595TopObjects2.length = 0;
gdjs.MenuSettingsCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuSettingsCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.MenuSettingsCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.MenuSettingsCode.GDTinyGreyButton2Objects1.length = 0;
gdjs.MenuSettingsCode.GDTinyGreyButton2Objects2.length = 0;
gdjs.MenuSettingsCode.GDNewText4Objects1.length = 0;
gdjs.MenuSettingsCode.GDNewText4Objects2.length = 0;
gdjs.MenuSettingsCode.GDArmandObjects1.length = 0;
gdjs.MenuSettingsCode.GDArmandObjects2.length = 0;
gdjs.MenuSettingsCode.GDArmand2Objects1.length = 0;
gdjs.MenuSettingsCode.GDArmand2Objects2.length = 0;
gdjs.MenuSettingsCode.GDNewText5Objects1.length = 0;
gdjs.MenuSettingsCode.GDNewText5Objects2.length = 0;
gdjs.MenuSettingsCode.GDATMOZObjects1.length = 0;
gdjs.MenuSettingsCode.GDATMOZObjects2.length = 0;

gdjs.MenuSettingsCode.eventsList0(runtimeScene);
gdjs.MenuSettingsCode.GDQuestion_9595MarkObjects1.length = 0;
gdjs.MenuSettingsCode.GDQuestion_9595MarkObjects2.length = 0;
gdjs.MenuSettingsCode.GDNewTextObjects1.length = 0;
gdjs.MenuSettingsCode.GDNewTextObjects2.length = 0;
gdjs.MenuSettingsCode.GDNewText2Objects1.length = 0;
gdjs.MenuSettingsCode.GDNewText2Objects2.length = 0;
gdjs.MenuSettingsCode.GDDiscordObjects1.length = 0;
gdjs.MenuSettingsCode.GDDiscordObjects2.length = 0;
gdjs.MenuSettingsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuSettingsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects1.length = 0;
gdjs.MenuSettingsCode.GDLeft_9595ArrowObjects2.length = 0;
gdjs.MenuSettingsCode.GDHealthBarBoxObjects1.length = 0;
gdjs.MenuSettingsCode.GDHealthBarBoxObjects2.length = 0;
gdjs.MenuSettingsCode.GDHealthBarObjects1.length = 0;
gdjs.MenuSettingsCode.GDHealthBarObjects2.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595TopObjects1.length = 0;
gdjs.MenuSettingsCode.GDPortal_9595TopObjects2.length = 0;
gdjs.MenuSettingsCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuSettingsCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuSettingsCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.MenuSettingsCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.MenuSettingsCode.GDTinyGreyButton2Objects1.length = 0;
gdjs.MenuSettingsCode.GDTinyGreyButton2Objects2.length = 0;
gdjs.MenuSettingsCode.GDNewText4Objects1.length = 0;
gdjs.MenuSettingsCode.GDNewText4Objects2.length = 0;
gdjs.MenuSettingsCode.GDArmandObjects1.length = 0;
gdjs.MenuSettingsCode.GDArmandObjects2.length = 0;
gdjs.MenuSettingsCode.GDArmand2Objects1.length = 0;
gdjs.MenuSettingsCode.GDArmand2Objects2.length = 0;
gdjs.MenuSettingsCode.GDNewText5Objects1.length = 0;
gdjs.MenuSettingsCode.GDNewText5Objects2.length = 0;
gdjs.MenuSettingsCode.GDATMOZObjects1.length = 0;
gdjs.MenuSettingsCode.GDATMOZObjects2.length = 0;


return;

}

gdjs['MenuSettingsCode'] = gdjs.MenuSettingsCode;
