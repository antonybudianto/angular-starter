import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {TodolistComponent} from './todolist/todolist.component';
import {SimplebindComponent} from './simplebind/simplebind.component';

export var APP_ROUTES: RouteDefinition[] = [
	{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
	{ path: '/simplebind', name: 'Simplebind', component: SimplebindComponent },
	{ path: '/todolist', name: 'Todolist', component: TodolistComponent }
];