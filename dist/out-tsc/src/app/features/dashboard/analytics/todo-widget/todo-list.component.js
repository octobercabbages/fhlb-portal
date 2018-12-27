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
var todo_service_1 = require("./todo.service");
var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(el, todoService) {
        this.el = el;
        this.todoService = todoService;
        this.items = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.subject.subscribe(function (todos) {
            _this.setItems(todos);
        });
        this.setItems(this.todoService.todos);
    };
    TodoListComponent.prototype.setItems = function (todos) {
        var _this = this;
        this.items = todos.filter(function (it) { return it.state == _this.state.name; });
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.todoService.toggleTodo(todo);
    };
    TodoListComponent.prototype.deleteTodo = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "state", void 0);
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: './todo-list.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, todo_service_1.TodoService])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map