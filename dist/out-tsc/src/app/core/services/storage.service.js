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
var storage_1 = require("@ionic/storage");
var environment_1 = require("@env/environment");
var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        var _this = this;
        this.storage = storage;
        this.dump = function (db) {
            return _this.storage.set(environment_1.environment.smartadmin.db, JSON.stringify(db));
        };
    }
    StorageService.prototype.get = function (key) {
        return this.load().then(function (db) { return db[key]; });
    };
    /**
     * @returns value
     * @param key
     * @param value
     */
    StorageService.prototype.set = function (key, value) {
        return this.load().then(function (db) {
            db[key] = value;
            return db;
        }).then(this.dump).then(function (_) { return value; });
    };
    StorageService.prototype.remove = function (key) {
        return this.load().then(function (db) {
            db[key] = null;
            delete db[key];
            return db;
        }).then(this.dump);
    };
    StorageService.prototype.load = function () {
        return this.storage.get(environment_1.environment.smartadmin.db).then(function (db) {
            return db ? JSON.parse(db) : {};
        });
    };
    StorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_1.Storage])
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map