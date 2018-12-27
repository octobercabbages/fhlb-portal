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
var AsideChatUserComponent = /** @class */ (function () {
    function AsideChatUserComponent() {
        this.user = {};
        this.state = {
            chatId: 'chatbox-user-' + AsideChatUserComponent_1.idCounter++
        };
    }
    AsideChatUserComponent_1 = AsideChatUserComponent;
    AsideChatUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return require('../aside-chat/aside-chat-boxes'); }).then(function (_) {
            _this.chatboxManager = _.chatboxManager;
        });
    };
    AsideChatUserComponent.prototype.openChatBox = function (e) {
        e.preventDefault();
        var user = this.user;
        var _a = user.username.split(/ /), firstname = _a[0], lastname = _a[1];
        var id = this.state.chatId;
        if (user.status != 'ofline') {
            this.chatboxManager.addBox(id, {
                title: user.username,
                first_name: firstname,
                last_name: lastname,
                status: user.status || 'online',
                alertmsg: user.status == 'busy' ? user.username + ' is in a meeting. Please do not disturb!' : '',
                alertshow: user.status == 'busy'
                //you can add your own options too
            });
        }
    };
    var AsideChatUserComponent_1;
    AsideChatUserComponent.idCounter = 0;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AsideChatUserComponent.prototype, "user", void 0);
    AsideChatUserComponent = AsideChatUserComponent_1 = __decorate([
        core_1.Component({
            selector: 'aside-chat-user',
            templateUrl: './aside-chat-user.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], AsideChatUserComponent);
    return AsideChatUserComponent;
}());
exports.AsideChatUserComponent = AsideChatUserComponent;
//# sourceMappingURL=aside-chat-user.component.js.map