import React from 'react';
import * as GC from '@grapecity/spread-sheets';
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-slicers";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-tablesheet";
import "@grapecity/spread-sheets-ganttsheet";
import "@grapecity/spread-sheets-formula-panel";
import "@grapecity/spread-sheets-io";
import '@grapecity/spread-sheets-resources-ko';
import '@grapecity/spread-sheets-designer-resources-ko';
import {Designer} from '@grapecity/spread-sheets-designer-react';
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css"
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css"
import "./custom.css"

import * as ExcelIO from "@grapecity/spread-excelio";

//Apply License
var sjsLicense = "sjs-distribution-key";
// GC.Spread.Sheets.LicenseKey = sjsLicense;
// ExcelIO.LicenseKey = sjsLicense;
 
// GC.Spread.Sheets.Designer.LicenseKey = "designer-component-distribution-key";

GC.Spread.Common.CultureManager.culture('ko-kr');

function App() {
  var config = GC.Spread.Sheets.Designer.DefaultConfig;
  config.commandMap = {
    Welcome: {
      title: "Welcome",
      text: "Welcome",
      iconClass: "ribbon-button-welcome",
      bigButton: "true",
      commandName: "Welcome",
      execute: async (context, propertyName, fontItalicChecked) => {
        alert("Welcome to new designer.");
      },
    },
  };
  config.ribbon[0].buttonGroups.unshift({
    label: "NewDesigner",
    thumbnailClass: "welcome",
    commandGroup: {
      children: [
        {
          direction: "vertical",
          commands: ["Welcome"],
        },
        // This is custom button ----------------end-------------
      ],
    },
  });
  return (
    <Designer styleInfo = {{width: "100%", height: '98vh'}} config = {config}   spreadOptions = {{sheetCount: 2}}></Designer>
  );
}

export default App;
