"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("@app/shared/shared.module");
var analytics_routing_module_1 = require("./analytics-routing.module");
var analytics_component_1 = require("./analytics.component");
var social_network_component_1 = require("./live-feeds/social-network.component");
var live_feeds_component_1 = require("./live-feeds/live-feeds.component");
var live_stats_component_1 = require("./live-feeds/live-stats.component");
var revenue_component_1 = require("./live-feeds/revenue.component");
var bird_eye_component_1 = require("./bird-eye/bird-eye.component");
var todo_widget_component_1 = require("./todo-widget/todo-widget.component");
var todo_list_component_1 = require("./todo-widget/todo-list.component");
var flot_chart_module_1 = require("@app/shared/graphs/flot-chart/flot-chart.module");
var d3_module_1 = require("@app/shared/graphs/d3/d3.module");
var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                analytics_routing_module_1.AnalyticsRoutingModule,
                flot_chart_module_1.FlotChartModule,
                d3_module_1.D3Module,
            ],
            declarations: [
                analytics_component_1.AnalyticsComponent,
                live_feeds_component_1.LiveFeedsComponent,
                live_stats_component_1.LiveStatsComponent,
                revenue_component_1.RevenueComponent,
                social_network_component_1.SocialNetworkComponent,
                bird_eye_component_1.BirdEyeComponent,
                todo_widget_component_1.TodoWidgetComponent,
                todo_list_component_1.TodoListComponent
            ],
            providers: [],
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());
exports.AnalyticsModule = AnalyticsModule;
//# sourceMappingURL=analytics.module.js.map