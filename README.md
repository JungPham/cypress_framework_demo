# cypress_framework_demo

Cypress framework demo project using Typescript and Cucumber

## Structure framework

TBD

## How to add new tests

1. Add new feature file into `features` folder

2. Add some steps handle with step in feature file

3. Add new pages accordingly

## Preparation

Execute command line:

```js
    npm install cypress --save-dev
    npm i -D @shelex/cypress-allure-plugin
    npm install --save-dev mocha-allure-reporter allure-commandline
```

## Run with Allure report

Execute command line:

```js
    //Run test
    npx cypress run --env allure=true --reporter=mocha-allure-reporter

    //Remove xml result files due to duplicate issue on report (Issue001)
    cd allure-results
    rm -r *.xml
    cd ..

    //Generate report
    npx allure generate allure-results --clean -o allure-report
    npx allure open
```

## Run and save result on dashboard

npx cypress run --record --key 730f5e89-2807-4f18-979f-202508fb31e1 --parallel

## Issue

1.  - The report generator have issue about dupicate test cases on Allure report.