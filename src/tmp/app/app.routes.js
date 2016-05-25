"use strict";
var home_component_1 = require('./home/home.component');
var todolist_component_1 = require('./todolist/todolist.component');
var simplebind_component_1 = require('./simplebind/simplebind.component');
exports.APP_ROUTES = [
    { path: '/', name: 'Home', component: home_component_1.HomeComponent },
    { path: '/simplebind', name: 'Simplebind', component: simplebind_component_1.SimplebindComponent },
    { path: '/todolist', name: 'Todolist', component: todolist_component_1.TodolistComponent }
];

//# sourceMappingURL=app.routes.js.map
