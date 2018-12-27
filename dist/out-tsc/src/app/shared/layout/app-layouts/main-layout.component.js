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
var animations_1 = require("@app/shared/utils/animations");
var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () { };
    MainLayoutComponent.prototype.getState = function (outlet) {
        if (!outlet.activatedRoute)
            return;
        var ss = outlet.activatedRoute.snapshot;
        // return unique string that is used as state identifier in router animation
        return (outlet.activatedRouteData.state ||
            (ss.url.length
                ? ss.url[0].path
                : ss.parent.url.length
                    ? ss.parent.url[0].path
                    : null));
    };
    MainLayoutComponent = __decorate([
        core_1.Component({
            selector: "app-main-layout",
            templateUrl: "./main-layout.component.html",
            styles: [],
            animations: [animations_1.routerTransition]
        }),
        __metadata("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());
exports.MainLayoutComponent = MainLayoutComponent;
//# sourceMappingURL=main-layout.component.js.map