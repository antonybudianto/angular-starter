"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var logger_service_1 = require('./blocks/logger.service');
if (ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    logger_service_1.LoggerService, router_1.ROUTER_PROVIDERS
]);

//# sourceMappingURL=main.js.map
