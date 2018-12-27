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
var datatables_case_component_1 = require("./datatables-case.component");
var datatables_rest_demo_component_1 = require("./datatables-rest-demo.component");
var datatables_case_routing_module_1 = require("./datatables-case-routing.module");
var shared_module_1 = require("@app/shared/shared.module");
var smartadmin_datatable_module_1 = require("@app/shared/ui/datatable/smartadmin-datatable.module");
var DatatablesCaseModule = /** @class */ (function () {
    function DatatablesCaseModule() {
    }
    DatatablesCaseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                smartadmin_datatable_module_1.SmartadminDatatableModule,
                datatables_case_routing_module_1.DatatablesCaseRoutingModule
            ],
            declarations: [
                datatables_case_component_1.DatatablesCaseComponent, datatables_rest_demo_component_1.DatatablesRestDemoComponent
            ]
        })
    ], DatatablesCaseModule);
    return DatatablesCaseModule;
}());
exports.DatatablesCaseModule = DatatablesCaseModule;
//# sourceMappingURL=datatables-case.module.js.map