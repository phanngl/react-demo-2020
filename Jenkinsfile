pipeline {
  agent none
  stages {
    stage('build') {
      parallel {
        stage('build') {
          agent {
            docker {
              image 'node:14'
            }

          }
          steps {
            sh 'hostname'
            sh 'whoami'
            sh 'yarn'
            sh 'ls -al /'
          }
        }

        stage('build 13') {
          agent {
            docker {
              image 'node:13'
            }

          }
          steps {
            sh 'hostname'
            sh 'whoami'
            sh 'yarn'
            sh 'yarn start'
          }
        }

      }
    }

  }
}