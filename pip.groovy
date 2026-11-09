
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
        disableConcurrentBuilds()
        timestamps()
    }

    environment {
        DH_IMAGE = 'reactjs-special'
        CONTAINER_NAME = 'react-cont'
        GIT_URL = 'https://github.com/stefen-ly/reactjs-devops8-jenkins-pipeline.git'
    }

    stages {
        stage('Clone Code') {
            steps {
                deleteDir()

                git branch: 'main',
                    url: "${GIT_URL}"

                sh 'git log -1 --oneline'
            }
        }

        stage('Build Image') {
            steps {
                sh '''
                    set -eu

                    docker build \
                      -t "$DH_IMAGE:1.0.$BUILD_NUMBER" \
                      -f Dockerfile .
                '''
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'NAME',
                        passwordVariable: 'PASS'
                    )
                ]) {
                    sh '''
                        set -eu

                        FULL_IMAGE="$NAME/$DH_IMAGE:1.0.$BUILD_NUMBER"

                        docker tag \
                          "$DH_IMAGE:1.0.$BUILD_NUMBER" \
                          "$FULL_IMAGE"

                        export DOCKER_CONFIG="$(mktemp -d)"
                        trap 'rm -rf "$DOCKER_CONFIG"' EXIT

                        printf '%s' "$PASS" | \
                          docker login \
                            -u "$NAME" \
                            --password-stdin

                        docker push "$FULL_IMAGE"
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    set -eu

                    FULL_IMAGE="stefenly19/$DH_IMAGE:1.0.$BUILD_NUMBER"

                    docker pull "$FULL_IMAGE"

                    docker rm -f "$CONTAINER_NAME" || true

                    docker run -d \
                      --name "$CONTAINER_NAME" \
                      --restart unless-stopped \
                      -p 127.0.0.1:3005:3000 \
                      "$FULL_IMAGE"
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    set -eu

                    for i in $(seq 1 30); do
                        if curl -fsS \
                            http://127.0.0.1:3005/ \
                            -o /dev/null; then
                            echo "ReactJS deployment successful!"
                            exit 0
                        fi

                        sleep 2
                    done

                    docker logs --tail 50 "$CONTAINER_NAME"
                    exit 1
                '''
            }
        }
    }

    post {
        success {
            echo 'Automatic Deployment SUCCESS!'
        }

        failure {
            echo 'Deployment FAILED! Check Console Output.'
        }
    }
}
