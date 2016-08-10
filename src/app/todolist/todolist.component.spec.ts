import {
    async,
    TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';

import { Todo, TodolistComponent, TodolistModule } from './index';

@Component({
    selector: 'as-test',
    template: '<as-todolist></as-todolist>'
})
class TestComponent {
}

let todoCompiled;
let todolistCmp: TodolistComponent;

describe('TodolistComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TestComponent ],
            imports: [ TodolistModule ]
        });
    });

    it('should have been created successfully', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            expect(todoCompiled).toBeDefined();
        });
    }));

    it('should add todo successfully', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            todolistCmp.todo = new Todo('test', true);
            todolistCmp.addTodo();
            fixture.detectChanges();

            let items = todoCompiled.querySelectorAll('.list-group-item');
            expect(items.length).toEqual(3);

            let item = items[items.length - 1];
            expect(item.querySelector('label').textContent).toEqual(' test');
            expect(item.querySelector('input[type="checkbox"]').value).toBeTruthy();
        });
    }));

    it('should delete todo successfully', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;

            todolistCmp.delTodo(0);
            fixture.detectChanges();
            expect(todoCompiled.querySelectorAll('.list-group-item').length)
                .toEqual(1);
        });
    }));
});
