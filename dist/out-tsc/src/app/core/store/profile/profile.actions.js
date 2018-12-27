"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileActionTypes;
(function (ProfileActionTypes) {
    ProfileActionTypes["ProfileUpdate"] = "[Profile] Update Action";
    ProfileActionTypes["ProfileUpdateSuccess"] = "[Profile API] Update Action Success";
    ProfileActionTypes["ProfileUpdateFailure"] = "[Profile API] Update Action Failure";
    ProfileActionTypes["ProfileRestore"] = "[Profile] Restore Action";
})(ProfileActionTypes = exports.ProfileActionTypes || (exports.ProfileActionTypes = {}));
var ProfileUpdate = /** @class */ (function () {
    function ProfileUpdate(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.ProfileUpdate;
    }
    return ProfileUpdate;
}());
exports.ProfileUpdate = ProfileUpdate;
var ProfileUpdateSuccess = /** @class */ (function () {
    function ProfileUpdateSuccess(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.ProfileUpdateSuccess;
    }
    return ProfileUpdateSuccess;
}());
exports.ProfileUpdateSuccess = ProfileUpdateSuccess;
var ProfileUpdateFailure = /** @class */ (function () {
    function ProfileUpdateFailure(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.ProfileUpdateFailure;
    }
    return ProfileUpdateFailure;
}());
exports.ProfileUpdateFailure = ProfileUpdateFailure;
var ProfileRestore = /** @class */ (function () {
    function ProfileRestore(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.ProfileRestore;
    }
    return ProfileRestore;
}());
exports.ProfileRestore = ProfileRestore;
//# sourceMappingURL=profile.actions.js.map