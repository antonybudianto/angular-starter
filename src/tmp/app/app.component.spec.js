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
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var testing_3 = require('@angular/router/testing');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var logger_service_1 = require('./blocks/logger.service');
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'as-test',
            template: '<div><as-main-app></as-main-app></div>',
            directives: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
testing_1.describe('AppComponent', function () {
    testing_1.beforeEachProviders(function () { return [
        logger_service_1.LoggerService,
        testing_3.ROUTER_FAKE_PROVIDERS
    ]; });
    testing_1.it('should have brand Angular 2 Starter', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tsb) {
        tsb.createAsync(TestComponent).then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            testing_1.expect(compiled).toBeDefined();
            testing_1.expect(compiled.querySelector('a.navbar-brand'))
                .toHaveText('Angular 2 Starter');
        });
    })));
});

//# sourceMappingURL=app.component.spec.js.map
