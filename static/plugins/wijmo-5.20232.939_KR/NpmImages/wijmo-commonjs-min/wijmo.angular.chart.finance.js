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

"use strict";var __extends=this&&this.__extends||function(){var extendStatics=function(r,a){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var n in a)a.hasOwnProperty(n)&&(r[n]=a[n])})(r,a)};return function(r,a){extendStatics(r,a);function __(){this.constructor=r}r.prototype=null===a?Object.create(a):(__.prototype=a.prototype,new __)}}(),__importStar=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var a={};if(null!=r)for(var n in r)Object.hasOwnProperty.call(r,n)&&(a[n]=r[n]);a.default=r;return a};Object.defineProperty(exports,"__esModule",{value:!0});var wijmo_angular_base_1=require("wijmo/wijmo.angular.base"),wijmo_angular_chart_1=require("wijmo/wijmo.angular.chart"),mNg=__importStar(require("angular")),wjcChartFinance=__importStar(require("wijmo/wijmo.chart.finance")),wjNg=mNg,wijmoChartFinanceName="wj.chart.finance";exports.ngModuleName=wijmoChartFinanceName;var wijmoChartFinance=wijmo_angular_base_1._registerNgModule(wijmoChartFinanceName);if(wijmo_angular_base_1.softRefChartFinance()){wijmoChartFinance.directive("wjFinancialChart",[function(){return new WjFinancialChart}]);wijmoChartFinance.directive("wjFinancialChartSeries",[function(){return new WjFinancialChartSeries}])}var WjFinancialChart=function(r){__extends(WjFinancialChart,r);function WjFinancialChart(){return null!==r&&r.apply(this,arguments)||this}Object.defineProperty(WjFinancialChart.prototype,"_controlConstructor",{get:function(){return wjcChartFinance.FinancialChart},enumerable:!0,configurable:!0});return WjFinancialChart}(wijmo_angular_chart_1.WjFlexChartCore);exports.WjFinancialChart=WjFinancialChart;var WjFinancialChartSeries=function(r){__extends(WjFinancialChartSeries,r);function WjFinancialChartSeries(){var a=r.call(this)||this;a.require="^wjFinancialChart";a.template='<div class="wjFinancialChartSeries" ng-transclude />';return a}Object.defineProperty(WjFinancialChartSeries.prototype,"_controlConstructor",{get:function(){return wjcChartFinance.FinancialSeries},enumerable:!0,configurable:!0});return WjFinancialChartSeries}(wijmo_angular_chart_1.WjSeriesBase);exports.WjFinancialChartSeries=WjFinancialChartSeries;