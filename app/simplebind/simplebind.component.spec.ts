import {
    it,
    inject,
    async,
    describe,
    expect,
    TestComponentBuilder
} from 'angular2/testing';
import { Component } from 'angular2/core';
import { SimplebindComponent } from './simplebind.component';

@Component({
    selector: 'test',
    template: '<div><simplebind></simplebind></div>',
    directives: [SimplebindComponent]
})
class TestComponent {
}

describe('SimplebindComponent', () => {
    it('should have print "Simple" on template', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('p'))
                .toHaveText('Simple');
        });
    })));
});
