export class Todo {
    public name: string;
    public done: boolean;

    static clone(todo: Todo): Todo {
        return new Todo(todo.name, todo.done);
    }

    constructor(name: string, done = false) {
        this.name = name;
        this.done = done;
    }

    clear() {
        this.name = '';
        this.done = false;
    }
}
