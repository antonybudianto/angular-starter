import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {AppComponent} from './app.component';
import {LoggerService} from './blocks/logger.service';

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    LoggerService, ROUTER_PROVIDERS
]);
