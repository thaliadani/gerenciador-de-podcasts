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

// src/utils/status-code.ts
var status_code_exports = {};
__export(status_code_exports, {
  StatusCode: () => StatusCode
});
module.exports = __toCommonJS(status_code_exports);
var StatusCode = /* @__PURE__ */ ((StatusCode2) => {
  StatusCode2[StatusCode2["OK"] = 200] = "OK";
  StatusCode2[StatusCode2["CREATED"] = 201] = "CREATED";
  StatusCode2[StatusCode2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  StatusCode2[StatusCode2["NOT_FOUND"] = 404] = "NOT_FOUND";
  StatusCode2[StatusCode2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  StatusCode2[StatusCode2["FORBIDDEN"] = 403] = "FORBIDDEN";
  StatusCode2[StatusCode2["CONFLICT"] = 409] = "CONFLICT";
  StatusCode2[StatusCode2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  StatusCode2[StatusCode2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  StatusCode2[StatusCode2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  StatusCode2[StatusCode2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  StatusCode2[StatusCode2["NO_CONTENT"] = 204] = "NO_CONTENT";
  StatusCode2[StatusCode2["ACCEPTED"] = 202] = "ACCEPTED";
  StatusCode2[StatusCode2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
  StatusCode2[StatusCode2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  return StatusCode2;
})(StatusCode || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StatusCode
});
