import {
    async,
    inject,
    addProviders,
    TestComponentBuilder,
    ComponentFixture
} from '@angular/core/testing';

import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { TodolistComponent } from './todolist.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

@Component({
    selector: 'as-test',
    template: '<as-todolist></as-todolist>',
    directives: [TodolistComponent]
})
class TestComponent {
}

let testFixture: ComponentFixture<any>;
let todoCompiled;
let todolistCmp: TodolistComponent;

describe('TodolistComponent', () => {
    beforeEach(() => {
        addProviders([
            disableDeprecatedForms(),
            provideForms()
        ]);
    });

    it('should have been created successfully', async(inject([TestComponentBuilder],
        (tcb: TestComponentBuilder) => {
            tcb.createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
                testFixture = fixture;
                fixture.detectChanges();

                todoCompiled = fixture.nativeElement;
                todolistCmp = fixture.debugElement
                    .children[0].componentInstance;
                expect(todoCompiled).toBeDefined();
            });
    })));

    it('should add todo successfully', () => {
        todolistCmp.todo = new Todo('test', true);
        todolistCmp.addTodo();
        testFixture.detectChanges();

        let items = todoCompiled.querySelectorAll('.list-group-item');
        expect(items.length).toEqual(3);

        let item = items[items.length - 1];
        expect(item.querySelector('label').textContent).toEqual(' test');
        expect(item.querySelector('input[type="checkbox"]').value).toBeTruthy();
    });

    it('should delete todo successfully', () => {
        todolistCmp.delTodo(0);
        testFixture.detectChanges();
        expect(todoCompiled.querySelectorAll('.list-group-item').length)
            .toEqual(2);
    });
});
