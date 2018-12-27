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
var crop_actions_1 = require("../actions/crop.actions");
var FieldComponent = /** @class */ (function () {
    function FieldComponent(actions) {
        this.actions = actions;
        this.id = 'jcrop-field-' + FieldComponent_1.idCounter++;
    }
    FieldComponent_1 = FieldComponent;
    FieldComponent.prototype.ngOnInit = function () {
        // this.value$ = this.ngRedux.select([this.storeId, 'crop', 'selection', this.field]);
    };
    var FieldComponent_1;
    FieldComponent.idCounter = 0;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "storeId", void 0);
    FieldComponent = FieldComponent_1 = __decorate([
        core_1.Component({
            selector: 'jcrop-field',
            template: "\n    <div>\n        <input type=\"number\" id=\"{{id}}\"\n               #input\n               [value]=\"value$ | async\"\n               (change)=\"actions.cropFieldChange(field, input.value, storeId)\"/>\n        <label htmlFor=\"{{id}}\" class=\"active\">{{field}}</label>\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [crop_actions_1.CropActions])
    ], FieldComponent);
    return FieldComponent;
}());
exports.FieldComponent = FieldComponent;
//# sourceMappingURL=field.component.js.map