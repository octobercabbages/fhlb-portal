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
var ckeditor_routing_module_1 = require("./ckeditor-routing.module");
var ckeditor_component_1 = require("./ckeditor.component");
var layout_1 = require("@app/shared/layout");
var stats_module_1 = require("@app/shared/stats/stats.module");
var smartadmin_widgets_module_1 = require("@app/shared/widgets/smartadmin-widgets.module");
var CkeditorModule = /** @class */ (function () {
    function CkeditorModule() {
    }
    CkeditorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ckeditor_routing_module_1.CkeditorRoutingModule,
                layout_1.SmartadminLayoutModule,
                stats_module_1.StatsModule,
                smartadmin_widgets_module_1.SmartadminWidgetsModule,
            ],
            declarations: [ckeditor_component_1.CkeditorComponent]
        })
    ], CkeditorModule);
    return CkeditorModule;
}());
exports.CkeditorModule = CkeditorModule;
//# sourceMappingURL=ckeditor.module.js.map