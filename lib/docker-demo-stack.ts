import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as ecr from 'aws-cdk-lib/aws-ecr'
import * as ecs from 'aws-cdk-lib/aws-ecs'
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as ecr_assets from 'aws-cdk-lib/aws-ecr-assets'

export class DockerDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // create an ecr repository name kevinlb-docker-demo

    const ecrRepo = new ecr.Repository(this, 'kevinlb-docker-demo', {
      repositoryName: 'kevinlb-docker-demo'
    })

    // Note: we can loop through multiple regions to make this stack multi-region
    const region = 'us-east-1'

    // create a load balanced fargate service that uses the ecr repo created above
    // TODO: replace the VPC name with your own VPC, or use the default VPC
    const defaultVpc = ec2.Vpc.fromLookup(this, 'DefaultVPC', { vpcName: '<YOUR VPC NAME HERE>' })
    const ecsCluster = new ecs.Cluster(this, 'kevinlb-docker-demo-cluster', {
      vpc: defaultVpc,
      clusterName: 'kevinlb-docker-demo-cluster'
    })

    const dockerAsset = new ecr_assets.DockerImageAsset(this, 'HopefullyNominalImage', {
      directory: 'front-end/',
      assetName: 'Dockerfile'
    })
    const fargateService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'kevinlb-docker-demo-service', {
      cluster: ecsCluster,
      cpu: 256,
      desiredCount: 1,
      taskImageOptions: {
        image: ecs.ContainerImage.fromDockerImageAsset(dockerAsset),
        containerPort: 3000
      },
      memoryLimitMiB: 512,
      publicLoadBalancer: true
    })
  }
}
