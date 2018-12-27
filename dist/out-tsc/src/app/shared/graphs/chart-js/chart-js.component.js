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
var chart_js_presets_1 = require("./chart-js.presets");
var ChartJsComponent = /** @class */ (function () {
    function ChartJsComponent(el) {
        this.el = el;
        this.width = '100%';
    }
    ChartJsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return require('chart.js'); }).then(function (chartJs) {
            _this.render();
        });
    };
    ChartJsComponent.prototype.render = function () {
        var _this = this;
        var ctx = this.getCtx();
        var data = this.data;
        if (data.datasets && data.datasets.length && chart_js_presets_1.presets[this.type] && chart_js_presets_1.presets[this.type].dataset) {
            data.datasets = data.datasets.map(function (it) {
                return Object.assign({}, chart_js_presets_1.presets[_this.type].dataset, it);
            });
        }
        var chart = new Chart(ctx, {
            type: this.type,
            data: data,
            options: chart_js_presets_1.presets[this.type] ? chart_js_presets_1.presets[this.type].options : {}
        });
        chart.update();
    };
    ChartJsComponent.prototype.getCtx = function () {
        return this.el.nativeElement.querySelector('canvas').getContext('2d');
    };
    ChartJsComponent.prototype.randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
    ;
    ChartJsComponent.prototype.randomColorFactor = function () {
        return Math.round(Math.random() * 255);
    };
    ;
    ChartJsComponent.prototype.randomColor = function (opacity) {
        return 'rgba(' + this.randomColorFactor() + ',' + this.randomColorFactor() + ',' + this.randomColorFactor() + ',' + (opacity || '.3') + ')';
    };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChartJsComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChartJsComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChartJsComponent.prototype, "width", void 0);
    ChartJsComponent = __decorate([
        core_1.Component({
            selector: 'sa-chart-js',
            template: "\n  <div>\n  <canvas></canvas>\n  </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ChartJsComponent);
    return ChartJsComponent;
}());
exports.ChartJsComponent = ChartJsComponent;
//# sourceMappingURL=chart-js.component.js.map