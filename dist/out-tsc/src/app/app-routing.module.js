"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_layout_component_1 = require("./shared/layout/app-layouts/main-layout.component");
var auth_layout_component_1 = require("./shared/layout/app-layouts/auth-layout.component");
var routes = [
    {
        path: "",
        component: main_layout_component_1.MainLayoutComponent,
        data: { pageTitle: "Home" },
        children: [
            {
                path: "",
                loadChildren: "app/features/home/home.module#HomeModule",
                data: { pageTitle: "Home Page" }
            },
            {
                path: "home",
                loadChildren: "app/features/home/home.module#HomeModule",
                data: { pageTitle: "Home Page" }
            }
        ]
    },
    {
        path: "auth",
        component: auth_layout_component_1.AuthLayoutComponent,
        loadChildren: "./features/auth/auth.module#AuthModule"
    },
    { path: "**", redirectTo: "miscellaneous/error404" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map