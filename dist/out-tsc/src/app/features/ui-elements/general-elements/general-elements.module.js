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
var general_elements_routing_1 = require("./general-elements.routing");
var general_elements_component_1 = require("./general-elements.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var shared_module_1 = require("@app/shared/shared.module");
var GeneralElementsModule = /** @class */ (function () {
    function GeneralElementsModule() {
    }
    GeneralElementsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                general_elements_routing_1.generalElementsRouting,
                shared_module_1.SharedModule,
                ngx_bootstrap_1.AccordionModule.forRoot(),
                ngx_bootstrap_1.PopoverModule.forRoot(),
                ngx_bootstrap_1.CarouselModule.forRoot(),
            ],
            declarations: [general_elements_component_1.GeneralElementsComponent]
        })
    ], GeneralElementsModule);
    return GeneralElementsModule;
}());
exports.GeneralElementsModule = GeneralElementsModule;
//# sourceMappingURL=general-elements.module.js.map