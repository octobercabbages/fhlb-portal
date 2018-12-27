"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("@env/environment");
var operators_1 = require("rxjs/operators");
var storage_service_1 = require("./storage.service");
var store_1 = require("@ngrx/store");
var auth_actions_1 = require("../store/auth/auth.actions");
var ROLE_ADMIN = 1;
var USER_TOKEN = 'token';
var USER_LOGGED_ONCE = 'logged_once';
var AuthTokenService = /** @class */ (function () {
    function AuthTokenService(storage, store) {
        var _this = this;
        this.storage = storage;
        this.store = store;
        this.token$ = new rxjs_1.BehaviorSubject(null);
        this.dumpToken = function (token) {
            environment_1.environment.log.auth &&
                console.log("\n\n\n================\ndump auth token", token);
            return !!token
                ? _this.storage.set(USER_TOKEN, token)
                : _this.storage.remove(USER_TOKEN).then(function () { return null; });
        };
        this.updateLoggedOnce = function (token) {
            return _this.storage.get(USER_LOGGED_ONCE).then(function (loggedOnce) {
                if (token || loggedOnce) {
                    _this.store.dispatch(new auth_actions_1.LoggedOnce(true));
                    return loggedOnce
                        ? token
                        : _this.storage.set(USER_LOGGED_ONCE, Date.now()).then(function (_) { return token; });
                }
                else {
                    return Promise.resolve(token);
                }
            });
        };
    }
    AuthTokenService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.store.dispatch(new auth_actions_1.AuthInit());
            _this.storage.get(USER_TOKEN).then(function (token) {
                environment_1.environment.log.auth &&
                    console.log((!!token ? "logged" : "not logged") + " at boot");
                if (!!token) {
                    try {
                        var payload = _this.readPayload(token);
                        _this.store.dispatch(new auth_actions_1.TokenRestore(payload));
                    }
                    catch (error) {
                        token = null;
                    }
                }
                _this.token = token;
                _this.token$
                    .pipe(operators_1.switchMap(_this.dumpToken), operators_1.switchMap(_this.updateLoggedOnce))
                    .subscribe(function () { });
                resolve(token);
            }, function (error) {
                resolve(null);
            });
        });
    };
    Object.defineProperty(AuthTokenService.prototype, "token", {
        get: function () {
            return this.token$.value;
        },
        set: function (value) {
            this.token$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    AuthTokenService.prototype.readPayload = function (token) {
        var payload = this.getTokenPayload(token);
        return payload; // && payload.user ? Object.assign({roles: [], id: null},
        // {id: payload.user.id, roles: JSON.parse(payload.user.roles)}) : null
    };
    AuthTokenService.prototype.getTokenPayload = function (token) {
        return token
            ? JSON.parse(this.b64DecodeUnicode(token.split(".")[1]))
            : null;
    };
    AuthTokenService.prototype.b64DecodeUnicode = function (str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str)
            .split("")
            .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(""));
    };
    AuthTokenService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_service_1.StorageService,
            store_1.Store])
    ], AuthTokenService);
    return AuthTokenService;
}());
exports.AuthTokenService = AuthTokenService;
function AuthTokenFactory(service) {
    return function () { return service.load(); };
}
exports.AuthTokenFactory = AuthTokenFactory;
//# sourceMappingURL=auth-token.service.js.map