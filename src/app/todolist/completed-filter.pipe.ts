import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';

import { Todo } from './todo.model';

@Pipe({
    name: 'asCompletedFilter'
})
export class CompletedFilterPipe implements PipeTransform {
    transform(todos: Todo[], done): Todo[] {
        if (done) {
            return todos;
        }

        return filter(todos, {done});
    }
}
