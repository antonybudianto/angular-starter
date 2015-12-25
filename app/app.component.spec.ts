import {
    it,
    describe,
    expect,
    injectAsync,
    TestComponentBuilder
} from 'angular2/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    it('should have brand Angular 2', injectAsync([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(AppComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toContainText('Angular 2 Starter');
        });
    }));
});
