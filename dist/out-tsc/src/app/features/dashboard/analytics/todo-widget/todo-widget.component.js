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
var todo_1 = require("./todo");
var TodoWidgetComponent = /** @class */ (function () {
    function TodoWidgetComponent(todoService) {
        this.todoService = todoService;
        this.states = this.todoService.states;
    }
    TodoWidgetComponent.prototype.ngOnInit = function () {
    };
    TodoWidgetComponent.prototype.createTodo = function () {
        this.todoService.createTodo(this.newTodo);
        this.newTodo = null;
    };
    TodoWidgetComponent.prototype.toggleAdd = function () {
        if (this.newTodo) {
            this.newTodo = null;
        }
        else {
            this.newTodo = new todo_1.Todo();
            this.newTodo.state = 'Important';
        }
    };
    TodoWidgetComponent = __decorate([
        core_1.Component({
            selector: 'todo-widget',
            templateUrl: './todo-widget.component.html',
            providers: [todo_service_1.TodoService],
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoService])
    ], TodoWidgetComponent);
    return TodoWidgetComponent;
}());
exports.TodoWidgetComponent = TodoWidgetComponent;
//# sourceMappingURL=todo-widget.component.js.map