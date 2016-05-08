import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Todo} from './todo.model';
import {CompletedFilterPipe} from './completed-filter.pipe';

@Component({
    selector: 'as-todolist',
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
        this.list = this.list.concat(Todo.clone(this.todo));
        this.todo.clear();
    }

    delTodo(todoIndex: number) {
        this.list = this.list.filter(
            (todo, index) => index !== todoIndex);
    }
}
