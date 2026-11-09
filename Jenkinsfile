pipeline {
    agent any

    options {
        skipDefaultCheckout()
        disableConcurrentBuilds()
        timestamps()
    }

    environment {
        IMAGE_REPO = 'ghcr.io/stefen-ly/react-ansible-cicd-lab'
        ANSIBLE_HOST = '172.31.34.164'
    }

    stages {
        stage('Checkout GitHub') {
            steps {
                checkout scm
            }
        }

        stage('Prepare Image Tag') {
            steps {
                script {
                    env.IMAGE_TAG = sh(
                        script: 'git rev-parse --short=12 HEAD',
                        returnStdout: true
                    ).trim()

                    env.FULL_IMAGE = "${env.IMAGE_REPO}:${env.IMAGE_TAG}"
                }

                echo "Image: ${env.FULL_IMAGE}"
            }
        }

        stage('Build React Docker Image') {
            steps {
                sh '''
                    set -eu
                    docker build -t "$FULL_IMAGE" .
                '''
            }
        }

        stage('Push Docker Image to GHCR') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'ghcr-push',
                        usernameVariable: 'GHCR_USER',
                        passwordVariable: 'GHCR_TOKEN'
                    )
                ]) {
                    sh '''
                        set +x
                        set -eu

                        export DOCKER_CONFIG="$(mktemp -d)"
                        trap 'rm -rf "$DOCKER_CONFIG"' EXIT

                        printf '%s' "$GHCR_TOKEN" |
                          docker login ghcr.io \
                            -u "$GHCR_USER" \
                            --password-stdin

                        docker push "$FULL_IMAGE"
                    '''
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sshagent(credentials: ['ansible-controller-ssh']) {
                    sh '''
                        set -eu

                        ssh \
                          -o BatchMode=yes \
                          -o StrictHostKeyChecking=yes \
                          -o UserKnownHostsFile=/var/lib/jenkins/.ssh/known_hosts \
                          ubuntu@"$ANSIBLE_HOST" \
                          "cd /home/ubuntu/ansible-aws-mini-project && \
                           . .venv/bin/activate && \
                           ansible-playbook \
                             -i scripts/custom_inventory.py \
                             playbooks/deploy-cicd-react.yml \
                             -e cicd_image=$FULL_IMAGE"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline SUCCESS: React image deployed to AWS.'
        }

        failure {
            echo 'CI/CD Pipeline FAILED. Check Console Output.'
        }
    }
}
