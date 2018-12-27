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
var profile_actions_1 = require("./profile.actions");
var fromAuth = require("../auth");
var profile_model_1 = require("./profile.model");
exports.initialProfileState = {
    loading: true,
    model: __assign({}, profile_model_1.DefaultProfile),
    error: null
};
function profileReducer(state, action) {
    if (state === void 0) { state = exports.initialProfileState; }
    switch (action.type) {
        case fromAuth.AuthActionTypes.AuthTokenPayload:
            return __assign({}, state, { model: profile_model_1.createProfile(action.payload) });
        case profile_actions_1.ProfileActionTypes.ProfileRestore:
            return __assign({}, state, { loading: false, model: __assign({}, action.payload) });
        case profile_actions_1.ProfileActionTypes.ProfileUpdate:
            return __assign({}, state, { loading: true, model: __assign({}, action.payload) });
        case profile_actions_1.ProfileActionTypes.ProfileUpdateSuccess:
            return __assign({}, state, { loading: false, error: null });
        case profile_actions_1.ProfileActionTypes.ProfileUpdateFailure:
            return __assign({}, state, { loading: false, error: action.payload });
        default:
            return state;
    }
}
exports.profileReducer = profileReducer;
//# sourceMappingURL=profile.reducer.js.map