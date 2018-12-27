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
var ngx_datatable_case_routing_module_1 = require("./ngx-datatable-case-routing.module");
var ngx_datatable_case_component_1 = require("./ngx-datatable-case.component");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var row_detail_component_1 = require("./row-detail/row-detail.component");
var paged_table_component_1 = require("./paged-table/paged-table.component");
var shared_module_1 = require("@app/shared/shared.module");
var NgxDatatableCaseModule = /** @class */ (function () {
    function NgxDatatableCaseModule() {
    }
    NgxDatatableCaseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_datatable_case_routing_module_1.NgxDatatableCaseRoutingModule,
                ngx_datatable_1.NgxDatatableModule,
                shared_module_1.SharedModule,
            ],
            declarations: [ngx_datatable_case_component_1.NgxDatatableCaseComponent, row_detail_component_1.RowDetailComponent, paged_table_component_1.PagedTableComponent]
        })
    ], NgxDatatableCaseModule);
    return NgxDatatableCaseModule;
}());
exports.NgxDatatableCaseModule = NgxDatatableCaseModule;
//# sourceMappingURL=ngx-datatable-case.module.js.map