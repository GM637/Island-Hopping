gdjs.GameOverCode = {};
gdjs.GameOverCode.GDTransObjects1= [];
gdjs.GameOverCode.GDTransObjects2= [];
gdjs.GameOverCode.GDTileTempObjects1= [];
gdjs.GameOverCode.GDTileTempObjects2= [];
gdjs.GameOverCode.GDGameoverObjects1= [];
gdjs.GameOverCode.GDGameoverObjects2= [];
gdjs.GameOverCode.GDInfoObjects1= [];
gdjs.GameOverCode.GDInfoObjects2= [];
gdjs.GameOverCode.GDSaveObjects1= [];
gdjs.GameOverCode.GDSaveObjects2= [];
gdjs.GameOverCode.GDCreditObjects1= [];
gdjs.GameOverCode.GDCreditObjects2= [];
gdjs.GameOverCode.GDBGThingObjects1= [];
gdjs.GameOverCode.GDBGThingObjects2= [];


gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDInfoObjects1Objects = Hashtable.newFrom({"Info": gdjs.GameOverCode.GDInfoObjects1});
gdjs.GameOverCode.asyncCallback16406060 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameOverCode.asyncCallback16406060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16405740);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trans"), gdjs.GameOverCode.GDTransObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDTransObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTransObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Vertical", "Both", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trans"), gdjs.GameOverCode.GDTransObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDTransObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTransObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BGThing"), gdjs.GameOverCode.GDBGThingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gameover"), gdjs.GameOverCode.GDGameoverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.GameOverCode.GDInfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TileTemp"), gdjs.GameOverCode.GDTileTempObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDTileTempObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTileTempObjects1[i].setXOffset(gdjs.GameOverCode.GDTileTempObjects1[i].getXOffset() + (0.1));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDTileTempObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTileTempObjects1[i].setYOffset(gdjs.GameOverCode.GDTileTempObjects1[i].getYOffset() + (0.5));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].setString("- You died! -\n\n< Try Again! >\n\nScore :\n" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score")));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDGameoverObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDGameoverObjects1[i].setScale(1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)) * 0.1);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDBGThingObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDBGThingObjects1[i].setOpacity(75);
}
}{for(var i = 0, len = gdjs.GameOverCode.GDBGThingObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDBGThingObjects1[i].setYOffset(gdjs.GameOverCode.GDBGThingObjects1[i].getYOffset() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Info"), gdjs.GameOverCode.GDInfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDInfoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDInfoObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDInfoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDInfoObjects1[i].setAngle(gdjs.evtTools.common.lerp((gdjs.GameOverCode.GDInfoObjects1[i].getAngle()), Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 4) * 5, 0.1));
}
}
{ //Subevents
gdjs.GameOverCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDTransObjects1.length = 0;
gdjs.GameOverCode.GDTransObjects2.length = 0;
gdjs.GameOverCode.GDTileTempObjects1.length = 0;
gdjs.GameOverCode.GDTileTempObjects2.length = 0;
gdjs.GameOverCode.GDGameoverObjects1.length = 0;
gdjs.GameOverCode.GDGameoverObjects2.length = 0;
gdjs.GameOverCode.GDInfoObjects1.length = 0;
gdjs.GameOverCode.GDInfoObjects2.length = 0;
gdjs.GameOverCode.GDSaveObjects1.length = 0;
gdjs.GameOverCode.GDSaveObjects2.length = 0;
gdjs.GameOverCode.GDCreditObjects1.length = 0;
gdjs.GameOverCode.GDCreditObjects2.length = 0;
gdjs.GameOverCode.GDBGThingObjects1.length = 0;
gdjs.GameOverCode.GDBGThingObjects2.length = 0;

gdjs.GameOverCode.eventsList2(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
