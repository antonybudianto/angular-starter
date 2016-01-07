import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'child',
	template: `
		<h5>{{text}}</h5>
		<h6>{{fromParent}}</h6>
		<button (click)="changeMe()" class="btn btn-primary">Change</button>
	`
})
export class ChildComponent {
	@Input() text: string;
	@Input() fromParent: string;
	@Output() fromParentChange: EventEmitter<any>;
	num: number = 0;

	constructor() {
		this.fromParentChange = new EventEmitter<any>();
	}

	changeMe() {
		this.num++;
		this.fromParent = 'Changed from child. Count: ' + this.num;
		this.fromParentChange.next(this.fromParent);
	}
}