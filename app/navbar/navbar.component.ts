import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';
import {APP_ROUTES} from '../app.routes';

@Component({
	selector: 'navbar',
	templateUrl: 'app/navbar/navbar.html',
	directives: [RouterLink, CORE_DIRECTIVES]
})
export class NavbarComponent {
	@Input() brand: string;
	private routeList: RouteDefinition[] = APP_ROUTES;

}