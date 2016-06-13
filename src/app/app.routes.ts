import { provideRouter, RouterConfig } from '@angular/router';

import {HomeRoutes} from './home/home.routes';
import {TodolistRoutes} from './todolist/todolist.routes';
import {SimplebindRoutes} from './simplebind/simplebind.routes';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...TodolistRoutes,
  ...SimplebindRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

// export var APP_ROUTES: any[] = [
//     { path: '/', name: 'Home', component: HomeComponent },
//     { path: '/simplebind', name: 'Simplebind', component: SimplebindComponent },
//     { path: '/todolist', name: 'Todolist', component: TodolistComponent }
// ];
