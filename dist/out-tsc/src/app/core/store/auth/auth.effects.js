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
var actions = require("./auth.actions");
var operators_1 = require("rxjs/operators");
var store_1 = require("@ngrx/store");
var auth_token_service_1 = require("../../services/auth-token.service");
var router_1 = require("@angular/router");
// const auth = fireApp.auth();
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, store, authToken, router, route) {
        // auth.onAuthStateChanged(data => {
        //   // console.log('\n\n onAuthStateChanged', data);
        // });
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.authToken = authToken;
        this.router = router;
        this.route = route;
        this.redirectUrl = '/dashboard';
        this.loginUrl = '/login';
        this.login$ = this.actions$.pipe(effects_1.ofType(actions.AuthActionTypes.LoginAction), operators_1.tap(function (data) {
            // auth
            //   .signInWithEmailAndPassword(
            //     data.payload.username,
            //     data.payload.password
            //   )
            //   .catch(this.dispatchError);
        }));
        this.logout$ = this.actions$.pipe(effects_1.ofType(actions.AuthActionTypes.LogoutAction), operators_1.tap(function (data) {
            _this.router.navigate(['']);
            // auth.signOut();
        }));
        this.signup$ = this.actions$.pipe(effects_1.ofType(actions.AuthActionTypes.SignupAction), operators_1.tap(function (data) {
            // auth
            //   .createUserWithEmailAndPassword(
            //     data.payload.username,
            //     data.payload.password
            //   )
            //   .catch(this.dispatchError);
        }));
        this.googleSign$ = this.actions$.pipe(effects_1.ofType(actions.AuthActionTypes.GoogleSign), operators_1.tap(function (data) {
            // auth
            //   .signInWithPopup(new fireAuth.GoogleAuthProvider())
            //   .catch(this.dispatchError);
        }));
        this.loginRedirect$ = this.actions$.pipe(effects_1.ofType(actions.AuthActionTypes.LoginRedirect), operators_1.tap(function (data) {
            _this.redirectUrl = data.payload || '';
            _this.router.navigate([_this.loginUrl]);
        }));
        this.authRedirect$ = this.actions$.pipe(effects_1.ofType(actions.AuthActionTypes.AuthTokenPayload), operators_1.filter(function (_) { return _this.router.url === _this.loginUrl; }), operators_1.tap(function (data) {
            _this.router.navigate([_this.redirectUrl]);
        }));
        this.authUser$ = this.actions$.pipe(effects_1.ofType(actions.AuthActionTypes.AuthUserChange), 
        // switchMap((data: any) => data.payload.getIdToken()),
        operators_1.tap(function (_) { return (_this.authToken.token = _); }), operators_1.map(function (_) { return _this.authToken.readPayload(_); }), operators_1.map(function (_) { return new actions.AuthTokenPayload(_); }));
        this.dispatchError = function (err) {
            _this.store.dispatch(new actions.AuthFailure({
                code: err.code,
                message: err.message
            }));
        };
        // auth.onIdTokenChanged(authUser => {
        //   // console.log('\n\n onIdTokenChanged', data);
        //   if (authUser) {
        //     this.store.dispatch(new actions.AuthUserChange(authUser));
        //   } else {
        //     this.authToken.token = null;
        //     this.store.dispatch(new actions.NullToken());
        //   }
        // });
    }
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logout$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "signup$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "googleSign$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginRedirect$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authRedirect$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "authUser$", void 0);
    AuthEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            store_1.Store,
            auth_token_service_1.AuthTokenService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
//# sourceMappingURL=auth.effects.js.map