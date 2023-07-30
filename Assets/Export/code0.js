gdjs.TransitionCode = {};
gdjs.TransitionCode.GDTransObjects1= [];
gdjs.TransitionCode.GDTransObjects2= [];
gdjs.TransitionCode.GDTransObjects3= [];
gdjs.TransitionCode.GDTileTempObjects1= [];
gdjs.TransitionCode.GDTileTempObjects2= [];
gdjs.TransitionCode.GDTileTempObjects3= [];
gdjs.TransitionCode.GDGameoverObjects1= [];
gdjs.TransitionCode.GDGameoverObjects2= [];
gdjs.TransitionCode.GDGameoverObjects3= [];
gdjs.TransitionCode.GDInfoObjects1= [];
gdjs.TransitionCode.GDInfoObjects2= [];
gdjs.TransitionCode.GDInfoObjects3= [];
gdjs.TransitionCode.GDToolObjects1= [];
gdjs.TransitionCode.GDToolObjects2= [];
gdjs.TransitionCode.GDToolObjects3= [];
gdjs.TransitionCode.GDSaveObjects1= [];
gdjs.TransitionCode.GDSaveObjects2= [];
gdjs.TransitionCode.GDSaveObjects3= [];
gdjs.TransitionCode.GDCreditObjects1= [];
gdjs.TransitionCode.GDCreditObjects2= [];
gdjs.TransitionCode.GDCreditObjects3= [];
gdjs.TransitionCode.GDBGThingObjects1= [];
gdjs.TransitionCode.GDBGThingObjects2= [];
gdjs.TransitionCode.GDBGThingObjects3= [];
gdjs.TransitionCode.GDTOOLObjects1= [];
gdjs.TransitionCode.GDTOOLObjects2= [];
gdjs.TransitionCode.GDTOOLObjects3= [];


gdjs.TransitionCode.mapOfGDgdjs_9546TransitionCode_9546GDToolObjects1Objects = Hashtable.newFrom({"Tool": gdjs.TransitionCode.GDToolObjects1});
gdjs.TransitionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TransitionCode.GDToolObjects1, gdjs.TransitionCode.GDToolObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < (( gdjs.TransitionCode.GDToolObjects2.length === 0 ) ? 0 :gdjs.TransitionCode.GDToolObjects2[0].getCenterXInScene());
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.TransitionCode.GDTOOLObjects1, gdjs.TransitionCode.GDTOOLObjects2);

{for(var i = 0, len = gdjs.TransitionCode.GDTOOLObjects2.length ;i < len;++i) {
    gdjs.TransitionCode.GDTOOLObjects2[i].setAnimationFrame(gdjs.TransitionCode.GDTOOLObjects2[i].getAnimationFrame() - (1));
}
}}

}


{

/* Reuse gdjs.TransitionCode.GDToolObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > (( gdjs.TransitionCode.GDToolObjects1.length === 0 ) ? 0 :gdjs.TransitionCode.GDToolObjects1[0].getCenterXInScene());
if (isConditionTrue_0) {
/* Reuse gdjs.TransitionCode.GDTOOLObjects1 */
{for(var i = 0, len = gdjs.TransitionCode.GDTOOLObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTOOLObjects1[i].setAnimationFrame(gdjs.TransitionCode.GDTOOLObjects1[i].getAnimationFrame() + (1));
}
}}

}


};gdjs.TransitionCode.mapOfGDgdjs_9546TransitionCode_9546GDTOOLObjects1Objects = Hashtable.newFrom({"TOOL": gdjs.TransitionCode.GDTOOLObjects1});
gdjs.TransitionCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tool"), gdjs.TransitionCode.GDToolObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < (( gdjs.TransitionCode.GDToolObjects2.length === 0 ) ? 0 :gdjs.TransitionCode.GDToolObjects2[0].getCenterXInScene());
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.TransitionCode.GDTOOLObjects1, gdjs.TransitionCode.GDTOOLObjects2);

{for(var i = 0, len = gdjs.TransitionCode.GDTOOLObjects2.length ;i < len;++i) {
    gdjs.TransitionCode.GDTOOLObjects2[i].setAnimationFrame(gdjs.TransitionCode.GDTOOLObjects2[i].getAnimationFrame() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tool"), gdjs.TransitionCode.GDToolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > (( gdjs.TransitionCode.GDToolObjects1.length === 0 ) ? 0 :gdjs.TransitionCode.GDToolObjects1[0].getCenterXInScene());
if (isConditionTrue_0) {
/* Reuse gdjs.TransitionCode.GDTOOLObjects1 */
{for(var i = 0, len = gdjs.TransitionCode.GDTOOLObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTOOLObjects1[i].setAnimationFrame(gdjs.TransitionCode.GDTOOLObjects1[i].getAnimationFrame() + (1));
}
}}

}


};gdjs.TransitionCode.mapOfGDgdjs_9546TransitionCode_9546GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.TransitionCode.GDInfoObjects1});
gdjs.TransitionCode.asyncCallback16097172 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}
gdjs.TransitionCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.TransitionCode.asyncCallback16097172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TransitionCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16096780);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TOOL"), gdjs.TransitionCode.GDTOOLObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trans"), gdjs.TransitionCode.GDTransObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Tools").getChild("Type").setNumber((( gdjs.TransitionCode.GDTOOLObjects1.length === 0 ) ? 0 :gdjs.TransitionCode.GDTOOLObjects1[0].getAnimationFrame()));
}{gdjs.evtTools.storage.writeStringInJSONFile("Player", "Data", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Main", "Check", 1);
}{for(var i = 0, len = gdjs.TransitionCode.GDTransObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTransObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Vertical", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.TransitionCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.TransitionCode.mapOfGDgdjs_9546TransitionCode_9546GDSaveObjects1Objects = Hashtable.newFrom({"Save": gdjs.TransitionCode.GDSaveObjects1});
gdjs.TransitionCode.asyncCallback16099236 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.TransitionCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.TransitionCode.asyncCallback16099236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TransitionCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16098588);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trans"), gdjs.TransitionCode.GDTransObjects1);
{for(var i = 0, len = gdjs.TransitionCode.GDTransObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTransObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Vertical", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.TransitionCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.TransitionCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TOOL"), gdjs.TransitionCode.GDTOOLObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trans"), gdjs.TransitionCode.GDTransObjects1);
{for(var i = 0, len = gdjs.TransitionCode.GDTransObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTransObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TransitionCode.GDTOOLObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTOOLObjects1[i].setOpacity(125);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BGThing"), gdjs.TransitionCode.GDBGThingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gameover"), gdjs.TransitionCode.GDGameoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.TransitionCode.GDInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TileTemp"), gdjs.TransitionCode.GDTileTempObjects1);
{for(var i = 0, len = gdjs.TransitionCode.GDTileTempObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTileTempObjects1[i].setXOffset(gdjs.TransitionCode.GDTileTempObjects1[i].getXOffset() + (0.1));
}
}{for(var i = 0, len = gdjs.TransitionCode.GDTileTempObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTileTempObjects1[i].setYOffset(gdjs.TransitionCode.GDTileTempObjects1[i].getYOffset() + (0.5));
}
}{for(var i = 0, len = gdjs.TransitionCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDInfoObjects1[i].setString("< Continue >\nDay " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Day")) + "\nScore :\n" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score")));
}
}{for(var i = 0, len = gdjs.TransitionCode.GDGameoverObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDGameoverObjects1[i].setScale(1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)) * 0.1);
}
}{for(var i = 0, len = gdjs.TransitionCode.GDBGThingObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDBGThingObjects1[i].setOpacity(75);
}
}{for(var i = 0, len = gdjs.TransitionCode.GDBGThingObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDBGThingObjects1[i].setYOffset(gdjs.TransitionCode.GDBGThingObjects1[i].getYOffset() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tool"), gdjs.TransitionCode.GDToolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TransitionCode.mapOfGDgdjs_9546TransitionCode_9546GDToolObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14920820);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TOOL"), gdjs.TransitionCode.GDTOOLObjects1);
{for(var i = 0, len = gdjs.TransitionCode.GDTOOLObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTOOLObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.TransitionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TOOL"), gdjs.TransitionCode.GDTOOLObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TransitionCode.mapOfGDgdjs_9546TransitionCode_9546GDTOOLObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14936332);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TransitionCode.GDTOOLObjects1 */
{for(var i = 0, len = gdjs.TransitionCode.GDTOOLObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDTOOLObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.TransitionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.TransitionCode.GDInfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TransitionCode.mapOfGDgdjs_9546TransitionCode_9546GDInfoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TransitionCode.GDInfoObjects1 */
{for(var i = 0, len = gdjs.TransitionCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDInfoObjects1[i].setAngle(gdjs.evtTools.common.lerp((gdjs.TransitionCode.GDInfoObjects1[i].getAngle()), Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 4) * 5, 0.1));
}
}
{ //Subevents
gdjs.TransitionCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.TransitionCode.GDSaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TransitionCode.mapOfGDgdjs_9546TransitionCode_9546GDSaveObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TransitionCode.GDSaveObjects1 */
{for(var i = 0, len = gdjs.TransitionCode.GDSaveObjects1.length ;i < len;++i) {
    gdjs.TransitionCode.GDSaveObjects1[i].setAngle(gdjs.evtTools.common.lerp((gdjs.TransitionCode.GDSaveObjects1[i].getAngle()), Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 4) * 5, 0.1));
}
}
{ //Subevents
gdjs.TransitionCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.TransitionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TransitionCode.GDTransObjects1.length = 0;
gdjs.TransitionCode.GDTransObjects2.length = 0;
gdjs.TransitionCode.GDTransObjects3.length = 0;
gdjs.TransitionCode.GDTileTempObjects1.length = 0;
gdjs.TransitionCode.GDTileTempObjects2.length = 0;
gdjs.TransitionCode.GDTileTempObjects3.length = 0;
gdjs.TransitionCode.GDGameoverObjects1.length = 0;
gdjs.TransitionCode.GDGameoverObjects2.length = 0;
gdjs.TransitionCode.GDGameoverObjects3.length = 0;
gdjs.TransitionCode.GDInfoObjects1.length = 0;
gdjs.TransitionCode.GDInfoObjects2.length = 0;
gdjs.TransitionCode.GDInfoObjects3.length = 0;
gdjs.TransitionCode.GDToolObjects1.length = 0;
gdjs.TransitionCode.GDToolObjects2.length = 0;
gdjs.TransitionCode.GDToolObjects3.length = 0;
gdjs.TransitionCode.GDSaveObjects1.length = 0;
gdjs.TransitionCode.GDSaveObjects2.length = 0;
gdjs.TransitionCode.GDSaveObjects3.length = 0;
gdjs.TransitionCode.GDCreditObjects1.length = 0;
gdjs.TransitionCode.GDCreditObjects2.length = 0;
gdjs.TransitionCode.GDCreditObjects3.length = 0;
gdjs.TransitionCode.GDBGThingObjects1.length = 0;
gdjs.TransitionCode.GDBGThingObjects2.length = 0;
gdjs.TransitionCode.GDBGThingObjects3.length = 0;
gdjs.TransitionCode.GDTOOLObjects1.length = 0;
gdjs.TransitionCode.GDTOOLObjects2.length = 0;
gdjs.TransitionCode.GDTOOLObjects3.length = 0;

gdjs.TransitionCode.eventsList6(runtimeScene);

return;

}

gdjs['TransitionCode'] = gdjs.TransitionCode;
