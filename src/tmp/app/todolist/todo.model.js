"use strict";
var Todo = (function () {
    function Todo(name, done) {
        if (done === void 0) { done = false; }
        this.name = name;
        this.done = done;
    }
    Todo.clone = function (todo) {
        return new Todo(todo.name, todo.done);
    };
    Todo.prototype.clear = function () {
        this.name = '';
        this.done = false;
    };
    return Todo;
}());
exports.Todo = Todo;

//# sourceMappingURL=todo.model.js.map
