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
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var layout_service_1 = require("@app/core/services/layout.service");
var layout_actions_1 = require("./layout.actions");
var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(actions$, layoutService) {
        var _this = this;
        this.actions$ = actions$;
        this.layoutService = layoutService;
        this.onSmartSkin$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.SmartSkin), operators_1.tap(function (action) { return _this.layoutService.onSmartSkin(action.payload); }));
        this.onFixedHeader$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.FixedHeader), operators_1.tap(function (action) { return _this.layoutService.onFixedHeader; }));
        this.onFixedNavigation$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.FixedNavigation), operators_1.tap(function (action) { return _this.layoutService.onFixedNavigation; }));
        this.onFixedRibbon$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.FixedRibbon), operators_1.tap(function (action) { return _this.layoutService.onFixedRibbon; }));
        this.onFixedPageFooter$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.FixedPageFooter), operators_1.tap(function (action) { return _this.layoutService.onFixedPageFooter; }));
        this.onInsideContainer$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.InsideContainer), operators_1.tap(function (action) { return _this.layoutService.onInsideContainer; }));
        this.onRtl$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.Rtl), operators_1.tap(function (action) { return _this.layoutService.onRtl; }));
        this.onMenuOnTop$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.MenuOnTop), operators_1.tap(function (action) { return _this.layoutService.onMenuOnTop; }));
        this.onColorblindFriendly$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.ColorblindFriendly), operators_1.tap(function (action) { return _this.layoutService.onColorblindFriendly; }));
        this.onCollapseMenu$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.CollapseMenu), operators_1.tap(function (action) { return _this.layoutService.onCollapseMenu; }));
        this.onMinifyMenu$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.MinifyMenu), operators_1.tap(function (action) { return _this.layoutService.onMinifyMenu; }));
        this.onShortcutToggle$ = this.actions$.pipe(effects_1.ofType(layout_actions_1.LayoutActionTypes.ShortcutToggle), operators_1.tap(function (action) { return _this.layoutService.onShortcutToggle; }));
    }
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onSmartSkin$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onFixedHeader$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onFixedNavigation$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onFixedRibbon$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onFixedPageFooter$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onInsideContainer$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onRtl$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onMenuOnTop$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onColorblindFriendly$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onCollapseMenu$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onMinifyMenu$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "onShortcutToggle$", void 0);
    LayoutEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            layout_service_1.LayoutService])
    ], LayoutEffects);
    return LayoutEffects;
}());
exports.LayoutEffects = LayoutEffects;
//# sourceMappingURL=layout.effects.js.map