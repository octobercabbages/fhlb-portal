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
// import {NgRedux} from "@angular-redux/store";
var options_actions_1 = require("../actions/options.actions");
var OptionRadioComponent = /** @class */ (function () {
    function OptionRadioComponent(
    // private ngRedux: NgRedux<any>,
    actions) {
        this.actions = actions;
        this.id = 'jcrop-option-radio-' + OptionRadioComponent_1.idCounter++;
    }
    OptionRadioComponent_1 = OptionRadioComponent;
    OptionRadioComponent.prototype.ngOnInit = function () {
    };
    OptionRadioComponent.prototype.onChange = function () {
        this.actions.setOptions({
            options: this.options,
            storeId: this.storeId
        });
    };
    var OptionRadioComponent_1;
    OptionRadioComponent.idCounter = 0;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], OptionRadioComponent.prototype, "checked", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OptionRadioComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OptionRadioComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OptionRadioComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OptionRadioComponent.prototype, "storeId", void 0);
    OptionRadioComponent = OptionRadioComponent_1 = __decorate([
        core_1.Component({
            selector: 'jcrop-option-radio',
            template: "\n    <div >\n        <input (change)=\"onChange()\" [checked]=\"checked\" name=\"{{group}}\" type=\"radio\" id=\"{{id}}\" />\n        <label htmlFor=\"{{id}}\">{{label}}</label>\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [options_actions_1.OptionsActions])
    ], OptionRadioComponent);
    return OptionRadioComponent;
}());
exports.OptionRadioComponent = OptionRadioComponent;
//# sourceMappingURL=option-radio.component.js.map