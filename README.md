# Angular 2 Starter

[![Build Status](https://travis-ci.org/antonybudianto/angular2-starter.svg?branch=master)](https://travis-ci.org/antonybudianto/angular2-starter)
[![Build status](https://ci.appveyor.com/api/projects/status/d5b3a9nnxnv5bxa5/branch/master?svg=true)](https://ci.appveyor.com/project/antonybudianto/angular2-starter/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/antonybudianto/angular2-starter/badge.svg?branch=master)](https://coveralls.io/github/antonybudianto/angular2-starter?branch=master)
[![Dependency Status](https://david-dm.org/antonybudianto/angular2-starter.svg)](https://david-dm.org/antonybudianto/angular2-starter)
[![devDependency Status](https://david-dm.org/antonybudianto/angular2-starter/dev-status.svg)](https://david-dm.org/antonybudianto/angular2-starter#info=devDependencies)
[![Dependency Status](https://dependencyci.com/github/antonybudianto/angular2-starter/badge)](https://dependencyci.com/github/antonybudianto/angular2-starter)

> Live Production Build [Demo](https://antonybudianto.github.io/angular2-starter/)

## Introduction
Welcome to Angular 2 Starter!
This starter contains almost everything you need to start developing [Angular 2](https://angular.io/).

### Why choose this starter?
- Extensible via [ngstarter extensions](https://github.com/ngstarter)
- Complete workflow from serve, lint, unit test, e2e test, to bundling
- Support file-based and strong-typed [Environment Variables](https://github.com/antonybudianto/angular2-starter/wiki/Environment-Variables)
- 100% code coverage
- 100% [CI/CD](https://github.com/antonybudianto/angular2-starter/wiki/Continuous-Integration) pipeline ready
- No global package installation
- No module bundler coupling

### What's included?
* [npm](https://www.npmjs.com/) for package manager
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) for workflow (from *serve*, *watch*, *compile*, *test* to *build*)
* [Browsersync](https://www.browsersync.io/) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [Codelyzer](https://github.com/mgechev/codelyzer) for static code analyzer
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* [SystemJS Builder](https://github.com/systemjs/builder) or [Webpack](https://webpack.github.io/) for module bundling in production

Please visit the [wiki](https://github.com/antonybudianto/angular2-starter/wiki) for more details.

## Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)
- Support Node v4 - latest
- Support npm v3 - latest

[Global Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) is not required, since you can map them to npm scripts, but a nice to have for development purpose.

## Installation
Download the starter from [releases page](https://github.com/antonybudianto/angular2-starter/releases)

Go to the starter directory and install the packages:
```bash
npm install
```

## Start
Let's start up the server, run:
```bash
npm start
```

and done! The browser will popup and you can start trying Angular 2!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Testing
This starter comes with testing gulp workflow

### Unit testing
Just run
```bash
npm test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled JavaScript coverage.

![Coverage result](http://s33.postimg.org/w7m9ckdkf/Screen_Shot_2016_06_04_at_8_15_53_AM.png)

### E2E testing
Firstly start the server:
```bash
npm start
```
To begin testing, run:
```bash
npm run e2e
```
and it'll compile all E2E spec files in `/src/test/e2e/*.spec.ts`, boot up Selenium server then launches Chrome browser.

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

> For more details, visit [Continuous Integration  wiki](https://github.com/antonybudianto/angular2-starter/wiki/Continuous-Integration)

You can create production build by running:
```bash
npm run build
```
or you can create production build and then serve it using Browsersync by running:
```bash
npm run serve-build
```
The starter defaults to bundle using [SystemJS Builder extension](https://github.com/ngstarter/systemjs-extension).
There is [Webpack extension](https://github.com/ngstarter/webpack-extension) available too, feel free to swap it as you like.

## Extension
You can extend this starter with many extensions built by the community. Browse the extensions [here](https://github.com/ngstarter)

## Contributing
Feel free to submit a PR if there are any issues or new features, please read [this](https://github.com/antonybudianto/angular2-starter/wiki/Contributing) before

## Special thanks
* For all contributors who have helped this starter improvement
* John Papa for his awesome [angular-styleguide](https://github.com/johnpapa/angular-styleguide) and [Tour of Heroes](https://github.com/johnpapa/angular2-tour-of-heroes)
* Julie Ralph for her [ng2-test-seed](https://github.com/juliemr/ng2-test-seed) which helped me a lot to get started with testing feature
* Minko Gechev for his [angular2-seed](https://github.com/mgechev/angular2-seed) and [angular2-ngc-rollup-build](https://github.com/mgechev/angular2-ngc-rollup-build) which helped a lot

## License
MIT
