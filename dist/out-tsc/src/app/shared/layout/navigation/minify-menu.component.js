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
var fromLayout = require("@app/core/store/layout");
var store_1 = require("@ngrx/store");
var MinifyMenuComponent = /** @class */ (function () {
    function MinifyMenuComponent(store) {
        this.store = store;
    }
    MinifyMenuComponent.prototype.toggle = function () {
        this.store.dispatch(new fromLayout.MinifyMenu());
    };
    MinifyMenuComponent = __decorate([
        core_1.Component({
            selector: 'sa-minify-menu',
            template: "<span class=\"minifyme\" (click)=\"toggle()\">\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n</span>",
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], MinifyMenuComponent);
    return MinifyMenuComponent;
}());
exports.MinifyMenuComponent = MinifyMenuComponent;
//# sourceMappingURL=minify-menu.component.js.map