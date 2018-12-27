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
var notify_actions_1 = require("./notify.actions");
var operators_1 = require("rxjs/operators");
var notify_service_1 = require("./notify.service");
var NotifyEffects = /** @class */ (function () {
    function NotifyEffects(actions$, notifyService) {
        var _this = this;
        this.actions$ = actions$;
        this.notifyService = notifyService;
        this.showError$ = this.actions$.pipe(effects_1.ofType(notify_actions_1.NotifyActionTypes.ShowError), operators_1.map(function (_) { return ({ code: _.payload.code, message: _.payload.message }); }), operators_1.map(function (_) { return _this.notifyService.showError(_); }));
        this.snakNotify$ = this.actions$.pipe(effects_1.ofType(notify_actions_1.NotifyActionTypes.SnackNotify), operators_1.map(function (_) { return _.payload; }), operators_1.map(function (_) { return _this.notifyService.snackNotify(_); }));
    }
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], NotifyEffects.prototype, "showError$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], NotifyEffects.prototype, "snakNotify$", void 0);
    NotifyEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, notify_service_1.NotifyService])
    ], NotifyEffects);
    return NotifyEffects;
}());
exports.NotifyEffects = NotifyEffects;
//# sourceMappingURL=notify.effects.js.map