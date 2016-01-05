import {
    it,
    inject,
    beforeEachProviders,
    describe,
    expect
} from 'angular2/testing';
import { AppComponent } from './app.component';
import { LoggerService } from './blocks/logger.service';

describe('AppComponent', () => {
    beforeEachProviders(() => [LoggerService, AppComponent]);

    it('should be defined', inject([AppComponent], (app: AppComponent) => {
        expect(app).toBeDefined();
    }));
});
