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
var CalendarActionTypes;
(function (CalendarActionTypes) {
    CalendarActionTypes["LoadEvents"] = "[Calendar] Load Events";
    CalendarActionTypes["LoadEventsSuccess"] = "[Calendar] Load Events Success";
    CalendarActionTypes["AddEvent"] = "[Calendar] Add Event";
    CalendarActionTypes["AddSample"] = "[Calendar] Add Sample";
    CalendarActionTypes["ChangeSampleDrop"] = "[Calendar] Change Sample Drop";
})(CalendarActionTypes = exports.CalendarActionTypes || (exports.CalendarActionTypes = {}));
var LoadEvents = /** @class */ (function () {
    function LoadEvents() {
        this.type = CalendarActionTypes.LoadEvents;
    }
    return LoadEvents;
}());
exports.LoadEvents = LoadEvents;
var LoadEventsSuccess = /** @class */ (function () {
    function LoadEventsSuccess(payload) {
        this.payload = payload;
        this.type = CalendarActionTypes.LoadEventsSuccess;
    }
    return LoadEventsSuccess;
}());
exports.LoadEventsSuccess = LoadEventsSuccess;
var AddEvent = /** @class */ (function () {
    function AddEvent(payload) {
        this.payload = payload;
        this.type = CalendarActionTypes.AddEvent;
        this.payload = {
            sampleId: payload.id,
            event: __assign({}, payload, { id: generateEventId() })
        };
    }
    return AddEvent;
}());
exports.AddEvent = AddEvent;
var AddSample = /** @class */ (function () {
    function AddSample(payload) {
        this.payload = payload;
        this.type = CalendarActionTypes.AddSample;
        this.payload.id = generateEventId();
    }
    return AddSample;
}());
exports.AddSample = AddSample;
var ChangeSampleDrop = /** @class */ (function () {
    function ChangeSampleDrop(payload) {
        this.payload = payload;
        this.type = CalendarActionTypes.ChangeSampleDrop;
    }
    return ChangeSampleDrop;
}());
exports.ChangeSampleDrop = ChangeSampleDrop;
function generateEventId() {
    return Math.random().toString(36).slice(2);
}
exports.generateEventId = generateEventId;
//# sourceMappingURL=calendar.actions.js.map