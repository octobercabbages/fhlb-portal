"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
exports.homeRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: {
            pageTitle: 'Home'
        }
    }
];
exports.homeRouting = router_1.RouterModule.forChild(exports.homeRoutes);
//# sourceMappingURL=home.routing.js.map