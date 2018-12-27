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
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function (title) {
        if (!this.options.title) {
            title.html("&#160;");
        }
        else {
            title.html(this.options.title);
        }
    }
}));
var JquiDialog = /** @class */ (function () {
    function JquiDialog(el) {
        this.el = el;
    }
    JquiDialog.prototype.ngOnInit = function () {
        $(this.el.nativeElement).dialog(this.saJquiDialog);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], JquiDialog.prototype, "saJquiDialog", void 0);
    JquiDialog = __decorate([
        core_1.Directive({
            selector: '[saJquiDialog]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], JquiDialog);
    return JquiDialog;
}());
exports.JquiDialog = JquiDialog;
//# sourceMappingURL=jqui-dialog.directive.js.map