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
var error500_routing_module_1 = require("./error500-routing.module");
var error500_component_1 = require("./error500.component");
var layout_1 = require("@app/shared/layout");
var stats_module_1 = require("@app/shared/stats/stats.module");
var Error500Module = /** @class */ (function () {
    function Error500Module() {
    }
    Error500Module = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                error500_routing_module_1.Error500RoutingModule,
                layout_1.SmartadminLayoutModule,
                stats_module_1.StatsModule,
            ],
            declarations: [error500_component_1.Error500Component]
        })
    ], Error500Module);
    return Error500Module;
}());
exports.Error500Module = Error500Module;
//# sourceMappingURL=error500.module.js.map