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
var calendar_actions_1 = require("./calendar.actions");
var store_1 = require("@ngrx/store");
var operators_1 = require("rxjs/operators");
var event_mocks_1 = require("@app/core/store/calendar/event.mocks");
var rxjs_1 = require("rxjs");
var auth_1 = require("@app/core/store/auth");
var CalendarEffects = /** @class */ (function () {
    function CalendarEffects(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
        this.effect$ = this.actions$.pipe(effects_1.ofType(auth_1.AuthActionTypes.AuthInit), operators_1.switchMap(function (_) {
            return rxjs_1.of({
                events: event_mocks_1.events,
                samples: event_mocks_1.samples
            });
        }), operators_1.map(function (_) { return new calendar_actions_1.LoadEventsSuccess(_); }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], CalendarEffects.prototype, "effect$", void 0);
    CalendarEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, store_1.Store])
    ], CalendarEffects);
    return CalendarEffects;
}());
exports.CalendarEffects = CalendarEffects;
//# sourceMappingURL=calendar.effects.js.map