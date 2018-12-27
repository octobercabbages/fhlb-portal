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
var release_1 = require("@swimlane/ngx-datatable/release");
var services_1 = require("@app/core/services");
var PagedTableComponent = /** @class */ (function () {
    function PagedTableComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.rows = [];
        this.temp = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.pageSize = 10;
        this.controls = {
            pageSize: 10,
            filter: '',
        };
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' },
        ];
    }
    PagedTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/tables/companies.json').subscribe(function (data) {
            // cache our list
            _this.temp = data.slice();
            // push our inital complete list
            _this.rows = data;
            _this.loadingIndicator = false;
        });
    };
    PagedTableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return !val || ['name', 'gender', 'company'].some(function (field) {
                return d[field].toLowerCase().indexOf(val) !== -1;
            });
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    PagedTableComponent.prototype.updatePageSize = function (value) {
        if (!this.controls.filter) {
            // update the rows
            this.rows = this.temp.slice();
            // Whenever the filter changes, always go back to the first page
            this.table.offset = 0;
        }
        this.controls.pageSize = parseInt(value);
        this.table.limit = this.controls.pageSize;
        window.dispatchEvent(new Event('resize'));
    };
    __decorate([
        core_1.ViewChild(release_1.DatatableComponent),
        __metadata("design:type", release_1.DatatableComponent)
    ], PagedTableComponent.prototype, "table", void 0);
    PagedTableComponent = __decorate([
        core_1.Component({
            selector: 'paged-table-demo',
            templateUrl: './paged-table.component.html'
        }),
        __metadata("design:paramtypes", [services_1.JsonApiService])
    ], PagedTableComponent);
    return PagedTableComponent;
}());
exports.PagedTableComponent = PagedTableComponent;
//# sourceMappingURL=paged-table.component.js.map