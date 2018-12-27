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
var NgxDatatableCaseComponent = /** @class */ (function () {
    function NgxDatatableCaseComponent() {
    }
    NgxDatatableCaseComponent.prototype.ngOnInit = function () {
    };
    NgxDatatableCaseComponent = __decorate([
        core_1.Component({
            selector: 'ngx-datatable-case',
            templateUrl: './ngx-datatable-case.component.html',
            styleUrls: [
                // material theme from ngx-datatable teem
                // '../../../../node_modules/@swimlane/ngx-datatable/release/themes/material.css',
                // '../../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css',
                './smartadmin-ngx-datatable.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], NgxDatatableCaseComponent);
    return NgxDatatableCaseComponent;
}());
exports.NgxDatatableCaseComponent = NgxDatatableCaseComponent;
//# sourceMappingURL=ngx-datatable-case.component.js.map