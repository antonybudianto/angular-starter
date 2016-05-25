"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_routes_1 = require('./app.routes');
var navbar_component_1 = require('./navbar/navbar.component');
var logger_service_1 = require('./blocks/logger.service');
var AppComponent = (function () {
    function AppComponent(logger) {
        this.logger = logger;
        this.appRoutes = app_routes_1.APP_ROUTES;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'as-main-app',
            templateUrl: 'app/app.html',
            directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes(app_routes_1.APP_ROUTES), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
