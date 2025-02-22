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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o])})(r,e)};return function(r,e){extendStatics(r,e);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}}(),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var o in r)Object.hasOwnProperty.call(r,o)&&(e[o]=r[o]);e.default=r;return e};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcGridTransposed=__importStar(require("wijmo/wijmo.grid.transposed")),TransposedGrid=function(r){__extends(TransposedGrid,r);function TransposedGrid(e){return r.call(this,e,wjcGridTransposed.TransposedGrid,{objectProps:["childItemsPath","mergeManager","itemsSource","virtualizationThreshold","columnGroups","rowGroups"]})||this}return TransposedGrid}(wijmo_react_base_1.ComponentBase);exports.TransposedGrid=TransposedGrid;var TransposedGridRow=function(r){__extends(TransposedGridRow,r);function TransposedGridRow(e){var o=r.call(this,e,wjcGridTransposed.TransposedGridRow,{objectProps:["dataMap","cellTemplate","editor"]})||this;o._parentProp="_rowInfo";return o}TransposedGridRow.prototype._initParent=function(){var e=this.parent.control;if(e.autoGenerateRows){e.autoGenerateRows=!1;e._rowInfo.clear()}r.prototype._initParent.call(this)};return TransposedGridRow}(wijmo_react_base_1.ComponentBase);exports.TransposedGridRow=TransposedGridRow;