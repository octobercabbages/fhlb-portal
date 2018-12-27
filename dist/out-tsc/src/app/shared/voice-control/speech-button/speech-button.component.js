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
var voice_control_service_1 = require("@app/core/services/voice/voice-control.service");
var modal_1 = require("ngx-bootstrap/modal");
var SpeechButtonComponent = /** @class */ (function () {
    function SpeechButtonComponent(modalService, voiceControlService) {
        var _this = this;
        this.modalService = modalService;
        this.voiceControlService = voiceControlService;
        this.hasError = false;
        this.enabled = false;
        this.isToggled = false;
        this.isPopoverOpen = false;
        this.subs = {
            speech: null,
            help: null
        };
        this.enabled = this.voiceControlService.state.enabled && this.voiceControlService.state.available;
        this.subs.speech = this.voiceControlService.speechEvent$.subscribe(function (event) {
            _this.respondTo(event);
        });
        this.subs.help = this.voiceControlService.showHelp$.subscribe(function (value) {
            if (value) {
                _this.openHelpModal();
            }
            else {
                _this.closeHelpModal();
            }
        });
    }
    SpeechButtonComponent.prototype.ngOnInit = function () { };
    SpeechButtonComponent.prototype.ngOnDestroy = function () {
        this.subs.speech && this.subs.speech.unsubscribe();
        this.subs.help && this.subs.help.unsubscribe();
    };
    SpeechButtonComponent.prototype.openHelpModal = function () {
        this.modalRef = this.modalService.show(this.helpTemplate);
    };
    SpeechButtonComponent.prototype.closeHelpModal = function () {
        this.modalRef && this.modalRef.hide();
    };
    SpeechButtonComponent.prototype.toggleVoiceControl = function () {
        var _this = this;
        this.isToggled = !this.isToggled;
        if (!this.voiceControlService.state.started) {
            this.voiceControlService.voiceControlOn();
        }
        else {
            this.voiceControlService.voiceControlOff();
        }
        if (!this.isToggled) {
            setTimeout(function () {
                _this.isPopoverOpen = false;
            }, 10);
        }
        else {
            this.isPopoverOpen = true;
        }
    };
    SpeechButtonComponent.prototype.respondTo = function (event) {
        if (!event)
            return;
        switch (event.type) {
            case 'start':
                this.hasError = false;
                break;
            case 'error':
                this.hasError = true;
                break;
            case 'match':
            case 'no match':
                if (this.isToggled) {
                    this.isPopoverOpen = false;
                }
                break;
        }
    };
    __decorate([
        core_1.ViewChild('popoverRef'),
        __metadata("design:type", Object)
    ], SpeechButtonComponent.prototype, "popoverRef", void 0);
    __decorate([
        core_1.ViewChild('helpTemplate'),
        __metadata("design:type", Object)
    ], SpeechButtonComponent.prototype, "helpTemplate", void 0);
    SpeechButtonComponent = __decorate([
        core_1.Component({
            selector: 'sa-speech-button',
            templateUrl: './speech-button.component.html',
            styles: [".vc-title-error {display: block;}"]
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            voice_control_service_1.VoiceControlService])
    ], SpeechButtonComponent);
    return SpeechButtonComponent;
}());
exports.SpeechButtonComponent = SpeechButtonComponent;
//# sourceMappingURL=speech-button.component.js.map