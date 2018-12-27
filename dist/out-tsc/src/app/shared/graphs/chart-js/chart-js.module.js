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
var chart_js_component_1 = require("./chart-js.component");
var ChartJsModule = /** @class */ (function () {
    function ChartJsModule() {
    }
    ChartJsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [chart_js_component_1.ChartJsComponent],
            exports: [chart_js_component_1.ChartJsComponent],
        })
    ], ChartJsModule);
    return ChartJsModule;
}());
exports.ChartJsModule = ChartJsModule;
//# sourceMappingURL=chart-js.module.js.map