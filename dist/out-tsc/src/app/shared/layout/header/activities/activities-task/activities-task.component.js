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
var ActivitiesTaskComponent = /** @class */ (function () {
    function ActivitiesTaskComponent() {
    }
    ActivitiesTaskComponent.prototype.ngOnInit = function () {
    };
    ActivitiesTaskComponent.prototype.setProgressClasses = function () {
        return {
            'progress-bar': true,
            'progress-bar-success': this.item.status == 'MINOR' || this.item.status == 'NORMAL',
            'bg-color-teal': this.item.status == 'PRIMARY' || this.item.status == 'URGENT',
            'progress-bar-danger': this.item.status == 'CRITICAL'
        };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActivitiesTaskComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActivitiesTaskComponent.prototype, "lastUpdate", void 0);
    ActivitiesTaskComponent = __decorate([
        core_1.Component({
            selector: '[activitiesTask]',
            templateUrl: './activities-task.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesTaskComponent);
    return ActivitiesTaskComponent;
}());
exports.ActivitiesTaskComponent = ActivitiesTaskComponent;
//# sourceMappingURL=activities-task.component.js.map