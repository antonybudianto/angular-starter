import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { SimplebindRoutes } from './simplebind/index';

const routes: RouterConfig = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...SimplebindRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
