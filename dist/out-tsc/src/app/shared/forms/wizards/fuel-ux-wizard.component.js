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
require("script-loader!fuelux/js/wizard.js");
var FuelUxWizardComponent = /** @class */ (function () {
    function FuelUxWizardComponent(el) {
        this.el = el;
        this.complete = new core_1.EventEmitter();
    }
    FuelUxWizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var element = $(this.el.nativeElement);
        var wizard = element.wizard();
        var $form = element.find("form");
        wizard.on("actionclicked.fu.wizard", function (e, data) {
            if ($form.data("validator")) {
                if (!$form.valid()) {
                    $form.data("validator").focusInvalid();
                    e.preventDefault();
                }
            }
        });
        wizard.on("finished.fu.wizard", function (e, data) {
            var formData = {};
            $form.serializeArray().forEach(function (field) {
                formData[field.name] = field.value;
            });
            _this.complete.emit(formData);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FuelUxWizardComponent.prototype, "complete", void 0);
    FuelUxWizardComponent = __decorate([
        core_1.Component({
            selector: "fuel-ux-wizard",
            template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FuelUxWizardComponent);
    return FuelUxWizardComponent;
}());
exports.FuelUxWizardComponent = FuelUxWizardComponent;
//# sourceMappingURL=fuel-ux-wizard.component.js.map