var angular2_1 = require('angular2/angular2');
var app_component_1 = require('./app.component');
var logger_service_1 = require('./blocks/logger.service');
angular2_1.bootstrap(app_component_1.AppComponent, [
    logger_service_1.LoggerService
]);
