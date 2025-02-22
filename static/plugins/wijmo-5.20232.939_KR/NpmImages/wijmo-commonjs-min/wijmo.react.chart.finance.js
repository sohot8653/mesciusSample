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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){extendStatics(t,n);function __(){this.constructor=t}t.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}}(),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);n.default=t;return n};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_react_base_1=require("wijmo/wijmo.react.base"),wjcChartFinance=__importStar(require("wijmo/wijmo.chart.finance")),FinancialChart=function(t){__extends(FinancialChart,t);function FinancialChart(n){return t.call(this,n,wjcChartFinance.FinancialChart,{objectProps:["palette","plotMargin","footerStyle","headerStyle","itemsSource","options","selection","renderEngine"]})||this}FinancialChart.prototype.componentDidMount=function(){var n=t.prototype.componentDidMount.call(this);this._setExtra(this.props);return n};FinancialChart.prototype.componentDidUpdate=function(n){t.prototype.componentDidUpdate.call(this,n);this._setExtra(this.props)};FinancialChart.prototype._setExtra=function(t){"tooltipContent"in t&&(this.control.tooltip.content=t.tooltipContent);"labelContent"in t&&(this.control.dataLabel.content=t.labelContent)};return FinancialChart}(wijmo_react_base_1.ComponentBase);exports.FinancialChart=FinancialChart;var FinancialChartSeries=function(t){__extends(FinancialChartSeries,t);function FinancialChartSeries(n){var e=t.call(this,n,wjcChartFinance.FinancialSeries,{objectProps:["axisX","axisY","style","altStyle","symbolStyle","itemsSource","tooltipContent"]})||this;e._parentProp="series";e._siblingId="series";return e}return FinancialChartSeries}(wijmo_react_base_1.ComponentBase);exports.FinancialChartSeries=FinancialChartSeries;