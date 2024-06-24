pipeline {
    agent {
        label 'self-hosted-agent' // Replace with the label of your self-hosted agent
    }
    environment {
        NODE_VERSION = '18' // Specify the Node.js version
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the GitHub repository
                git branch: 'main', url: 'https://github.com/bbchriscesar/2024NewPlaywright.git'
            }
        }
        stage('Install Node.js') {
            steps {
                // Install Node.js
                sh 'curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }
    }
    post {
        always {
            // Archive test results and logs
            archiveArtifacts artifacts: '**/test-results/**', allowEmptyArchive: true
            junit '**/test-results/**/*.xml'
        }
        failure {
            // Notify on failure (you can add email or other notifications here)
            echo 'Tests failed!'
        }
        success {
            // Notify on success (you can add email or other notifications here)
            echo 'Tests passed!'
        }
    }
}
