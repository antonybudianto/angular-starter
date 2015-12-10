import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'todolist',
    templateUrl: 'app/todolist/todolist.html',
    directives: CORE_DIRECTIVES
})
export class TodolistComponent {
    public todoValue: string;
    private list: string[] = [
        'Angular 2', 'is', 'cool'
    ];

    addTodo() {
        this.list.push(this.todoValue);
    }

    delTodo(index: number) {
        this.list.splice(index, 1);
    }
}