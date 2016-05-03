import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './app.component';
import {LoggerService} from './blocks/logger.service';

bootstrap(AppComponent, [
    LoggerService, ROUTER_PROVIDERS
]);
