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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){extendStatics(t,e);function __(){this.constructor=t}t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcChartAnimation=__importStar(require("wijmo/wijmo.chart.animation")),_wj_ns_exists_2=!0,WjcFlexChartAnimation=function(t){__extends(WjcFlexChartAnimation,t);function WjcFlexChartAnimation(){var e=t.call(this)||this;e._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(e);return e}Object.defineProperty(WjcFlexChartAnimation,"observedAttributes",{get:function(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)},enumerable:!0,configurable:!0});WjcFlexChartAnimation.prototype.connectedCallback=function(){this._wjBehaviour.lhConnected()};WjcFlexChartAnimation.prototype.attributeChangedCallback=function(t,e,n){this._wjBehaviour.lhAttributeChanged(t,e,n)};WjcFlexChartAnimation.prototype.disconnectedCallback=function(){this._wjBehaviour.lhDisconnected()};WjcFlexChartAnimation.wrappedClass=function(){return wjcChartAnimation.ChartAnimation};WjcFlexChartAnimation.parentInCtor=!0;return WjcFlexChartAnimation}(HTMLElement);exports.WjcFlexChartAnimation=WjcFlexChartAnimation;_wj_ns_exists_2&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-flex-chart-animation",WjcFlexChartAnimation);