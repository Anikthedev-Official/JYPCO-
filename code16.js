gdjs.SkinsSelectCode = {};
gdjs.SkinsSelectCode.localVariables = [];
gdjs.SkinsSelectCode.idToCallbackMap = new Map();
gdjs.SkinsSelectCode.GDNewSpriteObjects1= [];
gdjs.SkinsSelectCode.GDNewSpriteObjects2= [];
gdjs.SkinsSelectCode.GDNewTiledSpriteObjects1= [];
gdjs.SkinsSelectCode.GDNewTiledSpriteObjects2= [];
gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1= [];
gdjs.SkinsSelectCode.GDSmallGreenButtonObjects2= [];
gdjs.SkinsSelectCode.GDNewSprite2Objects1= [];
gdjs.SkinsSelectCode.GDNewSprite2Objects2= [];
gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1= [];
gdjs.SkinsSelectCode.GDSmallGreenButton2Objects2= [];
gdjs.SkinsSelectCode.GDNewTextObjects1= [];
gdjs.SkinsSelectCode.GDNewTextObjects2= [];
gdjs.SkinsSelectCode.GDNewText2Objects1= [];
gdjs.SkinsSelectCode.GDNewText2Objects2= [];
gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1= [];
gdjs.SkinsSelectCode.GDSmallGreenButton3Objects2= [];
gdjs.SkinsSelectCode.GDNewText3Objects1= [];
gdjs.SkinsSelectCode.GDNewText3Objects2= [];
gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1= [];
gdjs.SkinsSelectCode.GDSmallGreenButton4Objects2= [];
gdjs.SkinsSelectCode.GDNewSprite3Objects1= [];
gdjs.SkinsSelectCode.GDNewSprite3Objects2= [];
gdjs.SkinsSelectCode.GDNewText6Objects1= [];
gdjs.SkinsSelectCode.GDNewText6Objects2= [];
gdjs.SkinsSelectCode.GDNewTiledSprite2Objects1= [];
gdjs.SkinsSelectCode.GDNewTiledSprite2Objects2= [];
gdjs.SkinsSelectCode.GDHealthBarBoxObjects1= [];
gdjs.SkinsSelectCode.GDHealthBarBoxObjects2= [];
gdjs.SkinsSelectCode.GDHealthBarObjects1= [];
gdjs.SkinsSelectCode.GDHealthBarObjects2= [];
gdjs.SkinsSelectCode.GDPortal_9595BottomObjects1= [];
gdjs.SkinsSelectCode.GDPortal_9595BottomObjects2= [];
gdjs.SkinsSelectCode.GDPortal_9595MiddleObjects1= [];
gdjs.SkinsSelectCode.GDPortal_9595MiddleObjects2= [];
gdjs.SkinsSelectCode.GDPortal_9595TopObjects1= [];
gdjs.SkinsSelectCode.GDPortal_9595TopObjects2= [];
gdjs.SkinsSelectCode.GDNewSprite2Objects1= [];
gdjs.SkinsSelectCode.GDNewSprite2Objects2= [];
gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1= [];
gdjs.SkinsSelectCode.GDTinyGreyButtonObjects2= [];
gdjs.SkinsSelectCode.GDTinyGreyButton2Objects1= [];
gdjs.SkinsSelectCode.GDTinyGreyButton2Objects2= [];
gdjs.SkinsSelectCode.GDNewText4Objects1= [];
gdjs.SkinsSelectCode.GDNewText4Objects2= [];
gdjs.SkinsSelectCode.GDArmandObjects1= [];
gdjs.SkinsSelectCode.GDArmandObjects2= [];
gdjs.SkinsSelectCode.GDArmand2Objects1= [];
gdjs.SkinsSelectCode.GDArmand2Objects2= [];
gdjs.SkinsSelectCode.GDNewText5Objects1= [];
gdjs.SkinsSelectCode.GDNewText5Objects2= [];
gdjs.SkinsSelectCode.GDATMOZObjects1= [];
gdjs.SkinsSelectCode.GDATMOZObjects2= [];


gdjs.SkinsSelectCode.mapOfGDgdjs_9546SkinsSelectCode_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.SkinsSelectCode.GDNewTiledSprite2Objects1});
gdjs.SkinsSelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1[k] = gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mENU", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton2"), gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1.length;i<l;++i) {
    if ( gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1[k] = gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1[i];
        ++k;
    }
}
gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton2"), gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1[i].SetLabelTextOp("Equipped", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1[i].SetLabelTextOp("Equipped", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.SkinsSelectCode.GDNewText4Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Skin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.SkinsSelectCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDNewText4Objects1[i].getBehavior("Text").setText("Skin : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton3"), gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1.length;i<l;++i) {
    if ( gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1[k] = gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1[i];
        ++k;
    }
}
gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton3"), gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1[i].SetLabelTextOp("Equipped", null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton4"), gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1.length;i<l;++i) {
    if ( gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1[k] = gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1[i];
        ++k;
    }
}
gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.SkinsSelectCode.GDNewText5Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.SkinsSelectCode.GDNewText5Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.SkinsSelectCode.GDNewText5Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.SkinsSelectCode.GDNewText5Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.SkinsSelectCode.GDNewTiledSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SkinsSelectCode.mapOfGDgdjs_9546SkinsSelectCode_9546GDNewTiledSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.SkinsSelectCode.GDNewText5Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TinyGreyButton"), gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1[k] = gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.SkinsSelectCode.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.SkinsSelectCode.GDNewText5Objects1);
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Skin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "Coins", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.storage.readStringFromJSONFile("ThisGame", "SkinAtmozBought", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.SkinsSelectCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDNewText4Objects1[i].getBehavior("Text").setText("Skin : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{for(var i = 0, len = gdjs.SkinsSelectCode.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDNewText5Objects1[i].getBehavior("Text").setText("Coins" + ":" + " " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton4"), gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1[i].SetLabelTextOp("Equip", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton4"), gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1);
{for(var i = 0, len = gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1.length ;i < len;++i) {
    gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1[i].SetLabelTextOp("Equipped", null);
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

gdjs.SkinsSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SkinsSelectCode.GDNewSpriteObjects1.length = 0;
gdjs.SkinsSelectCode.GDNewSpriteObjects2.length = 0;
gdjs.SkinsSelectCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SkinsSelectCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.SkinsSelectCode.GDNewSprite2Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewSprite2Objects2.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton2Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewTextObjects1.length = 0;
gdjs.SkinsSelectCode.GDNewTextObjects2.length = 0;
gdjs.SkinsSelectCode.GDNewText2Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText2Objects2.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton3Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewText3Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText3Objects2.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton4Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewSprite3Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewSprite3Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewText6Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText6Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.SkinsSelectCode.GDHealthBarBoxObjects1.length = 0;
gdjs.SkinsSelectCode.GDHealthBarBoxObjects2.length = 0;
gdjs.SkinsSelectCode.GDHealthBarObjects1.length = 0;
gdjs.SkinsSelectCode.GDHealthBarObjects2.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595TopObjects1.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595TopObjects2.length = 0;
gdjs.SkinsSelectCode.GDNewSprite2Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewSprite2Objects2.length = 0;
gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.SkinsSelectCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.SkinsSelectCode.GDTinyGreyButton2Objects1.length = 0;
gdjs.SkinsSelectCode.GDTinyGreyButton2Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewText4Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText4Objects2.length = 0;
gdjs.SkinsSelectCode.GDArmandObjects1.length = 0;
gdjs.SkinsSelectCode.GDArmandObjects2.length = 0;
gdjs.SkinsSelectCode.GDArmand2Objects1.length = 0;
gdjs.SkinsSelectCode.GDArmand2Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewText5Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText5Objects2.length = 0;
gdjs.SkinsSelectCode.GDATMOZObjects1.length = 0;
gdjs.SkinsSelectCode.GDATMOZObjects2.length = 0;

gdjs.SkinsSelectCode.eventsList0(runtimeScene);
gdjs.SkinsSelectCode.GDNewSpriteObjects1.length = 0;
gdjs.SkinsSelectCode.GDNewSpriteObjects2.length = 0;
gdjs.SkinsSelectCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SkinsSelectCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.SkinsSelectCode.GDNewSprite2Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewSprite2Objects2.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton2Objects1.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton2Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewTextObjects1.length = 0;
gdjs.SkinsSelectCode.GDNewTextObjects2.length = 0;
gdjs.SkinsSelectCode.GDNewText2Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText2Objects2.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton3Objects1.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton3Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewText3Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText3Objects2.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton4Objects1.length = 0;
gdjs.SkinsSelectCode.GDSmallGreenButton4Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewSprite3Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewSprite3Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewText6Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText6Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.SkinsSelectCode.GDHealthBarBoxObjects1.length = 0;
gdjs.SkinsSelectCode.GDHealthBarBoxObjects2.length = 0;
gdjs.SkinsSelectCode.GDHealthBarObjects1.length = 0;
gdjs.SkinsSelectCode.GDHealthBarObjects2.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595BottomObjects1.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595BottomObjects2.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595MiddleObjects1.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595MiddleObjects2.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595TopObjects1.length = 0;
gdjs.SkinsSelectCode.GDPortal_9595TopObjects2.length = 0;
gdjs.SkinsSelectCode.GDNewSprite2Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewSprite2Objects2.length = 0;
gdjs.SkinsSelectCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.SkinsSelectCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.SkinsSelectCode.GDTinyGreyButton2Objects1.length = 0;
gdjs.SkinsSelectCode.GDTinyGreyButton2Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewText4Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText4Objects2.length = 0;
gdjs.SkinsSelectCode.GDArmandObjects1.length = 0;
gdjs.SkinsSelectCode.GDArmandObjects2.length = 0;
gdjs.SkinsSelectCode.GDArmand2Objects1.length = 0;
gdjs.SkinsSelectCode.GDArmand2Objects2.length = 0;
gdjs.SkinsSelectCode.GDNewText5Objects1.length = 0;
gdjs.SkinsSelectCode.GDNewText5Objects2.length = 0;
gdjs.SkinsSelectCode.GDATMOZObjects1.length = 0;
gdjs.SkinsSelectCode.GDATMOZObjects2.length = 0;


return;

}

gdjs['SkinsSelectCode'] = gdjs.SkinsSelectCode;
