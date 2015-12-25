import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Todo} from './todo.model';

@Component({
    selector: 'todolist',
    templateUrl: 'app/todolist/todolist.html',
    directives: [CORE_DIRECTIVES]
})
export class TodolistComponent {
    public todo: Todo;
    private list: Todo[];

    constructor() {
        this.todo = Todo.create(new Todo('', false));
        this.list = [
            new Todo('Its cool'),
            new Todo('Hello', true)
        ];
    }

    addTodo() {
        this.list.push(Todo.create(this.todo));
        this.todo.clear();
    }

    delTodo(index: number) {
        this.list.splice(index, 1);
    }
}
