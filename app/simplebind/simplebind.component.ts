import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'simplebind',
	templateUrl: 'app/simplebind/simplebind.html'
})
export class SimplebindComponent {
	private myname: string = "Simple";
	private count: number = 0;

	changeCount() {
		this.count++;
	}
}