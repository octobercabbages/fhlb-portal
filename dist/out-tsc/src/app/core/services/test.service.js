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
var remote_api_service_1 = require("../../core/services/remote-api.service");
var rxjs_1 = require("rxjs");
var TestService = /** @class */ (function () {
    function TestService(remoteApiService) {
        this.remoteApiService = remoteApiService;
        this.url = 'https://jsonplaceholder.typicode.com/users';
        this.messageToSubject = new rxjs_1.Subject();
    }
    TestService.prototype.getUsers = function () {
        return this.remoteApiService.fetch(this.url);
    };
    TestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [remote_api_service_1.RemoteApiService])
    ], TestService);
    return TestService;
}());
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map