"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotifyActionTypes;
(function (NotifyActionTypes) {
    NotifyActionTypes["SnackNotify"] = "[Notify] Snack Notify";
    NotifyActionTypes["ShowError"] = "[Error] Show Error";
})(NotifyActionTypes = exports.NotifyActionTypes || (exports.NotifyActionTypes = {}));
var SnackNotify = /** @class */ (function () {
    function SnackNotify(payload) {
        this.payload = payload;
        this.type = NotifyActionTypes.SnackNotify;
        this.silent = true;
    }
    return SnackNotify;
}());
exports.SnackNotify = SnackNotify;
var ShowError = /** @class */ (function () {
    function ShowError(payload) {
        this.payload = payload;
        this.type = NotifyActionTypes.ShowError;
    }
    return ShowError;
}());
exports.ShowError = ShowError;
//# sourceMappingURL=notify.actions.js.map