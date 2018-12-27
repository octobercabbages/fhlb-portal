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
require("script-loader!dygraphs/dist/dygraph.js");
var DygraphComponent = /** @class */ (function () {
    function DygraphComponent(el) {
        this.el = el;
        this.options = {};
        this.data = {};
        this.width = "100%";
        this.height = "300px";
    }
    DygraphComponent.prototype.ngOnInit = function () { };
    DygraphComponent.prototype.ngAfterViewInit = function () {
        new Dygraph(this.el.nativeElement.children[0], this.data, Object.assign(this.options, {
            labelsDiv: this.legend.nativeElement
        }));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DygraphComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DygraphComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DygraphComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DygraphComponent.prototype, "height", void 0);
    __decorate([
        core_1.ViewChild("legend"),
        __metadata("design:type", core_1.ElementRef)
    ], DygraphComponent.prototype, "legend", void 0);
    DygraphComponent = __decorate([
        core_1.Component({
            selector: "sa-dygraph",
            template: "\n    <div [ngStyle]=\"{width: width, height: height}\" >\n      dygraph canvas!\n    </div>\n    <div class=\"sa-dygraph-legend\" #legend></div>\n  ",
            styles: [
                "\n      sa-dygraph {\n        position: relative;\n      }\n      .sa-dygraph-legend {\n        position: absolute;\n        top: 0;\n        right: 0;\n        text-align: right;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], DygraphComponent);
    return DygraphComponent;
}());
exports.DygraphComponent = DygraphComponent;
//# sourceMappingURL=dygraph.component.js.map