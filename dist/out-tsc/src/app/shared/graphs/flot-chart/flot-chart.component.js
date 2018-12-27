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
require("script-loader!smartadmin-plugins/flot-bundle/flot-bundle.min.js");
var FlotChartComponent = /** @class */ (function () {
    function FlotChartComponent(el) {
        this.el = el;
        this.graphClass = "";
        this.width = "100%";
        this.height = "250px";
        this.hostVisible = false;
    }
    FlotChartComponent.prototype.ngAfterContentInit = function () {
        this.render(this.data);
    };
    FlotChartComponent.prototype.render = function (data) {
        if (data &&
            this.el.nativeElement.offsetParent !== null) {
            $.plot(this.el.nativeElement.children[0], data, this.options);
        }
    };
    FlotChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.data.currentValue) {
            this.render(changes.data.currentValue);
        }
    };
    FlotChartComponent.prototype.ngDoCheck = function () {
        var visible = this.el.nativeElement.children[0].offsetParent !== null;
        if (this.hostVisible != visible) {
            if (visible)
                this.render(this.data);
            this.hostVisible = visible;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FlotChartComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FlotChartComponent.prototype, "graphClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FlotChartComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FlotChartComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FlotChartComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FlotChartComponent.prototype, "height", void 0);
    FlotChartComponent = __decorate([
        core_1.Component({
            selector: "sa-flot-chart",
            template: "\n    <div class=\"sa-flot-chart\" [ngStyle]=\"{width: width, height: height}\">&nbsp;</div>\n  ",
            styles: [
                "\n      :host {\n        display: block;\n        height: 100%;\n        width: 100%;\n      }\n      .sa-flot-chart {\n        overflow: hidden;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FlotChartComponent);
    return FlotChartComponent;
}());
exports.FlotChartComponent = FlotChartComponent;
//# sourceMappingURL=flot-chart.component.js.map