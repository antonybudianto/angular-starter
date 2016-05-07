import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouterLink, RouteDefinition} from '@angular/router-deprecated';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [RouterLink, CORE_DIRECTIVES]
})
export class NavbarComponent {
    @Input() brand: string;
    @Input() routes: RouteDefinition[];
}
