pipeline {
   agent any

   tools {nodejs "node"}

   stages {
      stage('Test') {
         steps {
               sh 'npm install cypress --save-dev'
               sh 'yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib'
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