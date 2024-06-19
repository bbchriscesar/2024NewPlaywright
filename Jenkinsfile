pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin"  // Adjust the path based on the output of which node/npm/npx
    }

    stages {
        stage('Verify Node.js and npm') {
            steps {
                sh '''
                echo "Node.js version:"
                /usr/local/bin/node -v  // Replace with the actual path if different
                echo "npm version:"
                /usr/local/bin/npm -v   // Replace with the actual path if different
                echo "npx version:"
                /usr/local/bin/npx -v   // Replace with the actual path if different
                '''
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh '''
                /usr/local/bin/npx playwright test --grep @nbafinals  // Replace with the actual path if different
                '''
            }
        }
    }
}
