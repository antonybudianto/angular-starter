import { CompletedFilterPipe } from './completed-filter.pipe';
import { Todo } from './todo.model';

describe('CompletedFilterPipe', () => {
    let pipe: CompletedFilterPipe;
    let todos: Todo[] = [
        new Todo('test1', true),
        new Todo('test2', false)
    ];

    beforeEach(() => {
        pipe = new CompletedFilterPipe();
    });

    it('should return original todos when pass true', () => {
        let result = pipe.transform(todos, true);
        expect(result).toEqual(todos);
    });

    it('should return not-completed todos when pass false', () => {
        let result = pipe.transform(todos, false);
        result.forEach(todo => expect(todo.done).toBeFalsy());
    });
});
