import {
    it,
    expect,
    beforeEachProviders,
    injectAsync,
    describe,
    TestComponentBuilder,
    MockApplicationRef
} from 'angular2/testing';
import {
    APP_BASE_HREF,
    ROUTER_PRIMARY_COMPONENT,
    ROUTER_PROVIDERS
} from 'angular2/router';
import { Component, provide, ApplicationRef } from 'angular2/core';
import { AppComponent } from './app.component';
import { LoggerService } from './blocks/logger.service';

@Component({
    selector: 'test',
    template: '<div><main-app></main-app></div>',
    directives: [AppComponent]
})
class TestComponent {
}

describe('AppComponent', () => {
    beforeEachProviders(() => [
        LoggerService,
        ROUTER_PROVIDERS,
        provide(ROUTER_PRIMARY_COMPONENT, { useValue: AppComponent }),
        provide(ApplicationRef, { useClass: MockApplicationRef }),
        provide(APP_BASE_HREF, { useValue: '/' }),
    ]);

    it('should have brand Angular 2 Starter', injectAsync([TestComponentBuilder],
        (tsb: TestComponentBuilder) => {
            return tsb.createAsync(TestComponent).then((fixture) => {
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
                expect(compiled.querySelector('a.navbar-brand'))
                    .toHaveText('Angular 2 Starter');
            });
        }));
});
