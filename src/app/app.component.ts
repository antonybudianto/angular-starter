import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodolistComponent} from './todolist/todolist.component';
import {LoggerService} from './blocks/logger.service';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.html',
    directives: [FORM_DIRECTIVES, TodolistComponent]
})
export class AppComponent {
	private logger: LoggerService;
	private name:string = 'Antony';

	constructor(logger: LoggerService) {
		this.logger = logger;
	}
}