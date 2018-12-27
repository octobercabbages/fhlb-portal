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
var json_api_service_1 = require("../../core/services/json-api.service");
var rxjs_1 = require("rxjs");
var ChatService = /** @class */ (function () {
    function ChatService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.url = '/chat/chat.json';
        this.messageToSubject = new rxjs_1.Subject();
        this.newMessage = new rxjs_1.Subject();
    }
    ChatService.prototype.getChatState = function () {
        return this.jsonApiService.fetch(this.url);
    };
    ChatService.prototype.messageTo = function (user) {
        this.messageToSubject.next(user);
    };
    ChatService.prototype.sendMessage = function (message) {
        this.newMessage.next(message);
    };
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [json_api_service_1.JsonApiService])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map