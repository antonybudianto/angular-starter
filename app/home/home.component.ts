import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'home',
	templateUrl: 'app/home/home.html'
})
export class HomeComponent {
	constructor(private _router: Router) {

	}
}