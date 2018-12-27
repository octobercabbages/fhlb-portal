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
var auth_token_service_1 = require("./auth-token.service");
var store_1 = require("@ngrx/store");
var fromAuth = require("../store/auth");
var operators_1 = require("rxjs/operators");
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(injector, authToken, store) {
        this.injector = injector;
        this.authToken = authToken;
        this.store = store;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (request.url.search('YOUR_API_ENDPOINT') === 0) {
            // attach tcken
            return this.handleApiRequest(request, next);
        }
        else {
            return next.handle(request);
        }
    };
    TokenInterceptor.prototype.handleApiRequest = function (request, next) {
        var _this = this;
        request = this.authToken.token
            ? request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.authToken.token
                }
            })
            : request;
        var handler = next.handle(request).pipe(operators_1.catchError(function (error, caught) {
            if (error.status === 401 || error.status === 403) {
                _this.store.dispatch(new fromAuth.LogoutAction());
                return rxjs_1.throwError(error);
            }
            else {
                return rxjs_1.throwError(error);
            }
        }));
        return handler;
    };
    TokenInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector,
            auth_token_service_1.AuthTokenService,
            store_1.Store])
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;
//# sourceMappingURL=token.interceptor.js.map