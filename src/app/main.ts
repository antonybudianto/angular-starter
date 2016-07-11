import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { VENDOR_PROVIDERS } from './provider/index';
import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { envUtil, CONSTANTS } from './shared';

if (envUtil.isEnv(CONSTANTS.ENVS.PROD)) {
    enableProdMode();
}

bootstrap(AppComponent, [
    VENDOR_PROVIDERS,
    APP_PROVIDERS
]);
