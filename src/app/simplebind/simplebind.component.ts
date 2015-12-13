import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

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