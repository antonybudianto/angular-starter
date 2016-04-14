import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Todo} from './todo.model';
import {CompletedFilterPipe} from './completed-filter.pipe';

@Component({
    selector: 'todolist',
    templateUrl: 'app/todolist/todolist.html',
    directives: [CORE_DIRECTIVES],
    pipes: [CompletedFilterPipe]
})
export class TodolistComponent {
    public todo: Todo;
    private list: Todo[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.todo = new Todo('Add me to list!', false);
        this.list = [
            new Todo('Its cool'),
            new Todo('Hello', true)
        ];
    }

    addTodo() {
        this.list.push(Todo.clone(this.todo));
        this.todo.clear();
    }

    delTodo(index: number) {
        this.list.splice(index, 1);
    }
}
