"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var widgets_showcase_routing_1 = require("./widgets-showcase.routing");
var widgets_showcase_component_1 = require("./widgets-showcase.component");
var shared_module_1 = require("@app/shared/shared.module");
var WidgetsShowcaseModule = /** @class */ (function () {
    function WidgetsShowcaseModule() {
    }
    WidgetsShowcaseModule = __decorate([
        core_1.NgModule({
            declarations: [
                widgets_showcase_component_1.WidgetsShowcaseComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                widgets_showcase_routing_1.routing
            ],
            providers: [],
        })
    ], WidgetsShowcaseModule);
    return WidgetsShowcaseModule;
}());
exports.WidgetsShowcaseModule = WidgetsShowcaseModule;
//# sourceMappingURL=widgets-showcase.module.js.map