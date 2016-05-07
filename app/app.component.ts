import {Component} from '@angular/core';
import {RouterOutlet, RouteConfig, RouteDefinition} from '@angular/router-deprecated';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';
import {LoggerService} from './blocks/logger.service';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [RouterOutlet, NavbarComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public appRoutes: RouteDefinition[];
    private logger: LoggerService;

    constructor(logger: LoggerService) {
        this.logger = logger;
        this.appRoutes = APP_ROUTES;
    }
}
