//import {Injectable} from 'angular2/angular2';
//@Injectable()
var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (message) {
        console.log(message);
    };
    return LoggerService;
})();
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map