pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               bat 'npm install cypress --save-dev'
               bat 'npm i -D @shelex/cypress-allure-plugin'
               bat 'npm install --save-dev mocha-allure-reporter allure-commandline'
               catchError {
                  bat 'npx cypress run --env allure=true --reporter=mocha-allure-reporter'
                  bat 'del .\\allure-results\\*.xml'
               }       
         }
      }

      stage('reports') {
         steps {
            script {
               allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
               ])
            }
         }
      }
   }
}