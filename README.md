# Angular 2 Starter

[![Build Status](https://travis-ci.org/antonybudianto/angular2-starter.svg?branch=master)](https://travis-ci.org/antonybudianto/angular2-starter)
[![Dependency Status](https://david-dm.org/antonybudianto/angular2-starter.svg)](https://david-dm.org/antonybudianto/angular2-starter)
[![devDependency Status](https://david-dm.org/antonybudianto/angular2-starter/dev-status.svg)](https://david-dm.org/antonybudianto/angular2-starter#info=devDependencies)


> Angular 2 is still in Beta stage, please **don't** use this in production   
> Follow it [here](https://splintercode.github.io/is-angular-2-ready/)

## Table of Content
* [Introduction](#introduction)
* [Installation](#installation)
* [Start](#start)
* [Testing](#testing)
* [Production](#production)
* [Contributing](#contributing)
* [Special thanks](#special-thanks)
* [License](#license)

## Introduction
Welcome to Angular 2 Starter!
This starter contains almost everything you need to start developing [Angular 2](https://angular.io/): 
* [TypeScript](http://www.typescriptlang.org/) for the base language
* [Gulp](http://gulpjs.com/) for workflow (from *serve*, *watch*, *compile*, *test* to *build*)
* [Bower](http://bower.io/) for front-end package manager
* [NPM](https://www.npmjs.com/) for angular2 & dev-tooling package manager
* [Live Server](https://github.com/tapio/live-server) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* [SystemJS Builder](https://github.com/systemjs/builder) for module bundling in production

Please visit the [wiki](https://github.com/antonybudianto/angular2-starter/wiki) for more details.

## Installation
Firstly, you need to have [NodeJS](https://nodejs.org/en/) (support Node from 0.12.x or higher), then   
install these packages globally:   
```bash
npm install -g gulp bower
```

After that, just run:
```bash
npm install
```
and to install bower dependencies:
```bash
bower install
```

## Start
Let's start up the server, run:   
`gulp` or `gulp serve-dev`

and done! The browser will popup and you can start trying Angular 2!   
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Testing
This starter comes with unit-testing gulp workflow, just run:   
```bash
gulp test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled Javascript coverage.
![Coverage result](http://s9.postimg.org/ij32cv5dr/test.png)
   

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

You can create production build by running:
```bash
gulp build
```
or you can create production build and then serve it using `live-server` by running:
```bash
gulp serve-build
```
It uses [SystemJS Builder](https://github.com/systemjs/builder) to bundle your application so it's ready for production use

## Contributing
Feel free to submit a PR if there are any issues or new features

## Special thanks
* John Papa for his awesome [angular-styleguide](https://github.com/johnpapa/angular-styleguide) and [Tour of Heroes](https://github.com/johnpapa/angular2-tour-of-heroes)
* Julie Ralph for her [ng2-test-seed](https://github.com/juliemr/ng2-test-seed) which helped me a lot to get started with testing feature

## License
MIT
