var Todolist = (function () {
    function Todolist(name, done) {
        this.name = name;
        this.done = done;
    }
    Todolist.prototype.check = function () {
        this.done = !this.done;
    };
    return Todolist;
})();
exports.Todolist = Todolist;
//# sourceMappingURL=todolist.model.js.map