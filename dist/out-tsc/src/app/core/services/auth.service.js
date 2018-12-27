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
var operators_1 = require("rxjs/operators");
var remote_api_service_1 = require("@app/core/services/remote-api.service");
var AuthService = /** @class */ (function () {
    function AuthService(remoteApiService) {
        this.remoteApiService = remoteApiService;
        this.isLoggedIn = false;
        this.authUrl = "http://localhost:3000/auths";
    }
    AuthService.prototype.login = function (username) {
        var _this = this;
        var id;
        this.remoteApiService.fetch(this.authUrl + "/:" + username).subscribe(function (data) { id = data.id; });
        alert(id);
        return rxjs_1.of(true)
            .pipe(operators_1.delay(1000), operators_1.tap(function (val) { return _this.isLoggedIn = true; }));
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [remote_api_service_1.RemoteApiService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map