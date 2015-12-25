export class Todolist {
    public name: string;
    public done: boolean;

    constructor(name: string, done?: boolean) {
        this.name = name;
        this.done = done;
    }

    check() {
        this.done = !this.done;
    }
}
