pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               sh 'npm install cypress --save-dev'
               catchError {
                   sh 'npx cypress run'
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