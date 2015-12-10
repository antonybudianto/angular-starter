import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Todolist} from './todolist.model';

@Component({
    selector: 'todolist',
    templateUrl: 'app/todolist/todolist.html',
    directives: CORE_DIRECTIVES
})
export class TodolistComponent {
    public todoValue: string;
    private list: Todolist[] = [
        new Todolist('Its cool'),
        new Todolist('Hello', true)
    ];

    addTodo() {
        this.list.push(new Todolist(this.todoValue));
    }

    delTodo(index: number) {
        this.list.splice(index, 1);
    }
}