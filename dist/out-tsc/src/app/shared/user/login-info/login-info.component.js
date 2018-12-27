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
var user_service_1 = require("@app/core/services/user.service");
var layout_service_1 = require("@app/core/services/layout.service");
var LoginInfoComponent = /** @class */ (function () {
    function LoginInfoComponent(us, layoutService) {
        this.us = us;
        this.layoutService = layoutService;
    }
    LoginInfoComponent.prototype.ngOnInit = function () {
    };
    LoginInfoComponent.prototype.toggleShortcut = function () {
        this.layoutService.onShortcutToggle();
    };
    LoginInfoComponent = __decorate([
        core_1.Component({
            selector: 'sa-login-info',
            templateUrl: './login-info.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            layout_service_1.LayoutService])
    ], LoginInfoComponent);
    return LoginInfoComponent;
}());
exports.LoginInfoComponent = LoginInfoComponent;
//# sourceMappingURL=login-info.component.js.map