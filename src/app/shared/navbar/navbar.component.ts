import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'as-navbar',
    templateUrl: 'navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
}
