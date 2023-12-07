# Docker Demo

This is a basic demo of a dockerized application that can be deployed to AWS ECR and Fargate. 

One change is needed before deploying - the `docker-demo-stack.ts` file needs to be updated with the correct VPC name (or updated to create a new VPC).

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
