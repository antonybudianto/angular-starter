import {
it,
injectAsync,
describe,
expect,
TestComponentBuilder,
ComponentFixture
} from 'angular2/testing';
import { Component } from 'angular2/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'test',
    template: `
    <child text="Hello test" [(fromParent)]="testName"></child>
    `,
    directives: [ChildComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

let testFixture: ComponentFixture;
let childCompiled;
let childCmp: ChildComponent;

describe('ChildComponent', () => {
    it('should print inputs correctly', injectAsync([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        return tsb.createAsync(TestComponent).then((fixture) => {
            testFixture = fixture;
            testFixture.detectChanges();

            childCompiled = testFixture.nativeElement;
            childCmp = testFixture.debugElement.children[0].componentInstance;

            expect(childCompiled).toBeDefined();
            expect(childCmp).toBeDefined();
            expect(childCompiled.querySelector('h6'))
                .toHaveText('From parent');
            expect(childCompiled.querySelector('h5'))
                .toHaveText('Hello test');
        });
    }));

    it('should trigger changeMe event correctly', () => {
        childCmp.changeMe();
        testFixture.detectChanges();
        expect(childCmp.num).toEqual(1);
        expect(childCompiled.querySelector('h6'))
            .toHaveText('Changed from child. Count: ' + childCmp.num);
    });
});
