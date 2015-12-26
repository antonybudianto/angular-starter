import {
    it,
    describe,
    expect,
    inject,
    TestComponentBuilder
} from 'angular2/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    it('should have brand Angular 2', inject([TestComponentBuilder], tcBuilder => {
        tcBuilder.createAsync(AppComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            console.log(compiled);
            expect(compiled).toContainText('Angular 2 Stsarter');
        });
    }));
});
