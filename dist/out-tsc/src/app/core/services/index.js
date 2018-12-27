"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var storage_service_1 = require("./storage.service");
var auth_token_service_1 = require("./auth-token.service");
var auth_service_1 = require("./auth.service");
var token_interceptor_1 = require("./token.interceptor");
var json_api_service_1 = require("./json-api.service");
var user_service_1 = require("./user.service");
var chat_service_1 = require("./chat.service");
var notification_service_1 = require("./notification.service");
var body_service_1 = require("./body.service");
var layout_service_1 = require("./layout.service");
var sound_service_1 = require("./sound.service");
var fromVoice = require("./voice");
exports.services = [
    storage_service_1.StorageService,
    auth_token_service_1.AuthTokenService,
    auth_service_1.AuthService,
    token_interceptor_1.TokenInterceptor,
    json_api_service_1.JsonApiService,
    user_service_1.UserService,
    chat_service_1.ChatService,
    notification_service_1.NotificationService,
    body_service_1.BodyService,
    layout_service_1.LayoutService,
    sound_service_1.SoundService,
    fromVoice.VoiceControlService,
    fromVoice.VoiceRecognitionService,
];
__export(require("./storage.service"));
__export(require("./auth-token.service"));
__export(require("./auth.service"));
__export(require("./token.interceptor"));
__export(require("./json-api.service"));
__export(require("./user.service"));
__export(require("./chat.service"));
__export(require("./notification.service"));
__export(require("./body.service"));
__export(require("./layout.service"));
__export(require("./sound.service"));
__export(require("./voice"));
//# sourceMappingURL=index.js.map