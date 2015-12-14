import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {LoggerService} from './blocks/logger.service';

bootstrap(AppComponent, [
	LoggerService
]);