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
var outlook_message_class_1 = require("./outlook-message.class");
var rxjs_1 = require("rxjs");
var services_1 = require("@app/core/services");
var operators_1 = require("rxjs/operators");
var OutlookService = /** @class */ (function () {
    function OutlookService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.state = {
            lastFolder: '',
            messages: []
        };
        this.activeFolder = new rxjs_1.Subject();
        this.messages = new rxjs_1.Subject();
    }
    OutlookService.prototype.getOutlook = function () {
        return this.jsonApiService.fetch('/outlook/outlook.json');
    };
    OutlookService.prototype.getMessages = function (folder) {
        var _this = this;
        this.jsonApiService.fetch('/outlook/' + folder + '.json')
            .pipe(operators_1.map(this.mapToMessages), operators_1.tap(function (data) {
            _this.state.lastFolder = folder;
            _this.state.messages = data;
            _this.activeFolder.next(folder);
            _this.messages.next(_this.state.messages);
            return data;
        }))
            .subscribe();
    };
    OutlookService.prototype.getMessage = function (id) {
        return this.jsonApiService.fetch('/outlook/message.json');
    };
    OutlookService.prototype.deleteSelected = function () {
        this.messages.next(this.state.messages.filter(function (it) { return !it.selected; }));
    };
    OutlookService.prototype.mapToMessages = function (rawMessages) {
        return rawMessages.map(function (it) { return new outlook_message_class_1.OutlookMessage(it); });
    };
    OutlookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.JsonApiService])
    ], OutlookService);
    return OutlookService;
}());
exports.OutlookService = OutlookService;
//# sourceMappingURL=outlook.service.js.map