import {
it,
injectAsync,
describe,
expect,
TestComponentBuilder,
} from 'angular2/testing';
import { Component } from 'angular2/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'test',
    template: `
    <div>
    <child text="Hello test" [(fromParent)]="testName"></child>
    </div>
    `,
    directives: [ChildComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

describe('ChildComponent', () => {
    it('should print inputs correctly', injectAsync([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        return tsb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('h6'))
                .toHaveText('From parent');
            expect(compiled.querySelector('h5'))
                .toHaveText('Hello test');
        });
    }));

    it('should trigger changeMe event correctly', injectAsync([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        return tsb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            let childInstance: ChildComponent = fixture.debugElement
                .children[0].children[0].componentInstance;

            expect(compiled).toBeDefined();

            childInstance.changeMe();
            fixture.detectChanges();

            expect(childInstance.num).toEqual(1);
            expect(compiled.querySelector('h6'))
                .toHaveText('Changed from child. Count: ' + childInstance.num);
        });
    }));
});
