import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { VENDOR_PROVIDERS } from './provider/index';
import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    VENDOR_PROVIDERS,
    APP_PROVIDERS
]);
