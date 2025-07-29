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

// src/utils/query-string.ts
var query_string_exports = {};
__export(query_string_exports, {
  QueryString: () => QueryString
});
module.exports = __toCommonJS(query_string_exports);
var QueryString = /* @__PURE__ */ ((QueryString2) => {
  QueryString2["SERVER"] = "?";
  QueryString2["PODCASTNAME"] = "?p=";
  QueryString2["EPISODE"] = "?e=";
  QueryString2["PAGE"] = "?page=";
  QueryString2["SEARCH"] = "?q=";
  QueryString2["CATEGORY"] = "?cat=";
  QueryString2["SORT"] = "?sort=";
  QueryString2["LIMIT"] = "?limit=";
  QueryString2["OFFSET"] = "?offset=";
  return QueryString2;
})(QueryString || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QueryString
});
