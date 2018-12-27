"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
exports.getAuthState = store_1.createFeatureSelector('auth');
exports.getAuthLoading = store_1.createSelector(exports.getAuthState, function (state) { return state.loading; });
exports.getAuthError = store_1.createSelector(exports.getAuthState, function (state) { return state.error; });
exports.getUser = store_1.createSelector(exports.getAuthState, function (state) { return state.user; });
exports.getLoggedIn = store_1.createSelector(exports.getAuthState, function (state) { return !!state.user; });
//# sourceMappingURL=auth.selectors.js.map