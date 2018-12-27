"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../../environments/environment");
var auth = require("./auth");
var notify = require("./notify");
var profile = require("./profile");
var layout = require("./layout");
var calendar = require("./calendar");
exports.reducers = {
    auth: auth.authReducer,
    notify: notify.notifyReducer,
    profile: profile.profileReducer,
    layout: layout.layoutReducer,
    calendar: calendar.calendarReducer,
};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        if (
        // !action.silent &&
        environment_1.environment.log.store) {
            // console.log("\nstate", state);
            // console.log("+ action", action);
        }
        return reducer(state, action);
    };
}
exports.logger = logger;
exports.metaReducers = !environment_1.environment.production
    ? [logger]
    : [];
exports.effects = [
    auth.AuthEffects,
    notify.NotifyEffects,
    profile.ProfileEffects,
    layout.LayoutEffects,
    calendar.CalendarEffects,
];
exports.services = [notify.NotifyService];
//# sourceMappingURL=index.js.map