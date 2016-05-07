import {
    Component,
    ChangeDetectorRef,
    ChangeDetectionStrategy
} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Todo} from './todo.model';
import {CompletedFilterPipe} from './completed-filter.pipe';

@Component({
    selector: 'as-todolist',
    templateUrl: 'app/todolist/todolist.html',
    directives: [CORE_DIRECTIVES],
    pipes: [CompletedFilterPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistComponent {
    public todo: Todo;
    private list: Todo[];
    private showCompleted: Boolean;

    constructor(private _ref: ChangeDetectorRef) {
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
        this._ref.markForCheck();
    }

    delTodo(index: number) {
        this.list = [].concat(
            this.list.slice(0, index),
            this.list.slice(index + 1, this.list.length)
        );
        this._ref.markForCheck();
    }
}
