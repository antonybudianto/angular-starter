export class Todo {
    public name: string;
    public done: boolean;

    static create(todo: Todo) {
        return new Todo(todo.name, todo.done);
    }

    constructor(name: string, done?: boolean) {
        this.name = name;
        this.done = done;
    }

    check() {
        this.done = !this.done;
    }

    clear() {
        this.name = '';
        this.done = false;
    }
}
