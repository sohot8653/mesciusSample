<script setup>
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-slicers";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-tablesheet";
import "@grapecity/spread-sheets-ganttsheet";
import "@grapecity/spread-sheets-formula-panel";
import "@grapecity/spread-sheets-io";
import '@grapecity/spread-sheets-designer-resources-ko';
GC.Spread.Common.CultureManager.culture("ko-kr");
import '@grapecity/spread-sheets-resources-ko';
import "@grapecity/spread-sheets-designer";

</script>
<script>
export default {
  name: "App",
  data: function () {
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
    return {
      styleInfo: { height: "98vh", width: "100%" },
      config: config,
      spreadOptions: {
        sheetCount: 2,
      },
      designer: null,
    };
  },
  methods: {
    designerInitialized(value) {
      this.designer = value;
    },
  },
};
</script>

<template>
  <div id="gc-designer-container">
    <gc-spread-sheets-designer
      :styleInfo="styleInfo"
      :config="config"
      :spreadOptions="spreadOptions"
      @designerInitialized="designerInitialized"/>
  </div>
</template>

<style>
.ribbon-button-welcome {
    background-image: url('./assets/welcome.png');
    background-size: 35px 35px;
}
</style>
