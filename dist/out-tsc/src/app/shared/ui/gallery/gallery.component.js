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
var animations_1 = require("@angular/animations");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.deleteRequest = new core_1.EventEmitter();
        this.editRequest = new core_1.EventEmitter();
    }
    GalleryComponent.prototype.activate = function (picture) {
        this.pictures.filter(function (it) { return it.active && it != picture; }).map(this.deactivate);
        if (picture.active) {
            this.deactivate(picture);
            this.current = null;
        }
        else {
            picture.active = true;
            picture.state = this.current ? 'stay' : 'in';
            this.current = picture;
        }
    };
    GalleryComponent.prototype.deactivate = function (picture) {
        picture.active = false;
        picture.state = 'out';
    };
    GalleryComponent.prototype.deletePicture = function (picture) {
        this.deleteRequest.emit(picture);
    };
    GalleryComponent.prototype.editPicture = function (picture) {
        this.editRequest.emit(picture);
    };
    GalleryComponent.prototype.ngOnInit = function () {
        this.pictures.forEach(function (it) {
            it.active = false;
            it.state = 'out';
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], GalleryComponent.prototype, "pictures", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "deleteRequest", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "editRequest", void 0);
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'sa-gallery',
            styles: ["\n    .superbox-show.active{\n  display: block !important;\n    }\n\n"],
            template: "\n    <div class=\"superbox\">\n      <div  >      \n          <ng-template ngFor let-item=\"$implicit\" [ngForOf]=\"pictures\"><!--\n          --><div  \n             [@slideToggle]=\"item.state\"\n           class=\"superbox-list\" (click)=\"activate(item)\">\n              <img [src]=\"item.src\" [alt]=\"item.alt\" [title]=\"item.title\" class=\"superbox-img\"/>\n             </div><!--\n          --><div class=\"superbox-show\" [class.active]=\"item.active\" [@viewportToggle]=\"item.state\">\n              <img src=\"{{item.img}}\" *ngIf=\"item.active\" [@fadeToggle]=\"item.state\" class=\"superbox-current-img\">\n              <div id=\"imgInfoBox\" class=\"superbox-imageinfo inline-block\">\n                <h1>{{item.title}}</h1><span>\n                <p><em>{{item.img}}</em></p>\n                <p class=\"superbox-img-description\">{{item.alt}}</p>\n                <p>\n                  <a (click)=\"editPicture(item)\" class=\"btn btn-primary btn-sm\">Edit Image</a> \n                  <a (click)=\"deletePicture(item)\" class=\"btn btn-danger btn-sm\">Delete</a>\n                  </p></span> \n              </div>\n             \n              <div class=\"superbox-close txt-color-white\" (click)=\"deactivate(item)\"><i class=\"fa fa-times fa-lg\"></i></div>\n            </div\n            ></ng-template>\n        <div class=\"superbox-float\" ></div>\n      </div>\n    </div>\n  ",
            animations: [
                animations_1.trigger('slideToggle', [
                    animations_1.state('out', animations_1.style({
                        backgroundColor: '#eee',
                    })),
                    animations_1.state('in', animations_1.style({
                        backgroundColor: '#cfd8dc',
                    })),
                    animations_1.transition('out => in', animations_1.animate('100ms ease-in')),
                    animations_1.transition('in => out', animations_1.animate('100ms ease-out'))
                ]),
                animations_1.trigger('viewportToggle', [
                    animations_1.state('out', animations_1.style({
                        height: 0,
                    })),
                    animations_1.state('in', animations_1.style({
                        height: '*',
                    })),
                    animations_1.state('stay', animations_1.style({
                        height: '*',
                    })),
                    animations_1.transition('out => in', [
                        animations_1.style({
                            display: 'block'
                        }),
                        animations_1.animate('250ms ease-out')
                    ]),
                    animations_1.transition('in => stay', [
                        animations_1.animate('0ms ease-out')
                    ]),
                    animations_1.transition('* => out', animations_1.animate('250ms ease-in'))
                ]),
                animations_1.trigger('fadeToggle', [
                    animations_1.state('out', animations_1.style({
                        opacity: 0,
                    })),
                    animations_1.state('in', animations_1.style({
                        opacity: 1,
                    })),
                    animations_1.state('stay', animations_1.style({
                        opacity: 1,
                    })),
                    animations_1.transition('out <=> *', [
                        animations_1.animate('250ms 250ms ease-out')
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map