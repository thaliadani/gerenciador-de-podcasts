"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/path-data.ts
var path_data_exports = {};
__export(path_data_exports, {
  PathData: () => PathData
});
module.exports = __toCommonJS(path_data_exports);
var PathData = /* @__PURE__ */ ((PathData2) => {
  PathData2["JSON"] = "./podcasts.json";
  PathData2["IMAGES"] = "./images";
  PathData2["AUDIO"] = "./audio";
  PathData2["CONFIG"] = "./config.json";
  return PathData2;
})(PathData || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PathData
});
