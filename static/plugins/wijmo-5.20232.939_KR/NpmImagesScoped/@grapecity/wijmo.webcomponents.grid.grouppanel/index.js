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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("@grapecity/wijmo.webcomponents.base"),wjcGridGrouppanel=__importStar(require("@grapecity/wijmo.grid.grouppanel")),_wj_ns_exists_11=!0,WjcGroupPanel=function(e){__extends(WjcGroupPanel,e);function WjcGroupPanel(){var t=e.call(this,document.createElement("div"))||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcGroupPanel,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcGroupPanel.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcGroupPanel.prototype.attributeChangedCallback=function(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)};WjcGroupPanel.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcGroupPanel.prototype.addEventListener=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];"string"==typeof t[0]?HTMLElement.prototype.addEventListener.apply(this,t):e.prototype.addEventListener.apply(this,t)};return WjcGroupPanel}(wjcGridGrouppanel.GroupPanel);exports.WjcGroupPanel=WjcGroupPanel;_wj_ns_exists_11&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-group-panel",WjcGroupPanel);