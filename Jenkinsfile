pipeline {
    agent any
    
    environment {
        FRONTEND_IMAGE = "yourdockerhub/frontend:latest"
        BACKEND_IMAGE = "yourdockerhub/backend:latest"
        CONTAINER_NAME_FRONTEND = "mern-frontend"
        CONTAINER_NAME_BACKEND = "mern-backend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/your-repo-url.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE ./frontend'
                sh 'docker build -t $BACKEND_IMAGE ./backend'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    sh 'docker push $FRONTEND_IMAGE'
                    sh 'docker push $BACKEND_IMAGE'
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker stop $CONTAINER_NAME_FRONTEND || true && docker rm $CONTAINER_NAME_FRONTEND || true'
                sh 'docker stop $CONTAINER_NAME_BACKEND || true && docker rm $CONTAINER_NAME_BACKEND || true'

                sh 'docker run -d --name $CONTAINER_NAME_BACKEND -p 5000:5000 $BACKEND_IMAGE'
                sh 'docker run -d --name $CONTAINER_NAME_FRONTEND -p 3000:3000 --link $CONTAINER_NAME_BACKEND $FRONTEND_IMAGE'
            }
        }
    }
}
