"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var app_layouts_component_1 = require("./app-layouts/app-layouts.component");
var router_1 = require("@angular/router");
var prebuilt_skins_component_1 = require("./prebuilt-skins/prebuilt-skins.component");
var SmartadminIntelModule = /** @class */ (function () {
    function SmartadminIntelModule() {
    }
    SmartadminIntelModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: "", redirectTo: "app-layouts", pathMatch: "full" },
                    {
                        path: "app-layouts",
                        component: app_layouts_component_1.AppLayoutsComponent,
                    },
                    {
                        path: "prebuilt-skins",
                        component: prebuilt_skins_component_1.PrebuiltSkinsComponent,
                    }
                ])
            ],
            declarations: [app_layouts_component_1.AppLayoutsComponent, prebuilt_skins_component_1.PrebuiltSkinsComponent]
        })
    ], SmartadminIntelModule);
    return SmartadminIntelModule;
}());
exports.SmartadminIntelModule = SmartadminIntelModule;
//# sourceMappingURL=smartadmin-intel.module.js.map