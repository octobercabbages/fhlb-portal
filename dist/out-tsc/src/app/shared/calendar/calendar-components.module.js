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
var dropdown_1 = require("ngx-bootstrap/dropdown");
var calendar_widget_component_1 = require("./calendar-widget/calendar-widget.component");
var draggable_event_directive_1 = require("./draggable-event/draggable-event.directive");
var event_samples_component_1 = require("./event-samples/event-samples.component");
var add_sample_event_component_1 = require("./add-sample-event/add-sample-event.component");
var utils_module_1 = require("@app/shared/utils/utils.module");
var smartadmin_widgets_module_1 = require("@app/shared/widgets/smartadmin-widgets.module");
var CalendarComponentsModule = /** @class */ (function () {
    function CalendarComponentsModule() {
    }
    CalendarComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                utils_module_1.UtilsModule,
                smartadmin_widgets_module_1.SmartadminWidgetsModule,
                dropdown_1.BsDropdownModule
            ],
            declarations: [
                add_sample_event_component_1.AddSampleEvent,
                calendar_widget_component_1.CalendarWidgetComponent,
                draggable_event_directive_1.DraggableEvent,
                event_samples_component_1.EventSamplesComponent
            ],
            exports: [
                add_sample_event_component_1.AddSampleEvent,
                calendar_widget_component_1.CalendarWidgetComponent,
                draggable_event_directive_1.DraggableEvent,
                event_samples_component_1.EventSamplesComponent
            ],
            providers: []
        })
    ], CalendarComponentsModule);
    return CalendarComponentsModule;
}());
exports.CalendarComponentsModule = CalendarComponentsModule;
//# sourceMappingURL=calendar-components.module.js.map