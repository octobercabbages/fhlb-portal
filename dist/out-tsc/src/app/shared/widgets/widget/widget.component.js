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
var router_1 = require("@angular/router");
var WidgetComponent = /** @class */ (function () {
    function WidgetComponent(el, router) {
        this.el = el;
        this.router = router;
        this.colorbutton = true;
        this.editbutton = true;
        this.togglebutton = true;
        this.deletebutton = true;
        this.fullscreenbutton = true;
        this.custombutton = false;
        this.collapsed = false;
        this.sortable = true;
        this.hidden = false;
        this.load = false;
        this.refresh = false;
    }
    WidgetComponent_1 = WidgetComponent;
    WidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetId = this.genId();
        var widget = this.el.nativeElement;
        widget.className += ' jarviswidget';
        if (this.sortable) {
            widget.className += ' jarviswidget-sortable';
        }
        if (this.color) {
            widget.className += (' jarviswidget-color-' + this.color);
        }
        ['colorbutton',
            'editbutton',
            'togglebutton',
            'deletebutton',
            'fullscreenbutton',
            'custombutton',
            'sortable'
        ].forEach(function (option) {
            if (!_this[option]) {
                widget.setAttribute('data-widget-' + option, 'false');
            }
        });
        [
            'hidden',
            'collapsed'
        ].forEach(function (option) {
            if (_this[option]) {
                widget.setAttribute('data-widget-' + option, 'true');
            }
        });
        // ['refresh', 'load'].forEach(function (option) {
        //   if (this[option])
        //     widgetProps['data-widget-' + option] = this[option]
        // }.bind(this));
    };
    WidgetComponent.prototype.genId = function () {
        if (this.name) {
            return this.name;
        }
        else {
            var heading = this.el.nativeElement.querySelector('header h2');
            var id = heading ? heading.textContent.trim() : 'jarviswidget-' + WidgetComponent_1.counter++;
            id = id.toLowerCase().replace(/\W+/gm, '-');
            var url = this.router.url.substr(1).replace(/\//g, '-');
            id = url + '--' + id;
            return id;
        }
    };
    WidgetComponent.prototype.ngAfterViewInit = function () {
        var $widget = $(this.el.nativeElement);
        if (this.editbutton) {
            $widget.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');
        }
    };
    var WidgetComponent_1;
    WidgetComponent.counter = 0;
    __decorate([
        core_1.HostBinding('attr.id'),
        __metadata("design:type", String)
    ], WidgetComponent.prototype, "widgetId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WidgetComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "colorbutton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "editbutton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "togglebutton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "deletebutton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "fullscreenbutton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "custombutton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "collapsed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "sortable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "hidden", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WidgetComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "load", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WidgetComponent.prototype, "refresh", void 0);
    WidgetComponent = WidgetComponent_1 = __decorate([
        core_1.Component({
            selector: 'sa-widget,[sa-widget]',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, router_1.Router])
    ], WidgetComponent);
    return WidgetComponent;
}());
exports.WidgetComponent = WidgetComponent;
//# sourceMappingURL=widget.component.js.map