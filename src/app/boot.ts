import {bootstrap} from 'angular2/angular2';
import {AppComponent} from './app.component';
import {LoggerService} from './blocks/logger.service';

bootstrap(AppComponent, [
	LoggerService
]);