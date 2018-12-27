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
var auth_actions_1 = require("./auth.actions");
exports.authInitialState = {
    loading: false,
    error: null,
    user: null,
    logged: false,
    loggedOnce: false
};
function authReducer(state, action) {
    if (state === void 0) { state = exports.authInitialState; }
    switch (action.type) {
        case auth_actions_1.AuthActionTypes.LoginAction:
        case auth_actions_1.AuthActionTypes.SignupAction:
            return __assign({}, state, { loading: true });
        case auth_actions_1.AuthActionTypes.LogoutAction:
        case auth_actions_1.AuthActionTypes.NullToken:
            return __assign({}, state, { loading: false, error: null, user: null, logged: false });
        case auth_actions_1.AuthActionTypes.LoggedOnce:
            return __assign({}, state, { loggedOnce: action.payload });
        case auth_actions_1.AuthActionTypes.AuthTokenPayload:
        case auth_actions_1.AuthActionTypes.TokenRestore:
            return __assign({}, state, { error: null, loading: false, user: action.payload, logged: true });
        case auth_actions_1.AuthActionTypes.AuthFailure:
            return __assign({}, state, { error: action.payload, loading: false, user: null, logged: false });
        default:
            return state;
    }
}
exports.authReducer = authReducer;
//# sourceMappingURL=auth.reducer.js.map