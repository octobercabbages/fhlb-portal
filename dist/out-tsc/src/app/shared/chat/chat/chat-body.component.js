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
var ChatBodyComponent = /** @class */ (function () {
    function ChatBodyComponent(chatService, el) {
        this.chatService = chatService;
        this.el = el;
    }
    ChatBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.newMessage.subscribe(function (message) {
            _this.messages.push(message);
            _this.scrollDown();
        });
    };
    ChatBodyComponent.prototype.messageTo = function (user) {
        this.chatService.messageTo(user);
    };
    ChatBodyComponent.prototype.scrollDown = function () {
        var $body = $('#chat-body', this.el.nativeElement);
        $body.animate({ scrollTop: $body[0].scrollHeight });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ChatBodyComponent.prototype, "messages", void 0);
    ChatBodyComponent = __decorate([
        core_1.Component({
            selector: 'chat-body',
            templateUrl: './chat-body.component.html',
        }),
        __metadata("design:paramtypes", [chat_service_1.ChatService, core_1.ElementRef])
    ], ChatBodyComponent);
    return ChatBodyComponent;
}());
exports.ChatBodyComponent = ChatBodyComponent;
//# sourceMappingURL=chat-body.component.js.map