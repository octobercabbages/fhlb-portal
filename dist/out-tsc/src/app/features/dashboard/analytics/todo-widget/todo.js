"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo(title, state) {
        this.id = '' + Todo._id++;
        this.title = title;
        this.state = state;
        this.createdAt = new Date();
    }
    Todo._id = 0;
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map