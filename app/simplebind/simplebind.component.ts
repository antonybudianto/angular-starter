import {Component} from 'angular2/core';

@Component({
    selector: 'simplebind',
    templateUrl: 'app/simplebind/simplebind.html'
})
export class SimplebindComponent {
    private myname: string;
    private count: number;

    constructor() {
        this.myname = 'Simple';
        this.count = 0;
    }

    changeCount() {
        this.count++;
    }
}
