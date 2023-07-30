gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDTransObjects1= [];
gdjs.MainMenuCode.GDTransObjects2= [];
gdjs.MainMenuCode.GDTransObjects3= [];
gdjs.MainMenuCode.GDTransObjects4= [];
gdjs.MainMenuCode.GDTileTempObjects1= [];
gdjs.MainMenuCode.GDTileTempObjects2= [];
gdjs.MainMenuCode.GDTileTempObjects3= [];
gdjs.MainMenuCode.GDTileTempObjects4= [];
gdjs.MainMenuCode.GDGameoverObjects1= [];
gdjs.MainMenuCode.GDGameoverObjects2= [];
gdjs.MainMenuCode.GDGameoverObjects3= [];
gdjs.MainMenuCode.GDGameoverObjects4= [];
gdjs.MainMenuCode.GDInfoObjects1= [];
gdjs.MainMenuCode.GDInfoObjects2= [];
gdjs.MainMenuCode.GDInfoObjects3= [];
gdjs.MainMenuCode.GDInfoObjects4= [];
gdjs.MainMenuCode.GDSaveObjects1= [];
gdjs.MainMenuCode.GDSaveObjects2= [];
gdjs.MainMenuCode.GDSaveObjects3= [];
gdjs.MainMenuCode.GDSaveObjects4= [];
gdjs.MainMenuCode.GDCreditObjects1= [];
gdjs.MainMenuCode.GDCreditObjects2= [];
gdjs.MainMenuCode.GDCreditObjects3= [];
gdjs.MainMenuCode.GDCreditObjects4= [];
gdjs.MainMenuCode.GDBGThingObjects1= [];
gdjs.MainMenuCode.GDBGThingObjects2= [];
gdjs.MainMenuCode.GDBGThingObjects3= [];
gdjs.MainMenuCode.GDBGThingObjects4= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects3= [];
gdjs.MainMenuCode.GDNewSpriteObjects4= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects3= [];
gdjs.MainMenuCode.GDNewSprite2Objects4= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CHECK")) == 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Day").add(1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Player", "Data", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Main", "Check", 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CHECK")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Player", "Data", runtimeScene, runtimeScene.getScene().getVariables().get("READ"));
}{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("READ")), runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readNumberFromJSONFile("Main", "Check", runtimeScene, runtimeScene.getScene().getVariables().get("CHECK"));
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.MainMenuCode.GDInfoObjects1});
gdjs.MainMenuCode.asyncCallback16112484 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback16112484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16112164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trans"), gdjs.MainMenuCode.GDTransObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTransObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Vertical", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDSaveObjects1Objects = Hashtable.newFrom({"Save": gdjs.MainMenuCode.GDSaveObjects1});
gdjs.MainMenuCode.asyncCallback16114852 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}
gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback16114852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16114116);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trans"), gdjs.MainMenuCode.GDTransObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getGame().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.MainMenuCode.GDTransObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Vertical", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Main", "Check", 0);
}
{ //Subevents
gdjs.MainMenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trans"), gdjs.MainMenuCode.GDTransObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTransObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BGThing"), gdjs.MainMenuCode.GDBGThingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gameover"), gdjs.MainMenuCode.GDGameoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.MainMenuCode.GDInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MainMenuCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TileTemp"), gdjs.MainMenuCode.GDTileTempObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTileTempObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTileTempObjects1[i].setXOffset(gdjs.MainMenuCode.GDTileTempObjects1[i].getXOffset() + (0.1));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDTileTempObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTileTempObjects1[i].setYOffset(gdjs.MainMenuCode.GDTileTempObjects1[i].getYOffset() + (0.5));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDInfoObjects1[i].setString("< Continue >\nDay " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Day")) + "\nScore :\n" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score")));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDGameoverObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGameoverObjects1[i].setScale(1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)) * 0.1);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBGThingObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBGThingObjects1[i].setOpacity(75);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBGThingObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBGThingObjects1[i].setYOffset(gdjs.MainMenuCode.GDBGThingObjects1[i].getYOffset() + (1));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewSprite2Objects1[i].rotate(4, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.MainMenuCode.GDInfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDInfoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDInfoObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDInfoObjects1[i].setAngle(gdjs.evtTools.common.lerp((gdjs.MainMenuCode.GDInfoObjects1[i].getAngle()), Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 4) * 5, 0.1));
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.MainMenuCode.GDSaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDSaveObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSaveObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSaveObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSaveObjects1[i].setAngle(gdjs.evtTools.common.lerp((gdjs.MainMenuCode.GDSaveObjects1[i].getAngle()), Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 4) * 5, 0.1));
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTransObjects1.length = 0;
gdjs.MainMenuCode.GDTransObjects2.length = 0;
gdjs.MainMenuCode.GDTransObjects3.length = 0;
gdjs.MainMenuCode.GDTransObjects4.length = 0;
gdjs.MainMenuCode.GDTileTempObjects1.length = 0;
gdjs.MainMenuCode.GDTileTempObjects2.length = 0;
gdjs.MainMenuCode.GDTileTempObjects3.length = 0;
gdjs.MainMenuCode.GDTileTempObjects4.length = 0;
gdjs.MainMenuCode.GDGameoverObjects1.length = 0;
gdjs.MainMenuCode.GDGameoverObjects2.length = 0;
gdjs.MainMenuCode.GDGameoverObjects3.length = 0;
gdjs.MainMenuCode.GDGameoverObjects4.length = 0;
gdjs.MainMenuCode.GDInfoObjects1.length = 0;
gdjs.MainMenuCode.GDInfoObjects2.length = 0;
gdjs.MainMenuCode.GDInfoObjects3.length = 0;
gdjs.MainMenuCode.GDInfoObjects4.length = 0;
gdjs.MainMenuCode.GDSaveObjects1.length = 0;
gdjs.MainMenuCode.GDSaveObjects2.length = 0;
gdjs.MainMenuCode.GDSaveObjects3.length = 0;
gdjs.MainMenuCode.GDSaveObjects4.length = 0;
gdjs.MainMenuCode.GDCreditObjects1.length = 0;
gdjs.MainMenuCode.GDCreditObjects2.length = 0;
gdjs.MainMenuCode.GDCreditObjects3.length = 0;
gdjs.MainMenuCode.GDCreditObjects4.length = 0;
gdjs.MainMenuCode.GDBGThingObjects1.length = 0;
gdjs.MainMenuCode.GDBGThingObjects2.length = 0;
gdjs.MainMenuCode.GDBGThingObjects3.length = 0;
gdjs.MainMenuCode.GDBGThingObjects4.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects3.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects4.length = 0;

gdjs.MainMenuCode.eventsList6(runtimeScene);

return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
