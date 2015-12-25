import {Injectable} from 'angular2/core';

@Injectable()
export class LoggerService {
    log(message: string): void {
        console.log(message);
    }
}
