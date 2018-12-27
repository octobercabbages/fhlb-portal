"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var layout_1 = require("./layout");
var i18n_module_1 = require("./i18n/i18n.module");
var user_module_1 = require("./user/user.module");
var bootstrap_module_1 = require("@app/shared/bootstrap.module");
var voice_control_module_1 = require("./voice-control/voice-control.module");
var smartadmin_widgets_module_1 = require("./widgets/smartadmin-widgets.module");
var utils_module_1 = require("./utils/utils.module");
var pipes_module_1 = require("./pipes/pipes.module");
var chat_module_1 = require("./chat/chat.module");
var stats_module_1 = require("./stats/stats.module");
var inline_graphs_module_1 = require("./graphs/inline/inline-graphs.module");
var smartadmin_forms_lite_module_1 = require("./forms/smartadmin-forms-lite.module");
var smart_progressbar_module_1 = require("./ui/smart-progressbar/smart-progressbar.module");
var calendar_components_module_1 = require("@app/shared/calendar/calendar-components.module");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                layout_1.SmartadminLayoutModule,
                bootstrap_module_1.BootstrapModule
            ],
            declarations: [],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                user_module_1.UserModule,
                layout_1.SmartadminLayoutModule,
                bootstrap_module_1.BootstrapModule,
                i18n_module_1.I18nModule,
                utils_module_1.UtilsModule,
                pipes_module_1.PipesModule,
                smartadmin_forms_lite_module_1.SmartadminFormsLiteModule,
                smart_progressbar_module_1.SmartProgressbarModule,
                inline_graphs_module_1.InlineGraphsModule,
                smartadmin_widgets_module_1.SmartadminWidgetsModule,
                chat_module_1.ChatModule,
                stats_module_1.StatsModule,
                voice_control_module_1.VoiceControlModule,
                calendar_components_module_1.CalendarComponentsModule,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map