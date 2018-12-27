"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Action} from "redux"
var clone = require('clone');
// import {combineReducers} from 'redux'
var crop_reducer_1 = require("./crop-reducer");
var options_reducer_1 = require("./options-reducer");
exports.configJcropInitialState = function (storeId) {
    return {
        options: options_reducer_1.defaultOptionsState(storeId),
        crop: crop_reducer_1.defaultCropState(storeId)
    };
};
// export const jcropReducer
// = combineReducers({
// crop: cropReducer,
// options: optionsReducer
// });
//# sourceMappingURL=jcrop-reducer.js.map