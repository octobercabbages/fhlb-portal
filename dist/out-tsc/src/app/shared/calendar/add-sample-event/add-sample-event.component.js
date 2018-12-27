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
var AddSampleEvent = /** @class */ (function () {
    function AddSampleEvent() {
        this.icons = [
            'fa-info',
            'fa-warning',
            'fa-check',
            'fa-user',
            'fa-lock',
            'fa-clock-o'
        ];
        this.colorClassNames = [
            {
                bg: 'bg-color-darken',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blue',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-orange',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-greenLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blueLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-red',
                txt: 'txt-color-white'
            }
        ];
        this.addSample = new core_1.EventEmitter();
    }
    AddSampleEvent.prototype.ngOnInit = function () {
        this.activeIcon = this.icons[0];
        this.activeColorClass = this.colorClassNames[0];
    };
    AddSampleEvent.prototype.setIcon = function (icon) {
        this.activeIcon = icon;
    };
    AddSampleEvent.prototype.setColorClass = function (colorClassName) {
        this.activeColorClass = colorClassName;
    };
    AddSampleEvent.prototype.addEventSample = function () {
        if (!this.description || !this.title) {
            return;
        }
        var event = {
            title: this.title,
            description: this.description,
            className: this.activeColorClass.bg + ' ' + this.activeColorClass.txt,
            icon: this.activeIcon
        };
        this.addSample.emit(event);
        this.description = '';
        this.title = '';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AddSampleEvent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AddSampleEvent.prototype, "description", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddSampleEvent.prototype, "addSample", void 0);
    AddSampleEvent = __decorate([
        core_1.Component({
            selector: 'sa-add-sample-event',
            templateUrl: './add-sample-event.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], AddSampleEvent);
    return AddSampleEvent;
}());
exports.AddSampleEvent = AddSampleEvent;
//# sourceMappingURL=add-sample-event.component.js.map