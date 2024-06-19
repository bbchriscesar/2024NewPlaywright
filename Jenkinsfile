pipeline {
    agent any
    stages {
        stage('Run Playwright Tests') {
            steps {
                script {
                    sh '/usr/local/bin/npx playwright test --grep @nbafinals' // Replace with the actual path if different
                }
            }
        }
    }
}
