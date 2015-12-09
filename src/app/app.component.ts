import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {LikeboxComponent} from './widgets/likebox/likebox.component';
import {LoggerService} from './blocks/logger.service';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.html',
    directives: [FORM_DIRECTIVES, LikeboxComponent]
})
export class AppComponent {
	private logger: LoggerService;
	private name:string = 'Antony';
	private myCount:number = 100;

	constructor(logger: LoggerService) {
		this.logger = logger;
	}

	clickMe() {
		this.myCount++;
	}

	likeSuccess(event: number) {
		this.logger.log('Like triggered');
		this.myCount = event;
	}
}