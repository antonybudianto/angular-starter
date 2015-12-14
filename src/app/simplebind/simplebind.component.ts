import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
	moduleId: module.id,
	selector: 'simplebind',
	templateUrl: 'simplebind.html'
})
export class SimplebindComponent {
	@Input() myname: string;
	private count: number = 0;

	changeCount() {
		this.count++;
	}
}