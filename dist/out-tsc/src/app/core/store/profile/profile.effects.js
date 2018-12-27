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
var profile_actions_1 = require("./profile.actions");
var operators_1 = require("rxjs/operators");
var fromAuth = require("../auth");
var store_1 = require("@ngrx/store");
var ProfileEffects = /** @class */ (function () {
    function ProfileEffects(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
        this.profileUpdate$ = this.actions$.pipe(effects_1.ofType(profile_actions_1.ProfileActionTypes.ProfileUpdate), operators_1.map(function (_) { return _.payload; }), 
        // tap(data => this.uid = data.uid),
        // @todo save in databse
        operators_1.map(function (data) { return new profile_actions_1.ProfileUpdateSuccess(data); }));
        this.effect$ = this.actions$.pipe(effects_1.ofType(fromAuth.AuthActionTypes.AuthTokenPayload), operators_1.filter(function (_) { return !!_; }), operators_1.map(function (_) { return _.payload; }), 
        // @todo restore profile data
        operators_1.map(function (data) { return new profile_actions_1.ProfileRestore(data); }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProfileEffects.prototype, "profileUpdate$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProfileEffects.prototype, "effect$", void 0);
    ProfileEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions, store_1.Store])
    ], ProfileEffects);
    return ProfileEffects;
}());
exports.ProfileEffects = ProfileEffects;
//# sourceMappingURL=profile.effects.js.map