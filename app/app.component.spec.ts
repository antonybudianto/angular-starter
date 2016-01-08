import {
    xit,
    inject,
    beforeEachProviders,
    describe,
    expect,
    TestComponentBuilder
} from 'angular2/testing';
import { AppComponent } from './app.component';
import { LoggerService } from './blocks/logger.service';

describe('AppComponent', () => {
    beforeEachProviders(() => [LoggerService, AppComponent]);
    xit('should have brand Angular 2', inject([TestComponentBuilder],
        (tsb: TestComponentBuilder) => {
        tsb.createAsync(AppComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            console.log(compiled);
            expect(compiled).toContainText('Angular 2 Stsarter');
        });
    }));
});
