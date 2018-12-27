"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
    {
        path: 'forgot-password',
        loadChildren: './forgot/forgot.module#ForgotModule'
    },
    {
        path: 'locked',
        loadChildren: './locked/locked.module#LockedModule'
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=auth.routing.js.map