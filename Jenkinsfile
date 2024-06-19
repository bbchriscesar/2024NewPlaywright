pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin/node"
    }

    stages {
        stage('Verify Node.js and npm') {
            steps {
                sh '''
                echo "Node.js version:"
                node -v
                echo "npm version:"
                npm -v
                echo "npx version:"
                npx -v
                '''
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh '''
                npx playwright test --grep @nbafinals
                '''
            }
        }
    }
}
