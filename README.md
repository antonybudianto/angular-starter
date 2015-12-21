# Angular 2 Starter

[![Build Status](https://travis-ci.org/antonybudianto/angular2-starter.svg?branch=master)](https://travis-ci.org/antonybudianto/angular2-starter)

> Angular 2 is still in Beta stage, please **don't** use this in production   
> Follow it [here](https://splintercode.github.io/is-angular-2-ready/)

## Installation
You need these:
- Node with npm
- Bower
- Gulp

after you have them, just run:
```
npm install
```
It will also run `bower install` after the npm install done   


## Start
Let's start up the server, run:   
`gulp` or `gulp serve-dev`

and done! The browser will popup and you can start trying Angular 2!   
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Production
> Angular 2 is not ready for *production* yet, consider this build task for learning purpose

You can create production build by running:
```
gulp build-sjs
```
or you can serve the build folder by running:
```
gulp serve-build
```
It uses [SystemJS Builder](https://github.com/systemjs/builder) to bundle your application so it's ready for production use

## License
MIT
