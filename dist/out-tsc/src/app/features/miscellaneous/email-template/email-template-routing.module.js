"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var email_template_component_1 = require("./email-template.component");
var routes = [{
        path: '',
        component: email_template_component_1.EmailTemplateComponent
    }];
var EmailTemplateRoutingModule = /** @class */ (function () {
    function EmailTemplateRoutingModule() {
    }
    EmailTemplateRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
            providers: []
        })
    ], EmailTemplateRoutingModule);
    return EmailTemplateRoutingModule;
}());
exports.EmailTemplateRoutingModule = EmailTemplateRoutingModule;
//# sourceMappingURL=email-template-routing.module.js.map