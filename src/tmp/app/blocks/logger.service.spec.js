"use strict";
var testing_1 = require('@angular/core/testing');
var logger_service_1 = require('./logger.service');
testing_1.describe('AppComponent', function () {
    testing_1.beforeEachProviders(function () { return [logger_service_1.LoggerService]; });
    testing_1.beforeEach(function () {
        spyOn(console, 'log');
    });
    testing_1.it('should log successfully', testing_1.inject([logger_service_1.LoggerService], function (logger) {
        var message = 'Hello';
        logger.log(message);
        testing_1.expect(console.log).toHaveBeenCalledWith(message);
    }));
});

//# sourceMappingURL=logger.service.spec.js.map
