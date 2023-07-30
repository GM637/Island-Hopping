
gdjs.evtsExt__UpscaledText__TextUpscaler = gdjs.evtsExt__UpscaledText__TextUpscaler || {};

/**
 * Behavior generated from Text Upscaler
 */
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler = class TextUpscaler extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Scale = behaviorData.Scale !== undefined ? behaviorData.Scale : Number("1") || 0;
    this._behaviorData.tx = Number("") || 0;
    this._behaviorData.ty = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Scale !== newBehaviorData.Scale)
      this._behaviorData.Scale = newBehaviorData.Scale;
    if (oldBehaviorData.tx !== newBehaviorData.tx)
      this._behaviorData.tx = newBehaviorData.tx;
    if (oldBehaviorData.ty !== newBehaviorData.ty)
      this._behaviorData.ty = newBehaviorData.ty;

    return true;
  }

  // Properties:
  
  _getScale() {
    return this._behaviorData.Scale !== undefined ? this._behaviorData.Scale : Number("1") || 0;
  }
  _setScale(newValue) {
    this._behaviorData.Scale = newValue;
  }
  _gettx() {
    return this._behaviorData.tx !== undefined ? this._behaviorData.tx : Number("") || 0;
  }
  _settx(newValue) {
    this._behaviorData.tx = newValue;
  }
  _getty() {
    return this._behaviorData.ty !== undefined ? this._behaviorData.ty : Number("") || 0;
  }
  _setty(newValue) {
    this._behaviorData.ty = newValue;
  }
}

/**
 * Shared data generated from Text Upscaler
 */
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.SharedData = class TextUpscalerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._UpscaledText_TextUpscalerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._UpscaledText_TextUpscalerSharedData = new gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.SharedData(
      initialData
    );
  }
  return instanceContainer._UpscaledText_TextUpscalerSharedData;
}

// Methods:
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext = {};
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._settx((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setty((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].setCharacterSize(gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getCharacterSize() * ((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScale())));
}
}{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].setScale(gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getScale() / ((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScale())));
}
}{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].setCenterPositionInScene((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettx()),(gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getty()));
}
}}

}


};

gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._settx((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setty((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].setCharacterSize(gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getCharacterSize() * ((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScale())));
}
}{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].setScale(gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getScale() / ((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScale())));
}
}{for(var i = 0, len = gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].setCenterPositionInScene((gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettx()),(gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getty()));
}
}}

}


};

gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("UpscaledText::TextUpscaler", gdjs.evtsExt__UpscaledText__TextUpscaler.TextUpscaler);
