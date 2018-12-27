"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var notify_actions_1 = require("./notify.actions");
exports.initialNotifyState = {
    error: {
        code: null,
        message: null
    }
};
function notifyReducer(state, action) {
    if (state === void 0) { state = exports.initialNotifyState; }
    switch (action.type) {
        case notify_actions_1.NotifyActionTypes.ShowError:
            return __assign({}, state, { error: {
                    code: action.payload.code,
                    message: action.payload.message
                } });
        default:
            return state;
    }
}
exports.notifyReducer = notifyReducer;
//# sourceMappingURL=notify.reducer.js.map