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
var FakeDataSource = {
    data: [],
    total: 200,
    getRandomData: function () {
        if (this.data.length > 0)
            this.data = this.data.slice(1);
        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]]);
        return res;
    }
};
var LiveStatsComponent = /** @class */ (function () {
    function LiveStatsComponent(zone) {
        this.zone = zone;
        this.liveSwitch = false;
        this.liveStatsChartOptions = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: ['rgb(87, 136, 156)'],
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            },
                            {
                                opacity: 0
                            }
                        ]
                    },
                    steps: false
                }
            }
        };
    }
    LiveStatsComponent.prototype.ngOnInit = function () {
        this.updateStats();
    };
    LiveStatsComponent.prototype.updateStats = function () {
        this.liveStats = [FakeDataSource.getRandomData()];
    };
    LiveStatsComponent.prototype.toggleSwitch = function () {
        var _this = this;
        if (this.liveSwitch) {
            this.interval = setInterval(function () {
                _this.updateStats();
            }, 1000);
        }
        else {
            clearInterval(this.interval);
        }
    };
    LiveStatsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LiveStatsComponent.prototype, "liveSwitch", void 0);
    LiveStatsComponent = __decorate([
        core_1.Component({
            selector: 'live-stats-feed',
            templateUrl: './live-stats.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], LiveStatsComponent);
    return LiveStatsComponent;
}());
exports.LiveStatsComponent = LiveStatsComponent;
//# sourceMappingURL=live-stats.component.js.map