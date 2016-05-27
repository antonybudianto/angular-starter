import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'as-simplebind',
    templateUrl: 'app/simplebind/simplebind.html',
    directives: [ChildComponent]
})
export class SimplebindComponent {
    private myname: string;

    constructor() {
        this.myname = 'Simple';
    }
}
