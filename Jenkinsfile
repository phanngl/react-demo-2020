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
            sh 'yarn'
          }
        }

        stage('') {
          agent {
            docker {
              image 'node:13'
            }

          }
          steps {
            sh 'yarn start'
          }
        }

      }
    }

  }
}