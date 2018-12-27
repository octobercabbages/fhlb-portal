"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tree_views_routing_1 = require("./tree-views.routing");
var tree_views_component_1 = require("./tree-views.component");
var shared_module_1 = require("@app/shared/shared.module");
var tree_view_module_1 = require("@app/shared/ui/tree-view/tree-view.module");
var TreeViewsModule = /** @class */ (function () {
    function TreeViewsModule() {
    }
    TreeViewsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                tree_views_routing_1.treeViewsRouting,
                shared_module_1.SharedModule,
                tree_view_module_1.TreeViewModule
            ],
            declarations: [tree_views_component_1.TreeViewsComponent]
        })
    ], TreeViewsModule);
    return TreeViewsModule;
}());
exports.TreeViewsModule = TreeViewsModule;
//# sourceMappingURL=tree-views.module.js.map