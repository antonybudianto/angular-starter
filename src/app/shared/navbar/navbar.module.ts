import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './index';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
