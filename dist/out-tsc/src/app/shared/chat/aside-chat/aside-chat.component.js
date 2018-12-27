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
var AsideChatComponent = /** @class */ (function () {
    function AsideChatComponent(chatService) {
        this.chatService = chatService;
        this.classes = 'chat-users top-menu-invisible';
        this.open = false;
        this.filter = '';
        this.users = [];
    }
    AsideChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getChatState().subscribe(function (state) {
            _this.users = state.users.map(function (it) {
                it.visible = true;
                return it;
            });
        });
    };
    AsideChatComponent.prototype.onFilter = function () {
        var _this = this;
        this.users.forEach(function (it) {
            if (!_this.filter) {
                it.visible = true;
            }
            else {
                it.visible = it.username.toLowerCase().indexOf(_this.filter.toLocaleLowerCase()) > -1;
            }
        });
    };
    AsideChatComponent.prototype.openToggle = function (e) {
        this.open = !this.open;
        $(this.chatUsersList.nativeElement).slideToggle();
        e.preventDefault();
    };
    __decorate([
        core_1.ViewChild('chatUsersList'),
        __metadata("design:type", Object)
    ], AsideChatComponent.prototype, "chatUsersList", void 0);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], AsideChatComponent.prototype, "classes", void 0);
    __decorate([
        core_1.HostBinding('class.open'),
        __metadata("design:type", Object)
    ], AsideChatComponent.prototype, "open", void 0);
    AsideChatComponent = __decorate([
        core_1.Component({
            selector: 'aside-chat,[aside-chat]',
            templateUrl: './aside-chat.component.html',
            styles: [":host{display:block}"]
        }),
        __metadata("design:paramtypes", [chat_service_1.ChatService])
    ], AsideChatComponent);
    return AsideChatComponent;
}());
exports.AsideChatComponent = AsideChatComponent;
//# sourceMappingURL=aside-chat.component.js.map