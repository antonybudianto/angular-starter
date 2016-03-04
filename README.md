# Angular 2 Starter

[![Build Status](https://travis-ci.org/antonybudianto/angular2-starter.svg?branch=master)](https://travis-ci.org/antonybudianto/angular2-starter)
[![Build status](https://ci.appveyor.com/api/projects/status/d5b3a9nnxnv5bxa5/branch/master?svg=true)](https://ci.appveyor.com/project/antonybudianto/angular2-starter/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/antonybudianto/angular2-starter/badge.svg?branch=master)](https://coveralls.io/github/antonybudianto/angular2-starter?branch=master)
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
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
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
Firstly, you need to have [Node.js](https://nodejs.org/en/) 
- Support from v0.12.10 (LTS) or higher 
- For v4, please use v4.3.x (LTS) or higher (**highly** recommended)
- For v5, please use v5.6.x or higher, here is [why](https://nodejs.org/en/blog/vulnerability/february-2016-security-releases/)

> You need v4.x or higher for [Protractor](https://angular.github.io/protractor/#/)

Then, install these packages globally:   
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
This starter comes with testing gulp workflow

### Unit testing
Just run
```bash
gulp test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled Javascript coverage.
![Coverage result](http://s9.postimg.org/ij32cv5dr/test.png)

### E2E testing
Firstly start the server:
```
gulp serve-dev
```
To begin testing, run:
```bash
gulp e2e
```
and it'll compile all E2E spec files in `/test/e2e/*.spec.ts`, boot up Selenium server then launches Chrome browser.

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
Feel free to submit a PR if there are any issues or new features, read [this](https://github.com/antonybudianto/angular2-starter/blob/master/CONTRIBUTING.md) before

## Special thanks
* John Papa for his awesome [angular-styleguide](https://github.com/johnpapa/angular-styleguide) and [Tour of Heroes](https://github.com/johnpapa/angular2-tour-of-heroes)
* Julie Ralph for her [ng2-test-seed](https://github.com/juliemr/ng2-test-seed) which helped me a lot to get started with testing feature

## License
MIT
