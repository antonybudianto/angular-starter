import {
    async,
    inject,
    TestComponentBuilder,
    ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'as-test',
    template: `
    <as-child text="Hello test" [(fromParent)]="testName"></as-child>
    `,
    directives: [ChildComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

let testFixture: ComponentFixture<any>;
let childCompiled;
let childCmp: ChildComponent;

describe('ChildComponent', () => {
    it('should print inputs correctly', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            testFixture = fixture;
            testFixture.detectChanges();

            childCompiled = testFixture.nativeElement;
            childCmp = testFixture.debugElement.children[0].componentInstance;

            expect(childCompiled).toBeDefined();
            expect(childCmp).toBeDefined();
            expect(childCompiled.querySelector('h6'))
                .toContainText('From parent');
            expect(childCompiled.querySelector('h5'))
                .toContainText('Hello test');
        });
    })));

    it('should trigger changeMe event correctly', () => {
        childCmp.changeMe();
        testFixture.detectChanges();
        expect(childCmp.num).toEqual(1);
        expect(childCompiled.querySelector('h6'))
            .toContainText('Changed from child. Count: ' + childCmp.num);
    });
});
