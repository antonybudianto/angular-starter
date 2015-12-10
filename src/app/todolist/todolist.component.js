var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var todolist_model_1 = require('./todolist.model');
var TodolistComponent = (function () {
    function TodolistComponent() {
        this.list = [
            new todolist_model_1.Todolist('Its cool'),
            new todolist_model_1.Todolist('Hello', true)
        ];
    }
    TodolistComponent.prototype.addTodo = function () {
        this.list.push(new todolist_model_1.Todolist(this.todoValue));
    };
    TodolistComponent.prototype.delTodo = function (index) {
        this.list.splice(index, 1);
    };
    TodolistComponent = __decorate([
        angular2_1.Component({
            selector: 'todolist',
            templateUrl: 'app/todolist/todolist.html',
            directives: angular2_1.CORE_DIRECTIVES
        }), 
        __metadata('design:paramtypes', [])
    ], TodolistComponent);
    return TodolistComponent;
})();
exports.TodolistComponent = TodolistComponent;
