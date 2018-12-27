"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var calendar_actions_1 = require("./calendar.actions");
exports.initialState = {
    events: [],
    samples: [],
    removeAfterDrop: false,
};
function calendarReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case calendar_actions_1.CalendarActionTypes.LoadEventsSuccess:
            return __assign({}, state, { events: action.payload.events, samples: action.payload.samples });
        case calendar_actions_1.CalendarActionTypes.AddSample:
            return __assign({}, state, { samples: state.samples.slice().concat(action.payload) });
        case calendar_actions_1.CalendarActionTypes.AddEvent:
            return __assign({}, state, { events: state.events.slice().concat(__assign({}, action.payload.event)), samples: state.removeAfterDrop ? state.samples.filter(function (_) { return _.id !== action.payload.sampleId; }) : state.samples.slice() });
        case calendar_actions_1.CalendarActionTypes.ChangeSampleDrop:
            return __assign({}, state, { removeAfterDrop: action.payload });
        default:
            return state;
    }
}
exports.calendarReducer = calendarReducer;
//# sourceMappingURL=calendar.reducer.js.map