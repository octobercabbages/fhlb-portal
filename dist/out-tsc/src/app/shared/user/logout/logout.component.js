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
var router_1 = require("@angular/router");
var notification_service_1 = require("@app/core/services/notification.service");
var user_service_1 = require("@app/core/services/user.service");
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(userService, router, notificationService) {
        this.userService = userService;
        this.router = router;
        this.notificationService = notificationService;
    }
    LogoutComponent.prototype.showPopup = function () {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + this.userService.user$.value.username + "</strong></span> ?",
            content: "You can improve your security further after logging out by closing this opened browser",
            buttons: "[No][Yes]"
        }, function (ButtonPressed) {
            if (ButtonPressed == "Yes") {
                _this.logout();
            }
        });
    };
    LogoutComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(["/auth/login"]);
    };
    LogoutComponent.prototype.ngOnInit = function () { };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: "sa-logout",
            template: "\n<div id=\"logout\" (click)=\"showPopup()\" class=\"btn-header transparent pull-right\">\n        <span> <a title=\"Sign Out\"><i class=\"fa fa-sign-out\"></i></a> </span>\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            notification_service_1.NotificationService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map