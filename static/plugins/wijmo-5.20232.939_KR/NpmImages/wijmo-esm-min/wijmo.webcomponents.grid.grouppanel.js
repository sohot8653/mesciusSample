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

var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();import{WjComponentBehavior}from"wijmo/wijmo.webcomponents.base";import*as wjcGridGrouppanel from"wijmo/wijmo.grid.grouppanel";var _wj_ns_exists_11=!0,WjcGroupPanel=function(e){__extends(WjcGroupPanel,e);function WjcGroupPanel(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcGroupPanel,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcGroupPanel.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcGroupPanel.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcGroupPanel.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcGroupPanel.prototype.addEventListener=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcGroupPanel}(wjcGridGrouppanel.GroupPanel);export{WjcGroupPanel};_wj_ns_exists_11&&WjComponentBehavior.register("wjc-group-panel",WjcGroupPanel);