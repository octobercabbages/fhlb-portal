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
var smartadmin_config_1 = require("@app/core/smartadmin.config");
var sound_service_1 = require("@app/core/services/sound.service");
var speech_recognition_api_1 = require("./speech-recognition.api");
var voice_recognition_service_1 = require("./voice-recognition.service");
var notification_service_1 = require("@app/core/services/notification.service");
var body_service_1 = require("@app/core/services/body.service");
var router_1 = require("@angular/router");
var layout_service_1 = require("@app/core/services/layout.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var VoiceControlService = /** @class */ (function () {
    function VoiceControlService(componentFactoryResolver, app, soundService, voiceRecognitionService, notificationService, bodyService, router, layoutService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.app = app;
        this.soundService = soundService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.notificationService = notificationService;
        this.bodyService = bodyService;
        this.router = router;
        this.layoutService = layoutService;
        this.state = {
            enabled: !!smartadmin_config_1.config.voice_command,
            available: false,
            autoStart: !!smartadmin_config_1.config.voice_command_auto,
            localStorage: !!smartadmin_config_1.config.voice_localStorage,
            lang: smartadmin_config_1.config.voice_command_lang,
            started: false,
        };
        this.showHelp$ = new rxjs_1.BehaviorSubject(false);
        this.speechEvent$ = new rxjs_1.BehaviorSubject(null);
        this.state.available = !!speech_recognition_api_1.SpeechRecognition;
        if (smartadmin_config_1.config.voice_command_auto) {
            this.voiceControlOn();
        }
        this.voiceRecognitionService.events
            .pipe(operators_1.tap(function (event) { return _this.speechEvent$.next(event); }))
            .subscribe(function (event) {
            return _this.respondToEvent(event);
        });
    }
    VoiceControlService.prototype.showHelp = function () {
        this.showHelp$.next(true);
    };
    VoiceControlService.prototype.hideHelp = function () {
        this.showHelp$.next(false);
    };
    VoiceControlService.prototype.voiceControlOn = function () {
        this.soundService.play('voice_on');
        if (!this.voiceRecognitionService.commandsList.length) {
            this.voiceRecognitionService.addCommands(smartadmin_config_1.config.voice_commands);
        }
        this.voiceRecognitionService.start();
        this.state.started = true;
        this.bodyService.addClass('voice-command-active');
    };
    VoiceControlService.prototype.voiceControlOff = function () {
        this.soundService.play('voice_off');
        this.voiceRecognitionService.abort();
        this.state.started = false;
        this.bodyService.removeClass('voice-command-active');
    };
    VoiceControlService.prototype.respondToEvent = function (event) {
        switch (event.type) {
            case 'start':
                this.bodyService.removeClass("service-not-allowed");
                this.bodyService.addClass("service-allowed");
                break;
            case 'error':
                this.bodyService.removeClass("service-allowed");
                this.bodyService.addClass("service-not-allowed");
                break;
            case 'match':
                this.notificationService.smallBox({
                    title: event.payload,
                    content: "loading...",
                    color: "#333",
                    sound_file: 'voice_alert',
                    timeout: 2000
                });
                break;
            case 'no match':
                this.notificationService.smallBox({
                    title: "Error: <strong>" + ' " ' + event.payload + ' " ' + "</strong> no match found!",
                    content: "Please speak clearly into the microphone",
                    color: "#a90329",
                    timeout: 5000,
                    icon: "fa fa-microphone"
                });
                break;
            case 'action':
                this.respondToAction(event);
                break;
        }
    };
    VoiceControlService.prototype.respondToAction = function (action) {
        switch (action.actionType) {
            case 'voice':
                switch (action.payload) {
                    case 'help on':
                        this.showHelp();
                        break;
                    case 'help off':
                        this.hideHelp();
                        break;
                    case 'stop':
                        this.voiceControlOff();
                        this.notificationService.smallBox({
                            title: "VOICE COMMAND OFF",
                            content: "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                            color: "#40ac2b",
                            sound_file: 'voice_off',
                            timeout: 8000,
                            icon: "fa fa-microphone-slash"
                        });
                        break;
                }
                break;
            case 'navigate':
                this.router.navigate(action.payload);
                break;
            case 'layout':
                switch (action.payload) {
                    case 'show navigation':
                        this.layoutService.onCollapseMenu(false);
                        break;
                    case 'hide navigation':
                        this.layoutService.onCollapseMenu(true);
                        break;
                }
                break;
            case 'sound':
                switch (action.payload) {
                    case 'mute':
                        this.soundService.mute();
                        break;
                    case 'sound on':
                        this.soundService.soundOn();
                        break;
                }
                break;
        }
    };
    VoiceControlService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.ApplicationRef,
            sound_service_1.SoundService,
            voice_recognition_service_1.VoiceRecognitionService,
            notification_service_1.NotificationService,
            body_service_1.BodyService,
            router_1.Router,
            layout_service_1.LayoutService])
    ], VoiceControlService);
    return VoiceControlService;
}());
exports.VoiceControlService = VoiceControlService;
//# sourceMappingURL=voice-control.service.js.map