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

"use strict";var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);t.default=e;return t};Object.defineProperty(exports,"__esModule",{value:!0});const wijmo_webcomponents_base_1=require("wijmo/wijmo.webcomponents.base"),wjcGridTransposed=__importStar(require("wijmo/wijmo.grid.transposed"));let _wj_ns_exists_15=!0;class WjcTransposedGrid extends wjcGridTransposed.TransposedGrid{constructor(){super(document.createElement("div"));this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}addEventListener(...e){"string"==typeof e[0]?HTMLElement.prototype.addEventListener.apply(this,e):super.addEventListener.apply(this,e)}}exports.WjcTransposedGrid=WjcTransposedGrid;_wj_ns_exists_15&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-transposed-grid",WjcTransposedGrid);class WjcTransposedGridRow extends HTMLElement{constructor(){super();this._wjBehaviour=wijmo_webcomponents_base_1.WjComponentBehavior._attach(this)}static get observedAttributes(){return wijmo_webcomponents_base_1.WjComponentBehavior.getProps(this)}connectedCallback(){this._wjBehaviour.lhConnected()}attributeChangedCallback(e,t,o){this._wjBehaviour.lhAttributeChanged(e,t,o)}disconnectedCallback(){this._wjBehaviour.lhDisconnected()}_beforeInitParent(){let e=this.parentElement.control;if(e.autoGenerateRows){e.autoGenerateRows=!1;e._rowInfo.clear()}}}WjcTransposedGridRow.wrappedClass=()=>wjcGridTransposed.TransposedGridRow;WjcTransposedGridRow.parentProp="_rowInfo";exports.WjcTransposedGridRow=WjcTransposedGridRow;_wj_ns_exists_15&&wijmo_webcomponents_base_1.WjComponentBehavior.register("wjc-transposed-grid-row",WjcTransposedGridRow);