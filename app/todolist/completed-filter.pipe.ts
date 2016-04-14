import {Pipe, PipeTransform} from 'angular2/core';
import {Todo} from './todo.model';
import _ from 'lodash';

@Pipe({
    name: 'completedFilter'
})
export class CompletedFilterPipe implements PipeTransform {
    transform(todos: Todo[], [done]): Todo[] {
        if (done) {
            return todos;
        }

        return _.filter(todos, {done});
    }
}
