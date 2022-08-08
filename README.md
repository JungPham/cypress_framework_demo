# cypress_framework_demo

Cypress framework demo project using Typescript and Cucumber

## Structure framework

- `features`: includes some automated features of application
- `pages`: defines page object model
- `steps`: step to handle steps definition in feature files

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

npx cypress run --record --key 730f5e89-2807-4f18-979f-202508fb31e1

## Issue

- The report generator have issue about dupicate test cases on Allure report.

## How to configure to run on Jenkins

### Preconditions:
- Jenkins is installed

### Steps:

1/ Clicks on `New Item`

2/ Enter job name and select `Pipeline` job type > OK

3/ On Pipeline section, select `Pipeline script from SCM` and SCM is `Git`

4/ Generate token from Github: `Settings` > `Developer settings` > `Personal access tokens` > Generate new token for using cypress 

5/ Continue with Jenkins job configuration by Add Credentials with kind `Username and password`, Username and Password is value of token which is generated from step 4

6/ Select branch to build > Apply and Save job configuration

7/ Go to Dashboard > `Manage Jenkins` > `Manage Plugins` > install `Allure Jenkins Plugin` and `NodeJS plugin`

8/ Go to Dashboard > `Global Tool Configuration` > Add NodeJS with name `node` and Add Allure Commandline with name `allure` > Save and Apply

9/ Go to cypress job and Build now
