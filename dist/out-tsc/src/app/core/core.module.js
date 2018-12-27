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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var environment_1 = require("../../environments/environment");
var store_devtools_1 = require("@ngrx/store-devtools");
var storage_1 = require("@ionic/storage");
var effects_1 = require("@ngrx/effects");
var app_effects_1 = require("./app.effects");
var fromStore = require("./store");
var auth_guard_1 = require("./guards/auth.guard");
var services_1 = require("@app/core/services");
var module_import_guard_1 = require("./guards/module-import.guard");
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                storage_1.IonicStorageModule.forRoot(),
                // HotkeysModule.forRoot(),
                store_1.StoreModule.forRoot(fromStore.reducers, {
                    metaReducers: fromStore.metaReducers
                }),
                !environment_1.environment.production ? store_devtools_1.StoreDevtoolsModule.instrument() : [],
                effects_1.EffectsModule.forRoot(fromStore.effects.concat([app_effects_1.AppEffects]))
            ],
            exports: [],
            providers: [
                auth_guard_1.AuthGuard
            ].concat(services_1.services, fromStore.services, [
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: services_1.AuthTokenFactory,
                    deps: [services_1.AuthTokenService],
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: services_1.TokenInterceptor,
                    multi: true
                }
            ])
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map