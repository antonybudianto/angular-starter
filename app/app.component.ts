import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';
import {LoggerService} from './blocks/logger.service';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
@Routes(APP_ROUTES)
export class AppComponent {
    public appRoutes: any[];
    private logger: LoggerService;

    constructor(logger: LoggerService) {
        this.logger = logger;
        this.appRoutes = APP_ROUTES;
    }
}
