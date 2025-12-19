gdjs.mENUCode = {};
gdjs.mENUCode.localVariables = [];
gdjs.mENUCode.idToCallbackMap = new Map();
gdjs.mENUCode.GDNewTextObjects1= [];
gdjs.mENUCode.GDNewTextObjects2= [];
gdjs.mENUCode.GDNewTextObjects3= [];
gdjs.mENUCode.GDSmallBlueButtonObjects1= [];
gdjs.mENUCode.GDSmallBlueButtonObjects2= [];
gdjs.mENUCode.GDSmallBlueButtonObjects3= [];
gdjs.mENUCode.GDNewText2Objects1= [];
gdjs.mENUCode.GDNewText2Objects2= [];
gdjs.mENUCode.GDNewText2Objects3= [];
gdjs.mENUCode.GDNewText3Objects1= [];
gdjs.mENUCode.GDNewText3Objects2= [];
gdjs.mENUCode.GDNewText3Objects3= [];
gdjs.mENUCode.GDNewPanelSpriteObjects1= [];
gdjs.mENUCode.GDNewPanelSpriteObjects2= [];
gdjs.mENUCode.GDNewPanelSpriteObjects3= [];
gdjs.mENUCode.GDTinyBlueButtonObjects1= [];
gdjs.mENUCode.GDTinyBlueButtonObjects2= [];
gdjs.mENUCode.GDTinyBlueButtonObjects3= [];
gdjs.mENUCode.GDSmallBlueButton2Objects1= [];
gdjs.mENUCode.GDSmallBlueButton2Objects2= [];
gdjs.mENUCode.GDSmallBlueButton2Objects3= [];
gdjs.mENUCode.GDSplashTextObjects1= [];
gdjs.mENUCode.GDSplashTextObjects2= [];
gdjs.mENUCode.GDSplashTextObjects3= [];
gdjs.mENUCode.GDSmallRedButtonObjects1= [];
gdjs.mENUCode.GDSmallRedButtonObjects2= [];
gdjs.mENUCode.GDSmallRedButtonObjects3= [];
gdjs.mENUCode.GDSettingsObjects1= [];
gdjs.mENUCode.GDSettingsObjects2= [];
gdjs.mENUCode.GDSettingsObjects3= [];
gdjs.mENUCode.GDNewButtonObjects1= [];
gdjs.mENUCode.GDNewButtonObjects2= [];
gdjs.mENUCode.GDNewButtonObjects3= [];
gdjs.mENUCode.GDNewToggleSwitchObjects1= [];
gdjs.mENUCode.GDNewToggleSwitchObjects2= [];
gdjs.mENUCode.GDNewToggleSwitchObjects3= [];
gdjs.mENUCode.GDHealthBarBoxObjects1= [];
gdjs.mENUCode.GDHealthBarBoxObjects2= [];
gdjs.mENUCode.GDHealthBarBoxObjects3= [];
gdjs.mENUCode.GDHealthBarObjects1= [];
gdjs.mENUCode.GDHealthBarObjects2= [];
gdjs.mENUCode.GDHealthBarObjects3= [];
gdjs.mENUCode.GDPortal_9595BottomObjects1= [];
gdjs.mENUCode.GDPortal_9595BottomObjects2= [];
gdjs.mENUCode.GDPortal_9595BottomObjects3= [];
gdjs.mENUCode.GDPortal_9595MiddleObjects1= [];
gdjs.mENUCode.GDPortal_9595MiddleObjects2= [];
gdjs.mENUCode.GDPortal_9595MiddleObjects3= [];
gdjs.mENUCode.GDPortal_9595TopObjects1= [];
gdjs.mENUCode.GDPortal_9595TopObjects2= [];
gdjs.mENUCode.GDPortal_9595TopObjects3= [];
gdjs.mENUCode.GDNewSprite2Objects1= [];
gdjs.mENUCode.GDNewSprite2Objects2= [];
gdjs.mENUCode.GDNewSprite2Objects3= [];
gdjs.mENUCode.GDTinyGreyButtonObjects1= [];
gdjs.mENUCode.GDTinyGreyButtonObjects2= [];
gdjs.mENUCode.GDTinyGreyButtonObjects3= [];
gdjs.mENUCode.GDTinyGreyButton2Objects1= [];
gdjs.mENUCode.GDTinyGreyButton2Objects2= [];
gdjs.mENUCode.GDTinyGreyButton2Objects3= [];
gdjs.mENUCode.GDNewText4Objects1= [];
gdjs.mENUCode.GDNewText4Objects2= [];
gdjs.mENUCode.GDNewText4Objects3= [];
gdjs.mENUCode.GDArmandObjects1= [];
gdjs.mENUCode.GDArmandObjects2= [];
gdjs.mENUCode.GDArmandObjects3= [];
gdjs.mENUCode.GDArmand2Objects1= [];
gdjs.mENUCode.GDArmand2Objects2= [];
gdjs.mENUCode.GDArmand2Objects3= [];
gdjs.mENUCode.GDNewText5Objects1= [];
gdjs.mENUCode.GDNewText5Objects2= [];
gdjs.mENUCode.GDNewText5Objects3= [];
gdjs.mENUCode.GDATMOZObjects1= [];
gdjs.mENUCode.GDATMOZObjects2= [];
gdjs.mENUCode.GDATMOZObjects3= [];


gdjs.mENUCode.asyncCallback23644244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mENUCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Settings"), gdjs.mENUCode.GDSettingsObjects3);

{for(var i = 0, len = gdjs.mENUCode.GDSettingsObjects3.length ;i < len;++i) {
    gdjs.mENUCode.GDSettingsObjects3[i].getBehavior("Animation").setAnimationName("Cross01");
}
}
gdjs.mENUCode.localVariables.length = 0;
}
gdjs.mENUCode.idToCallbackMap.set(23644244, gdjs.mENUCode.asyncCallback23644244);
gdjs.mENUCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.mENUCode.localVariables);
for (const obj of gdjs.mENUCode.GDSettingsObjects2) asyncObjectsList.addObject("Settings", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.mENUCode.asyncCallback23644244(runtimeScene, asyncObjectsList)), 23644244, asyncObjectsList);
}
}

}


};gdjs.mENUCode.asyncCallback23643724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mENUCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Settings"), gdjs.mENUCode.GDSettingsObjects2);

{for(var i = 0, len = gdjs.mENUCode.GDSettingsObjects2.length ;i < len;++i) {
    gdjs.mENUCode.GDSettingsObjects2[i].getBehavior("Animation").setAnimationName("Cross03");
}
}

{ //Subevents
gdjs.mENUCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.mENUCode.localVariables.length = 0;
}
gdjs.mENUCode.idToCallbackMap.set(23643724, gdjs.mENUCode.asyncCallback23643724);
gdjs.mENUCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mENUCode.localVariables);
for (const obj of gdjs.mENUCode.GDSettingsObjects1) asyncObjectsList.addObject("Settings", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.mENUCode.asyncCallback23643724(runtimeScene, asyncObjectsList)), 23643724, asyncObjectsList);
}
}

}


};gdjs.mENUCode.mapOfGDgdjs_9546mENUCode_9546GDSettingsObjects1Objects = Hashtable.newFrom({"Settings": gdjs.mENUCode.GDSettingsObjects1});
gdjs.mENUCode.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.mENUCode.GDNewText4Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Skin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.mENUCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.mENUCode.GDNewText4Objects1[i].getBehavior("Text").setText("Skin : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
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
{gdjs.evtTools.storage.writeStringInJSONFile("ThisGame", "Skin", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("ThisGame", "Coins", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("ThisGame", "SkinAtmozBought", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
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


{

gdjs.copyArray(runtimeScene.getObjects("TinyGreyButton"), gdjs.mENUCode.GDTinyGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mENUCode.GDTinyGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.mENUCode.GDTinyGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mENUCode.GDTinyGreyButtonObjects1[k] = gdjs.mENUCode.GDTinyGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.mENUCode.GDTinyGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.mENUCode.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.mENUCode.GDNewText5Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Skin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Coins", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "SkinAtmozBought", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.mENUCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.mENUCode.GDNewText4Objects1[i].getBehavior("Text").setText("Skin : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.mENUCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.mENUCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.mENUCode.GDSettingsObjects1);
{for(var i = 0, len = gdjs.mENUCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.mENUCode.GDSettingsObjects1[i].getBehavior("Animation").setAnimationName("Cross02");
}
}

{ //Subevents
gdjs.mENUCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.mENUCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mENUCode.mapOfGDgdjs_9546mENUCode_9546GDSettingsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuSettings", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.mENUCode.GDSettingsObjects1);
{for(var i = 0, len = gdjs.mENUCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.mENUCode.GDSettingsObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuSettings", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.mENUCode.GDNewText4Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Skin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.mENUCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.mENUCode.GDNewText4Objects1[i].getBehavior("Text").setText("Skin : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.mENUCode.GDNewText5Objects1);
{for(var i = 0, len = gdjs.mENUCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.mENUCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallRedButton"), gdjs.mENUCode.GDSmallRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mENUCode.GDSmallRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.mENUCode.GDSmallRedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mENUCode.GDSmallRedButtonObjects1[k] = gdjs.mENUCode.GDSmallRedButtonObjects1[i];
        ++k;
    }
}
gdjs.mENUCode.GDSmallRedButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.mENUCode.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.mENUCode.GDNewText5Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Skin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Coins", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "SkinAtmozBought", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.mENUCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.mENUCode.GDNewText4Objects1[i].getBehavior("Text").setText("Skin : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.mENUCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.mENUCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SkinsSelect", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.mENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mENUCode.GDNewTextObjects1.length = 0;
gdjs.mENUCode.GDNewTextObjects2.length = 0;
gdjs.mENUCode.GDNewTextObjects3.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects3.length = 0;
gdjs.mENUCode.GDNewText2Objects1.length = 0;
gdjs.mENUCode.GDNewText2Objects2.length = 0;
gdjs.mENUCode.GDNewText2Objects3.length = 0;
gdjs.mENUCode.GDNewText3Objects1.length = 0;
gdjs.mENUCode.GDNewText3Objects2.length = 0;
gdjs.mENUCode.GDNewText3Objects3.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects1.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects2.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects3.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects1.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects2.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects3.length = 0;
gdjs.mENUCode.GDSplashTextObjects1.length = 0;
gdjs.mENUCode.GDSplashTextObjects2.length = 0;
gdjs.mENUCode.GDSplashTextObjects3.length = 0;
gdjs.mENUCode.GDSmallRedButtonObjects1.length = 0;
gdjs.mENUCode.GDSmallRedButtonObjects2.length = 0;
gdjs.mENUCode.GDSmallRedButtonObjects3.length = 0;
gdjs.mENUCode.GDSettingsObjects1.length = 0;
gdjs.mENUCode.GDSettingsObjects2.length = 0;
gdjs.mENUCode.GDSettingsObjects3.length = 0;
gdjs.mENUCode.GDNewButtonObjects1.length = 0;
gdjs.mENUCode.GDNewButtonObjects2.length = 0;
gdjs.mENUCode.GDNewButtonObjects3.length = 0;
gdjs.mENUCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.mENUCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.mENUCode.GDNewToggleSwitchObjects3.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects1.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects2.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects3.length = 0;
gdjs.mENUCode.GDHealthBarObjects1.length = 0;
gdjs.mENUCode.GDHealthBarObjects2.length = 0;
gdjs.mENUCode.GDHealthBarObjects3.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects3.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects3.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects3.length = 0;
gdjs.mENUCode.GDNewSprite2Objects1.length = 0;
gdjs.mENUCode.GDNewSprite2Objects2.length = 0;
gdjs.mENUCode.GDNewSprite2Objects3.length = 0;
gdjs.mENUCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.mENUCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.mENUCode.GDTinyGreyButtonObjects3.length = 0;
gdjs.mENUCode.GDTinyGreyButton2Objects1.length = 0;
gdjs.mENUCode.GDTinyGreyButton2Objects2.length = 0;
gdjs.mENUCode.GDTinyGreyButton2Objects3.length = 0;
gdjs.mENUCode.GDNewText4Objects1.length = 0;
gdjs.mENUCode.GDNewText4Objects2.length = 0;
gdjs.mENUCode.GDNewText4Objects3.length = 0;
gdjs.mENUCode.GDArmandObjects1.length = 0;
gdjs.mENUCode.GDArmandObjects2.length = 0;
gdjs.mENUCode.GDArmandObjects3.length = 0;
gdjs.mENUCode.GDArmand2Objects1.length = 0;
gdjs.mENUCode.GDArmand2Objects2.length = 0;
gdjs.mENUCode.GDArmand2Objects3.length = 0;
gdjs.mENUCode.GDNewText5Objects1.length = 0;
gdjs.mENUCode.GDNewText5Objects2.length = 0;
gdjs.mENUCode.GDNewText5Objects3.length = 0;
gdjs.mENUCode.GDATMOZObjects1.length = 0;
gdjs.mENUCode.GDATMOZObjects2.length = 0;
gdjs.mENUCode.GDATMOZObjects3.length = 0;

gdjs.mENUCode.eventsList2(runtimeScene);
gdjs.mENUCode.GDNewTextObjects1.length = 0;
gdjs.mENUCode.GDNewTextObjects2.length = 0;
gdjs.mENUCode.GDNewTextObjects3.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects2.length = 0;
gdjs.mENUCode.GDSmallBlueButtonObjects3.length = 0;
gdjs.mENUCode.GDNewText2Objects1.length = 0;
gdjs.mENUCode.GDNewText2Objects2.length = 0;
gdjs.mENUCode.GDNewText2Objects3.length = 0;
gdjs.mENUCode.GDNewText3Objects1.length = 0;
gdjs.mENUCode.GDNewText3Objects2.length = 0;
gdjs.mENUCode.GDNewText3Objects3.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.mENUCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects1.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects2.length = 0;
gdjs.mENUCode.GDTinyBlueButtonObjects3.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects1.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects2.length = 0;
gdjs.mENUCode.GDSmallBlueButton2Objects3.length = 0;
gdjs.mENUCode.GDSplashTextObjects1.length = 0;
gdjs.mENUCode.GDSplashTextObjects2.length = 0;
gdjs.mENUCode.GDSplashTextObjects3.length = 0;
gdjs.mENUCode.GDSmallRedButtonObjects1.length = 0;
gdjs.mENUCode.GDSmallRedButtonObjects2.length = 0;
gdjs.mENUCode.GDSmallRedButtonObjects3.length = 0;
gdjs.mENUCode.GDSettingsObjects1.length = 0;
gdjs.mENUCode.GDSettingsObjects2.length = 0;
gdjs.mENUCode.GDSettingsObjects3.length = 0;
gdjs.mENUCode.GDNewButtonObjects1.length = 0;
gdjs.mENUCode.GDNewButtonObjects2.length = 0;
gdjs.mENUCode.GDNewButtonObjects3.length = 0;
gdjs.mENUCode.GDNewToggleSwitchObjects1.length = 0;
gdjs.mENUCode.GDNewToggleSwitchObjects2.length = 0;
gdjs.mENUCode.GDNewToggleSwitchObjects3.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects1.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects2.length = 0;
gdjs.mENUCode.GDHealthBarBoxObjects3.length = 0;
gdjs.mENUCode.GDHealthBarObjects1.length = 0;
gdjs.mENUCode.GDHealthBarObjects2.length = 0;
gdjs.mENUCode.GDHealthBarObjects3.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595BottomObjects3.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595MiddleObjects3.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects1.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects2.length = 0;
gdjs.mENUCode.GDPortal_9595TopObjects3.length = 0;
gdjs.mENUCode.GDNewSprite2Objects1.length = 0;
gdjs.mENUCode.GDNewSprite2Objects2.length = 0;
gdjs.mENUCode.GDNewSprite2Objects3.length = 0;
gdjs.mENUCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.mENUCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.mENUCode.GDTinyGreyButtonObjects3.length = 0;
gdjs.mENUCode.GDTinyGreyButton2Objects1.length = 0;
gdjs.mENUCode.GDTinyGreyButton2Objects2.length = 0;
gdjs.mENUCode.GDTinyGreyButton2Objects3.length = 0;
gdjs.mENUCode.GDNewText4Objects1.length = 0;
gdjs.mENUCode.GDNewText4Objects2.length = 0;
gdjs.mENUCode.GDNewText4Objects3.length = 0;
gdjs.mENUCode.GDArmandObjects1.length = 0;
gdjs.mENUCode.GDArmandObjects2.length = 0;
gdjs.mENUCode.GDArmandObjects3.length = 0;
gdjs.mENUCode.GDArmand2Objects1.length = 0;
gdjs.mENUCode.GDArmand2Objects2.length = 0;
gdjs.mENUCode.GDArmand2Objects3.length = 0;
gdjs.mENUCode.GDNewText5Objects1.length = 0;
gdjs.mENUCode.GDNewText5Objects2.length = 0;
gdjs.mENUCode.GDNewText5Objects3.length = 0;
gdjs.mENUCode.GDATMOZObjects1.length = 0;
gdjs.mENUCode.GDATMOZObjects2.length = 0;
gdjs.mENUCode.GDATMOZObjects3.length = 0;


return;

}

gdjs['mENUCode'] = gdjs.mENUCode;
