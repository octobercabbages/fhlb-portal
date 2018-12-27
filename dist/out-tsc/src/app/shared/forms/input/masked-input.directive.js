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
require("script-loader!jquery.maskedinput/src/jquery.maskedinput.js");
var MaskedInput = /** @class */ (function () {
    function MaskedInput(el) {
        this.el = el;
    }
    MaskedInput.prototype.ngOnInit = function () {
        var options = this.saMaskedPlaceholder
            ? { placeholder: this.saMaskedPlaceholder }
            : "";
        $(this.el.nativeElement).mask(this.saMaskedInput, options);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MaskedInput.prototype, "saMaskedInput", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MaskedInput.prototype, "saMaskedPlaceholder", void 0);
    MaskedInput = __decorate([
        core_1.Directive({
            selector: "[saMaskedInput]"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], MaskedInput);
    return MaskedInput;
}());
exports.MaskedInput = MaskedInput;
//# sourceMappingURL=masked-input.directive.js.map