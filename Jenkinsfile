pipeline {
    agent any

    environment {
        // Deploy to a 'dist' folder within the current workspace
        DEPLOY_DIR = "dist" 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Prepare Build Directory') {
            steps {
                // Clean up previous build and create new directory
                sh "rm -rf ${DEPLOY_DIR}"
                sh "mkdir -p ${DEPLOY_DIR}"
            }
        }

        stage('Deploy Locally') {
            steps {
                script {
                    echo "Copying files to local directory: ${DEPLOY_DIR}"
                    
                    // Copy main files
                    sh "cp index.html ${DEPLOY_DIR}/"
                    sh "cp app.js ${DEPLOY_DIR}/"
                    
                    // Copy assets if they exist
                    // sh "cp -r architecture/ ${DEPLOY_DIR}/"
                    // sh "cp -r screenshots/ ${DEPLOY_DIR}/"
                }
            }
        }
        
        stage('Verify Deployment') {
            steps {
                script {
                    echo "Listing files in ${DEPLOY_DIR}:"
                    sh "ls -l ${DEPLOY_DIR}"
                }
            }
        }
    }

    post {
        success {
            echo "Successfully deployed to ${DEPLOY_DIR}"
            // This will make the files downloadable from the Jenkins UI
            archiveArtifacts artifacts: "${DEPLOY_DIR}/**/*", fingerprint: true
        }
    }
}
