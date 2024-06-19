pipeline {
    agent any

    stages {
        stage('Verify Node.js and npm') {
            steps {
                sh '''
                echo "Sourcing zsh configuration"
                source ~/.zshrc || true
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
                echo "Sourcing zsh configuration"
                source ~/.zshrc || true
                npx playwright test --grep @nbafinals
                '''
            }
        }
    }
}
