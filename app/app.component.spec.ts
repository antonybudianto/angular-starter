import {
    it,
    expect,
    beforeEachProviders,
    inject,
    async,
    describe,
    TestComponentBuilder,
    MockApplicationRef
} from 'angular2/testing';
import {
    ROUTER_PRIMARY_COMPONENT,
    ROUTER_PROVIDERS
} from 'angular2/router';
import {
    APP_BASE_HREF,
} from 'angular2/platform/common';
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

    it('should have brand Angular 2 Starter', async(inject([TestComponentBuilder],
        (tsb: TestComponentBuilder) => {
            tsb.createAsync(TestComponent).then((fixture) => {
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
                expect(compiled.querySelector('a.navbar-brand'))
                    .toHaveText('Angular 2 Starter');
            });
        })));
});
