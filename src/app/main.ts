import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
]);
