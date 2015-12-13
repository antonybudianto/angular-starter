import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodolistComponent} from './todolist/todolist.component';
import {SimplebindComponent} from './simplebind/simplebind.component';
import {LoggerService} from './blocks/logger.service';

@Component({
	moduleId: module.id,
    selector: 'main-app',
    templateUrl: 'app.html',
    directives: [FORM_DIRECTIVES, TodolistComponent, SimplebindComponent]
})
export class AppComponent {
	private logger: LoggerService;
	public name:string = 'Antony Budianto';

	constructor(logger: LoggerService) {
		this.logger = logger;
	}
}