"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: 'normal',
        loadChildren: './normal-tables/normal-tables.module#NormalTablesModule',
        data: { pageTitle: 'Normal' }
    },
    {
        path: 'datatables',
        loadChildren: './datatables-case/datatables-case.module#DatatablesCaseModule',
        data: { pageTitle: 'Datatables' }
    },
    {
        path: 'ngx-datatable',
        loadChildren: './ngx-datatable/ngx-datatable-case.module#NgxDatatableCaseModule',
        data: { pageTitle: 'NGx Datatable' }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=tables.routing.js.map