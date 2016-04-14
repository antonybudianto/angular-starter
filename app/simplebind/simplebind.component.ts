import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'simplebind',
    templateUrl: 'app/simplebind/simplebind.html',
    directives: [ChildComponent]
})
export class SimplebindComponent {
    private myname: string;

    constructor() {
        this.myname = 'Simple';
    }
}
