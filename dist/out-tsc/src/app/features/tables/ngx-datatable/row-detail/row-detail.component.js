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
var services_1 = require("@app/core/services");
var RowDetailComponent = /** @class */ (function () {
    function RowDetailComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.rows = [];
        this.expanded = {};
    }
    RowDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/tables/datatables.filters.json').subscribe(function (data) {
            _this.rows = data;
        });
    };
    RowDetailComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    RowDetailComponent.prototype.toggleExpandRow = function (row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    };
    RowDetailComponent.prototype.onDetailToggle = function (event) {
        console.log('Detail Toggled', event);
    };
    __decorate([
        core_1.ViewChild('myTable'),
        __metadata("design:type", Object)
    ], RowDetailComponent.prototype, "table", void 0);
    RowDetailComponent = __decorate([
        core_1.Component({
            selector: 'row-detail-demo',
            templateUrl: './row-detail.component.html'
        }),
        __metadata("design:paramtypes", [services_1.JsonApiService])
    ], RowDetailComponent);
    return RowDetailComponent;
}());
exports.RowDetailComponent = RowDetailComponent;
//# sourceMappingURL=row-detail.component.js.map