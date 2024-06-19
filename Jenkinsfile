pipeline {
    agent any
        stage('Run Playwright Tests') {
            steps {
                sh '''
                /usr/local/bin/npx playwright test --grep @nbafinals  // Replace with the actual path if different
                '''
            }
        }
    }
}
