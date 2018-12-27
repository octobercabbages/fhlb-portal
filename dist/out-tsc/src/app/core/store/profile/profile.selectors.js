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
var store_1 = require("@ngrx/store");
var fromAuth = require("../auth/auth.selectors");
exports.getProfileState = store_1.createFeatureSelector("profile");
exports.getProfileModel = store_1.createSelector(exports.getProfileState, function (state) { return state.model; });
exports.getProfileLoading = store_1.createSelector(exports.getProfileState, function (state) { return state.loading; });
exports.getProfileError = store_1.createSelector(exports.getProfileState, function (state) { return state.error; });
exports.getProfileVM = store_1.createSelector(exports.getProfileState, fromAuth.getAuthState, function (state, auth) {
    return __assign({}, state, { auth: auth });
});
//# sourceMappingURL=profile.selectors.js.map