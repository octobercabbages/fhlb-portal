"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.termsAgreed = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function (event) {
        event.preventDefault();
        this.router.navigate(['/dashboard']);
    };
    RegisterComponent.prototype.openModal = function (event, template) {
        event.preventDefault();
        this.bsModalRef = this.modalService.show(template);
    };
    RegisterComponent.prototype.onTermsAgree = function () {
        this.termsAgreed = true;
        this.bsModalRef.hide();
    };
    RegisterComponent.prototype.onTermsClose = function () {
        this.bsModalRef.hide();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [router_1.Router,
            modal_1.BsModalService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map