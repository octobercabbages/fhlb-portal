"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var collapse_menu_component_1 = require("./collapse-menu/collapse-menu.component");
var recent_projects_component_1 = require("./recent-projects/recent-projects.component");
var full_screen_component_1 = require("./full-screen/full-screen.component");
var activities_component_1 = require("./activities/activities.component");
var activities_message_component_1 = require("./activities/activities-message/activities-message.component");
var activities_notification_component_1 = require("./activities/activities-notification/activities-notification.component");
var activities_task_component_1 = require("./activities/activities-task/activities-task.component");
var header_component_1 = require("./header.component");
var utils_module_1 = require("@app/shared/utils/utils.module");
var pipes_module_1 = require("@app/shared/pipes/pipes.module");
var i18n_module_1 = require("@app/shared/i18n/i18n.module");
var user_module_1 = require("@app/shared/user/user.module");
var voice_control_module_1 = require("@app/shared/voice-control/voice-control.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                voice_control_module_1.VoiceControlModule,
                ngx_bootstrap_1.BsDropdownModule,
                utils_module_1.UtilsModule, pipes_module_1.PipesModule, i18n_module_1.I18nModule, user_module_1.UserModule, ngx_bootstrap_1.PopoverModule,
            ],
            declarations: [
                activities_message_component_1.ActivitiesMessageComponent,
                activities_notification_component_1.ActivitiesNotificationComponent,
                activities_task_component_1.ActivitiesTaskComponent,
                recent_projects_component_1.RecentProjectsComponent,
                full_screen_component_1.FullScreenComponent,
                collapse_menu_component_1.CollapseMenuComponent,
                activities_component_1.ActivitiesComponent,
                header_component_1.HeaderComponent,
            ],
            exports: [
                header_component_1.HeaderComponent
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());
exports.HeaderModule = HeaderModule;
//# sourceMappingURL=header.module.js.map