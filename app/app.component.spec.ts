import {
    it,
    inject,
    describe,
    expect,
    TestComponentBuilder
} from 'angular2/testing';
import { Component } from 'angular2/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'test',
    template: '<div><main-app></main-app></div>',
    directives: [AppComponent]
})
class TestComponent {
}

export function main() {
    describe('AppComponent', () => {
        it('should have brand Angular 2', inject([TestComponentBuilder],
            (tsb: TestComponentBuilder) => {
                tsb.createAsync(TestComponent).then((fixture) => {
                    fixture.detectChanges();
                    let compiled = fixture.debugElement.nativeElement;
                    console.log(compiled);
                    expect(compiled).toContainText('Angular 2 Starter');
                });
            }));
    });
}
