pipeline {
    agent any
    stages {
        stage('Run Playwright Tests') {
            steps {
                script {
                    sh '/usr/local/bin/npx playwright test test1' // Replace with the actual path if different
                }
            }
        }
    }
}
