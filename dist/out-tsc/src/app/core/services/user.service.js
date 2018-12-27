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
var json_api_service_1 = require("@app/core/services/json-api.service");
var defaultUser = {
    username: "Guest"
};
var UserService = /** @class */ (function () {
    function UserService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.user$ = new rxjs_1.BehaviorSubject(__assign({}, defaultUser));
        this.jsonApiService.fetch("/user/login-info.json").subscribe(this.user$);
    }
    UserService.prototype.logout = function () {
        this.user$.next(__assign({}, defaultUser));
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map