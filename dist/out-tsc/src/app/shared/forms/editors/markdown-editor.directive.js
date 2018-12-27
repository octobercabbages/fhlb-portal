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
require("script-loader!to-markdown/dist/to-markdown.js");
require("script-loader!markdown/lib/markdown.js");
require("script-loader!he/he.js");
require("script-loader!bootstrap-markdown/js/bootstrap-markdown.js");
var MarkdownEditorDirective = /** @class */ (function () {
    function MarkdownEditorDirective(el) {
        this.el = el;
    }
    MarkdownEditorDirective.prototype.ngOnInit = function () {
        $(this.el.nativeElement).markdown(this.markdownEditor || {});
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MarkdownEditorDirective.prototype, "markdownEditor", void 0);
    MarkdownEditorDirective = __decorate([
        core_1.Directive({
            selector: "[markdownEditor]"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], MarkdownEditorDirective);
    return MarkdownEditorDirective;
}());
exports.MarkdownEditorDirective = MarkdownEditorDirective;
//# sourceMappingURL=markdown-editor.directive.js.map