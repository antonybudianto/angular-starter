import {
    it,
    describe,
    expect,
    beforeEach
} from 'angular2/testing';
import { LoggerService } from './logger.service';

describe('AppComponent', () => {
    beforeEach(() => {
        spyOn(console, 'log');
    });

    it('should log successfully', () => {
        let message = 'Hello';
        let logger = new LoggerService();
        logger.log(message);
        expect(console.log).toHaveBeenCalledWith(message);
    });
});
