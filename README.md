# Angular 2 Starter

[![Build Status](https://travis-ci.org/antonybudianto/angular2-starter.svg?branch=master)](https://travis-ci.org/antonybudianto/angular2-starter)

> Angular 2 is still in Beta stage, please **don't** use this in production   
> Follow it [here](https://splintercode.github.io/is-angular-2-ready/)

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
This starter comes with unit-testing gulp workflow, using:   
- [Karma](karma-runner.github.io) as test-runner
- [Jasmine](http://jasmine.github.io/) as the testing framework
- [Istanbul](https://gotwarlost.github.io/istanbul/) as coverage instrumenter
- [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remap JS coverage to TS using sourcemaps.   

Just run:   
```bash
gulp test
```
and it'll compile needed TS files (app and test-helpers), start Karma, then remap Instanbul Coverage so that it shows TypeScripts coverage, not the transpiled Javascript coverage.
![Coverage result](http://s9.postimg.org/ij32cv5dr/test.png)
> Thanks to Julie Ralph's [ng2-test-seed](https://github.com/juliemr/ng2-test-seed) which helped me lot to get started.
   

## Production
> Angular 2 is not ready for *production* yet, consider this build task for learning purpose

You can create production build by running:
```bash
gulp build-sjs
```
or you can serve the build folder by running:
```bash
gulp serve-build
```
It uses [SystemJS Builder](https://github.com/systemjs/builder) to bundle your application so it's ready for production use

## License
MIT
