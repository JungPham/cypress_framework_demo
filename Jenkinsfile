pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               bat 'npm install cypress --save-dev'
               catchError {
                   bat 'npx cypress run'
               }       
         }
      }

    //   stage('reports') {
    //      steps {
    //         script {
    //            allure([
    //                 includeProperties: false,
    //                 jdk: '',
    //                 properties: [],
    //                 reportBuildPolicy: 'ALWAYS',
    //                 results: [[path: 'target/allure-results']]
    //            ])
    //         }
    //      }
    //   }
   }
}