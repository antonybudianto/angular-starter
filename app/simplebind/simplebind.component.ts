import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';
import _ from 'lodash';

@Component({
    selector: 'simplebind',
    templateUrl: 'app/simplebind/simplebind.html',
    directives: [ChildComponent]
})
export class SimplebindComponent {
    private myname: string;

    constructor() {
        this.myname = 'Simple';
        console.log(_.map([1, 2, 3], val => val % 2 === 0 ? 'even' : 'odd'));
    }
}
