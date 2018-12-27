"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: '', redirectTo: 'analytics', pathMatch: 'full'
    },
    {
        path: 'analytics',
        loadChildren: './analytics/analytics.module#AnalyticsModule',
    },
    {
        path: 'social',
        loadChildren: './social/social.module#SocialModule',
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=dashboard.routing.js.map