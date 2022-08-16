import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}


pipeline {
    //The agent section specifies where the entire Pipeline, or a specific stage, 
    //will execute in the Jenkins environment depending on where the agent section is placed.
    agent  {
    }
    //The environment directive specifies a sequence of key-value pairs which will be defined
    //as environment variables for all steps, or stage-specific steps, depending on where the environment directive is located within the Pipeline.
    environment {
        BUILD_USER = ''
    }
    
    //The parameters directive provides a list of parameters that a user should provide when triggering the Pipeline.
    //The values for these user-specified parameters are made available to Pipeline steps via the params object, see
    //the Parameters, Declarative Pipeline for its specific usage.
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/SproutSmokeTest/*.cy.js', description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: 'Pick the web browser you want to use to run your scripts')
    }
    
    tools {
        nodejs "Recent NodeJS"
        }
    stages {
        
        stage('Build'){
            //The steps section defines a series of one or more steps to be executed in a given stage directive.
            steps {
               
            }
        }
        
        stage('Testing') {
            steps {
                sh "npm install cypress"
                sh "npx cypress run --headless --browser --spec cypress/e2e/SproutSmokeTest/*.cy.js --record --key 773605ae-79d9-443c-b640-64acd29226ba"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }
}