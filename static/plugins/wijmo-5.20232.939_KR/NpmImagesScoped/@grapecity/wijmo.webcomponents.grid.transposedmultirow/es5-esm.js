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

var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}();import{WjComponentBehavior}from"@grapecity/wijmo.webcomponents.base";import*as wjcGridTransposedmultirow from"@grapecity/wijmo.grid.transposedmultirow";var _wj_ns_exists_16=!0,WjcTransposedMultiRow=function(t){__extends(WjcTransposedMultiRow,t);function WjcTransposedMultiRow(){var e=t.call(this,document.createElement("div"))||this;e._wjBehaviour=WjComponentBehavior._attach(e);return e}Object.defineProperty(WjcTransposedMultiRow,"observedAttributes",{get:function(){return WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcTransposedMultiRow.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcTransposedMultiRow.prototype.attributeChangedCallback=function(t,e,o){this._wjBehaviour.lhAttributeChanged(t,e,o)};WjcTransposedMultiRow.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcTransposedMultiRow.prototype.addEventListener=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):t.prototype.addEventListener.apply(this,e)};return WjcTransposedMultiRow}(wjcGridTransposedmultirow.TransposedMultiRow);export{WjcTransposedMultiRow};_wj_ns_exists_16&&WjComponentBehavior.register("wjc-transposed-multi-row",WjcTransposedMultiRow);