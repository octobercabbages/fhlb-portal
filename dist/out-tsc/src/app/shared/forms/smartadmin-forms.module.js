"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var smartadmin_input_module_1 = require("./input/smartadmin-input.module");
var smartadmin_validation_module_1 = require("./validation/smartadmin-validation.module");
var dropzone_module_1 = require("./dropzone/dropzone.module");
var smartadmin_wizards_module_1 = require("./wizards/smartadmin-wizards.module");
var SmartadminFormsModule = /** @class */ (function () {
    function SmartadminFormsModule() {
    }
    SmartadminFormsModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule],
            declarations: [],
            exports: [
                smartadmin_input_module_1.SmartadminInputModule,
                smartadmin_validation_module_1.SmartadminValidationModule,
                dropzone_module_1.DropzoneModule,
                smartadmin_wizards_module_1.SmartadminWizardsModule,
            ]
        })
    ], SmartadminFormsModule);
    return SmartadminFormsModule;
}());
exports.SmartadminFormsModule = SmartadminFormsModule;
//# sourceMappingURL=smartadmin-forms.module.js.map