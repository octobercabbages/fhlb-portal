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
var SmartTimepickerDirective = /** @class */ (function () {
    function SmartTimepickerDirective(el) {
        this.el = el;
    }
    SmartTimepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return require('bootstrap-timepicker/js/bootstrap-timepicker.min.js'); }).then(function () {
            _this.render();
        });
    };
    SmartTimepickerDirective.prototype.render = function () {
        $(this.el.nativeElement).timepicker();
    };
    SmartTimepickerDirective = __decorate([
        core_1.Directive({
            selector: '[smartTimepicker]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], SmartTimepickerDirective);
    return SmartTimepickerDirective;
}());
exports.SmartTimepickerDirective = SmartTimepickerDirective;
//# sourceMappingURL=smart-timepicker.directive.js.map