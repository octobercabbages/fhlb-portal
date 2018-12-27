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
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var DatatablesRestDemoComponent = /** @class */ (function () {
    function DatatablesRestDemoComponent(http) {
        var _this = this;
        this.http = http;
        this.REST_ROOT = 'https://jsonplaceholder.typicode.com';
        this.options = {
            dom: "Bfrtip",
            ajax: function (data, callback, settings) {
                _this.http.get(_this.REST_ROOT + '/posts')
                    .pipe(operators_1.map(function (data) { return (data.data || data); }), operators_1.catchError(_this.handleError))
                    .subscribe(function (data) {
                    console.log('data from rest endpoint', data);
                    callback({
                        aaData: data.slice(0, 100)
                    });
                });
            },
            columns: [
                { data: "userId" },
                { data: "id" },
                { data: "title" },
                { data: "body" },
            ]
        };
    }
    DatatablesRestDemoComponent.prototype.ngOnInit = function () { };
    DatatablesRestDemoComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs_1.Observable.throw(errMsg);
    };
    DatatablesRestDemoComponent = __decorate([
        core_1.Component({
            selector: 'datatables-rest-demo',
            templateUrl: './datatables-rest-demo.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DatatablesRestDemoComponent);
    return DatatablesRestDemoComponent;
}());
exports.DatatablesRestDemoComponent = DatatablesRestDemoComponent;
//# sourceMappingURL=datatables-rest-demo.component.js.map