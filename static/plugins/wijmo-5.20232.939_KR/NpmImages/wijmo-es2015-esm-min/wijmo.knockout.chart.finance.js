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

import{WjBinding,WjContext,MetaFactory}from"wijmo/wijmo.knockout.base";import{WjFlexChartBaseBinding}from"wijmo/wijmo.knockout.chart";import*as mKo from"knockout";import*as wjcChartFin from"wijmo/wijmo.chart.finance";var wjKo=mKo;export class wjFinancialChart extends WjFlexChartBaseBinding{_getControlConstructor(){return wjcChartFin.FinancialChart}_initialize(){super._initialize();MetaFactory.findProp("labelContent",this._metaData.props).updateControl=function(n,t,i,a,r){null!=r&&(i.dataLabel.content=r);return!0}}}export class wjFinancialChartSeries extends WjBinding{_getControlConstructor(){return wjcChartFin.FinancialSeries}_createWijmoContext(){return new WjFinancialChartSeriesContext(this)}}export class WjFinancialChartSeriesContext extends WjContext{_initControl(){super._initControl();var n=this.parentWjContext.control;n instanceof wjcChartFin.FinancialChart&&n.seriesVisibilityChanged.addHandler((n,t)=>{this._updateSource()})}}wjKo.bindingHandlers.wjFinancialChart=new wjFinancialChart;wjKo.bindingHandlers.wjFinancialChartSeries=new wjFinancialChartSeries;