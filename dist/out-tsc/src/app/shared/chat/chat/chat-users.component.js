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
var chat_service_1 = require("@app/core/services/chat.service");
var ChatUsersComponent = /** @class */ (function () {
    function ChatUsersComponent(chatService) {
        this.chatService = chatService;
        this.filter = '';
        this.isOpen = false;
    }
    ChatUsersComponent.prototype.openToggle = function () {
        this.isOpen = !this.isOpen;
    };
    ChatUsersComponent.prototype.messageTo = function (user) {
        this.chatService.messageTo(user);
    };
    ChatUsersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ChatUsersComponent.prototype, "users", void 0);
    ChatUsersComponent = __decorate([
        core_1.Component({
            selector: 'chat-users',
            templateUrl: './chat-users.component.html',
        }),
        __metadata("design:paramtypes", [chat_service_1.ChatService])
    ], ChatUsersComponent);
    return ChatUsersComponent;
}());
exports.ChatUsersComponent = ChatUsersComponent;
//# sourceMappingURL=chat-users.component.js.map