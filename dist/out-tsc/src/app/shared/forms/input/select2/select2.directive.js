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
var dom_helpers_1 = require("../../../utils/dom-helpers");
require("select2/dist/js/select2.min.js");
var Select2Directive = /** @class */ (function () {
    function Select2Directive(el) {
        this.el = el;
        dom_helpers_1.addClassName(this.el.nativeElement, ["sa-cloak", "sa-hidden"]);
    }
    Select2Directive.prototype.ngOnInit = function () {
        $(this.el.nativeElement).select2();
        dom_helpers_1.removeClassName(this.el.nativeElement, ["sa-hidden"]);
    };
    Select2Directive = __decorate([
        core_1.Directive({
            selector: "[select2]"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], Select2Directive);
    return Select2Directive;
}());
exports.Select2Directive = Select2Directive;
//# sourceMappingURL=select2.directive.js.map