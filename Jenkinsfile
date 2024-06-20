pipeline {
    agent any

    options {
        timeout(time: 60, unit: 'MINUTES')
    }

    environment {
        NODE_VERSION = '18' // Specify the Node.js version
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Set up Node.js') {
            steps {
                script {
                    // Use a Node.js installation available on the Jenkins node
                    env.NODE_HOME = tool name: "NodeJS ${NODE_VERSION}", type: 'NodeJS'
                    env.PATH = "${env.NODE_HOME}/bin:${env.PATH}"
                }
            }
        }

        stage('Install Dependencies') {
