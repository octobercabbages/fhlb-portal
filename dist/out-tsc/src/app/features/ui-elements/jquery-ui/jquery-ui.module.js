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
var jquery_ui_routing_1 = require("./jquery-ui.routing");
var jquery_ui_component_1 = require("./jquery-ui.component");
var jquery_ui_module_1 = require("@app/shared/ui/jquery-ui/jquery-ui.module");
var shared_module_1 = require("@app/shared/shared.module");
var JqueryUiShowcaseModule = /** @class */ (function () {
    function JqueryUiShowcaseModule() {
    }
    JqueryUiShowcaseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                jquery_ui_routing_1.jqueryUiRouting,
                shared_module_1.SharedModule,
                jquery_ui_module_1.JqueryUiModule,
            ],
            declarations: [jquery_ui_component_1.JqueryUiComponent]
        })
    ], JqueryUiShowcaseModule);
    return JqueryUiShowcaseModule;
}());
exports.JqueryUiShowcaseModule = JqueryUiShowcaseModule;
//# sourceMappingURL=jquery-ui.module.js.map