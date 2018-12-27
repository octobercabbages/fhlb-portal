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
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["AppInit"] = "[App] Init";
    AuthActionTypes["AuthInit"] = "[Auth] Init";
    AuthActionTypes["LoggedOnce"] = "[Auth] Logged Once";
    AuthActionTypes["LoginAction"] = "[Auth] Login Action";
    AuthActionTypes["LogoutAction"] = "[Auth] Logout Action";
    AuthActionTypes["LoginRedirect"] = "[Auth] Login Redirect Action";
    AuthActionTypes["SignupAction"] = "[Auth] Signup Action";
    AuthActionTypes["GoogleSign"] = "[Auth] Google Sign Action";
    AuthActionTypes["AuthFailure"] = "[Auth] Failure Action";
    AuthActionTypes["AuthUserChange"] = "[Auth] User Change";
    AuthActionTypes["AuthTokenPayload"] = "[Auth] Token Payload";
    AuthActionTypes["NullToken"] = "[Auth] Null Token";
    AuthActionTypes["TokenRestore"] = "[Auth] Token Restore";
    AuthActionTypes["TokenRefresh"] = "[Auth] Token Refresh";
    AuthActionTypes["TokenRefreshSuccess"] = "[Auth] Token Refresh Success";
})(AuthActionTypes = exports.AuthActionTypes || (exports.AuthActionTypes = {}));
var AppInit = /** @class */ (function () {
    function AppInit() {
        this.type = AuthActionTypes.AppInit;
    }
    return AppInit;
}());
exports.AppInit = AppInit;
var AuthInit = /** @class */ (function () {
    function AuthInit() {
        this.type = AuthActionTypes.AuthInit;
    }
    return AuthInit;
}());
exports.AuthInit = AuthInit;
var LoggedOnce = /** @class */ (function () {
    function LoggedOnce(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoggedOnce;
    }
    return LoggedOnce;
}());
exports.LoggedOnce = LoggedOnce;
var LoginAction = /** @class */ (function () {
    function LoginAction(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginAction;
    }
    return LoginAction;
}());
exports.LoginAction = LoginAction;
var LogoutAction = /** @class */ (function () {
    function LogoutAction() {
        this.type = AuthActionTypes.LogoutAction;
    }
    return LogoutAction;
}());
exports.LogoutAction = LogoutAction;
var LoginRedirect = /** @class */ (function () {
    function LoginRedirect(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginRedirect;
    }
    return LoginRedirect;
}());
exports.LoginRedirect = LoginRedirect;
var SignupAction = /** @class */ (function () {
    function SignupAction(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SignupAction;
    }
    return SignupAction;
}());
exports.SignupAction = SignupAction;
var GoogleSign = /** @class */ (function () {
    function GoogleSign() {
        this.type = AuthActionTypes.GoogleSign;
    }
    return GoogleSign;
}());
exports.GoogleSign = GoogleSign;
var AuthFailure = /** @class */ (function () {
    function AuthFailure(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AuthFailure;
    }
    return AuthFailure;
}());
exports.AuthFailure = AuthFailure;
var AuthUserChange = /** @class */ (function () {
    function AuthUserChange(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AuthUserChange;
    }
    return AuthUserChange;
}());
exports.AuthUserChange = AuthUserChange;
var AuthTokenPayload = /** @class */ (function () {
    function AuthTokenPayload(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AuthTokenPayload;
        this.payload = __assign({ uid: payload.user_id }, payload);
    }
    return AuthTokenPayload;
}());
exports.AuthTokenPayload = AuthTokenPayload;
var NullToken = /** @class */ (function () {
    function NullToken() {
        this.type = AuthActionTypes.NullToken;
    }
    return NullToken;
}());
exports.NullToken = NullToken;
var TokenRestore = /** @class */ (function () {
    function TokenRestore(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.TokenRestore;
        this.payload = __assign({ uid: payload.user_id }, payload);
    }
    return TokenRestore;
}());
exports.TokenRestore = TokenRestore;
var TokenRefresh = /** @class */ (function () {
    function TokenRefresh() {
        this.type = AuthActionTypes.TokenRefresh;
    }
    return TokenRefresh;
}());
exports.TokenRefresh = TokenRefresh;
var TokenRefreshSuccess = /** @class */ (function () {
    function TokenRefreshSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.TokenRefreshSuccess;
    }
    return TokenRefreshSuccess;
}());
exports.TokenRefreshSuccess = TokenRefreshSuccess;
//# sourceMappingURL=auth.actions.js.map