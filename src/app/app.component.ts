import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {CONSTANTS} from './shared';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
