pipeline {
    agent any

    stages {
        stage('Run Playwright Tests') {
            steps {
                script {
                    sh 'npx playwright test --grep @nbafinals'
                }
            }
        }
    }
}
