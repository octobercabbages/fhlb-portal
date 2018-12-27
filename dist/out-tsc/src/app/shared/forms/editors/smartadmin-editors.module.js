"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var summernote_directive_1 = require("./summernote.directive");
var summernote_attach_directive_1 = require("./summernote-attach.directive");
var summernote_detach_directive_1 = require("./summernote-detach.directive");
var markdown_editor_directive_1 = require("./markdown-editor.directive");
var SmartadminEditorsModule = /** @class */ (function () {
    function SmartadminEditorsModule() {
    }
    SmartadminEditorsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                summernote_directive_1.SummernoteDirective,
                summernote_attach_directive_1.SummernoteAttachDirective,
                summernote_detach_directive_1.SummernoteDetachDirective,
                markdown_editor_directive_1.MarkdownEditorDirective,
            ],
            exports: [
                summernote_directive_1.SummernoteDirective,
                summernote_attach_directive_1.SummernoteAttachDirective,
                summernote_detach_directive_1.SummernoteDetachDirective,
                markdown_editor_directive_1.MarkdownEditorDirective,
            ]
        })
    ], SmartadminEditorsModule);
    return SmartadminEditorsModule;
}());
exports.SmartadminEditorsModule = SmartadminEditorsModule;
//# sourceMappingURL=smartadmin-editors.module.js.map