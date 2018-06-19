# SnapshotTestingInAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




First of all we will add jest: 
npm add @types/jest jest --dev

An implementation for jest and angular already exists, 
so we will use this one, no need to rewrite something that already works good :
npm add jest-preset-angular --dev

Because code coverage is important en we need also to publish it somewhere to a sonar:
npm add istanbul-reports jest-sonar-reporter --dev

Required files to add:
src/setupJest.ts
src/jestGlobalMocks.ts



Remove some obsolete dependencies, when we start to use jest ‘karma’ and ‘jasmine’ are obsolete. 
Due to the face that Jest uses Jasmine API
npm remove karma karm-chrome-launcher karma-cli karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter jasmine-core jasmine-spec-reporter @types/jasmine @types/jasminewd2