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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){extendStatics(e,t);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}(),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("@grapecity/wijmo.webcomponents.base"),wjcGridFilter=__importStar(require("@grapecity/wijmo.grid.filter")),_wj_ns_exists_10=!0,WjcFlexGridFilter=function(e){__extends(WjcFlexGridFilter,e);function WjcFlexGridFilter(){var t=e.call(this)||this;t._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(t);return t}Object.defineProperty(WjcFlexGridFilter,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFlexGridFilter.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFlexGridFilter.prototype.attributeChangedCallback=function(e,t,r){this._wjBehaviour.lhAttributeChanged(e,t,r)};WjcFlexGridFilter.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFlexGridFilter.wrappedClass=function(){return wjcGridFilter.FlexGridFilter};WjcFlexGridFilter.parentInCtor=!0;return WjcFlexGridFilter}(HTMLElement);exports.WjcFlexGridFilter=WjcFlexGridFilter;if(_wj_ns_exists_10){wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-flex-grid-filter",WjcFlexGridFilter);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcGridFilter.ColumnFilterEditor);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcGridFilter.ConditionFilterEditor);wijmo_webcomponents_base_1.WjComponentBehavior.register("",wjcGridFilter.ValueFilterEditor)}