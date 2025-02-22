﻿/*!
    *
    * Wijmo Library 5.20232.939
    * https://developer.mescius.com/wijmo
    *
    * Copyright(c) MESCIUS inc. All rights reserved.
    *
    * Licensed under the End-User License Agreement For MESCIUS Wijmo Software.
    * us.sales@mescius.com
    * https://developer.mescius.com/wijmo/licensing
    *
    */

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,o){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)};return function(t,o){extendStatics(t,o);function __(){this.constructor=t}t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var o={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(o[e]=t[e]);o.default=t;return o};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_knockout_base_1=require("wijmo/wijmo.knockout.base"),wijmo_1=require("wijmo/wijmo"),mKo=__importStar(require("knockout")),wjKo=mKo,wjTooltip=function(t){__extends(wjTooltip,t);function wjTooltip(){return null!==t&&t.apply(this,arguments)||this}wjTooltip.prototype._getControlConstructor=function(){return wijmo_1.Tooltip};wjTooltip.prototype._createControl=function(o){return t.prototype._createControl.call(this,null)};wjTooltip.prototype._createWijmoContext=function(){return new WjTooltipContext(this)};return wjTooltip}(wijmo_knockout_base_1.WjBinding);exports.wjTooltip=wjTooltip;var WjTooltipContext=function(t){__extends(WjTooltipContext,t);function WjTooltipContext(){return null!==t&&t.apply(this,arguments)||this}WjTooltipContext.prototype.update=function(o,e,n,i,r){t.prototype.update.call(this,o,e,n,i,r);this._updateTooltip()};WjTooltipContext.prototype._updateTooltip=function(){this.control.setTooltip(this.element,wjKo.unwrap(this.valueAccessor()))};return WjTooltipContext}(wijmo_knockout_base_1.WjContext);exports.WjTooltipContext=WjTooltipContext;wjKo.bindingHandlers.wjTooltip=new wjTooltip;