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
var forms_1 = require("@angular/forms");
var header_module_1 = require("./header/header.module");
var footer_component_1 = require("./footer/footer.component");
var navigation_module_1 = require("./navigation/navigation.module");
var ribbon_component_1 = require("./ribbon/ribbon.component");
var shortcut_component_1 = require("./shortcut/shortcut.component");
var layout_switcher_component_1 = require("./layout-switcher.component");
var main_layout_component_1 = require("./app-layouts/main-layout.component");
var empty_layout_component_1 = require("./app-layouts/empty-layout.component");
var router_1 = require("@angular/router");
var auth_layout_component_1 = require("./app-layouts/auth-layout.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var route_breadcrumbs_component_1 = require("./ribbon/route-breadcrumbs.component");
var utils_module_1 = require("../utils/utils.module");
var SmartadminLayoutModule = /** @class */ (function () {
    function SmartadminLayoutModule() {
    }
    SmartadminLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                header_module_1.HeaderModule,
                navigation_module_1.NavigationModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                utils_module_1.UtilsModule,
                ngx_bootstrap_1.TooltipModule,
                ngx_bootstrap_1.BsDropdownModule,
            ],
            declarations: [
                footer_component_1.FooterComponent,
                ribbon_component_1.RibbonComponent,
                shortcut_component_1.ShortcutComponent,
                layout_switcher_component_1.LayoutSwitcherComponent,
                main_layout_component_1.MainLayoutComponent,
                empty_layout_component_1.EmptyLayoutComponent,
                auth_layout_component_1.AuthLayoutComponent,
                route_breadcrumbs_component_1.RouteBreadcrumbsComponent,
            ],
            exports: [
                header_module_1.HeaderModule,
                navigation_module_1.NavigationModule,
                footer_component_1.FooterComponent,
                ribbon_component_1.RibbonComponent,
                shortcut_component_1.ShortcutComponent,
                layout_switcher_component_1.LayoutSwitcherComponent,
            ]
        })
    ], SmartadminLayoutModule);
    return SmartadminLayoutModule;
}());
exports.SmartadminLayoutModule = SmartadminLayoutModule;
//# sourceMappingURL=layout.module.js.map