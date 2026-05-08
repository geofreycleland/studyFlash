const QUESTIONS = [
  {
    "id": 1,
    "question": "A company uses Amazon RDS with default backup settings for its database tier. The company needs to make a daily backup of the database to meet regulatory requirements. The company must retain the backups for 30 days. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Modify the RDS database to have a retention period of 30 days for automated backups.",
      "Use AWS Systems Manager Maintenance Windows to modify the RDS backup retention period.",
      "Write an AWS Lambda function to create an RDS snapshot every day.",
      "Create a manual snapshot every day by using the AWS CLI. Modify the RDS backup retention period."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "RDS automated backups already run daily. Changing the retention period to 30 days meets the requirement with almost no extra work.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Use AWS Systems Manager Maintenance Windows to modify the RDS backup retention period.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Write an AWS Lambda function to create an RDS snapshot every day.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Create a manual snapshot every day by using the AWS CLI. Modify the RDS backup retention period.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      }
    ]
  },
  {
    "id": 2,
    "question": "A solutions architect manages an analytics application. The application stores large amounts of semistructured data in an Amazon S3 bucket. The solutions architect wants to use parallel data processing to process the data more quickly. The solutions architect also wants to use information that is stored in an Amazon Redshift database to enrich the data. Which solution will meet these requirements?",
    "options": [
      "Use Amazon EMR to process the S3 data. Use Amazon EMR with the Amazon Redshift data to enrich the S3 data.",
      "Use Amazon Athena to process the S3 data. Use AWS Glue with the Amazon Redshift data to enrich the S3 data.",
      "Use Amazon EMR to process the S3 data. Use Amazon Kinesis Data Streams to move the S3 data into Amazon Redshift so that the data",
      "Use AWS Glue to process the S3 data. Use AWS Lake Formation with the Amazon Redshift data to enrich the S3 data."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "Amazon EMR is built for distributed, parallel processing of large datasets in S3 and can use Redshift data during processing.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Use Amazon Athena to process the S3 data. Use AWS Glue with the Amazon Redshift data to enrich the S3 data.",
        "reason": "Redshift is mainly for analytics/data warehousing, not the best fit for the application requirement here."
      },
      {
        "choice": "C",
        "text": "Use Amazon EMR to process the S3 data. Use Amazon Kinesis Data Streams to move the S3 data into Amazon Redshift so that the data",
        "reason": "Redshift is mainly for analytics/data warehousing, not the best fit for the application requirement here."
      },
      {
        "choice": "D",
        "text": "Use AWS Glue to process the S3 data. Use AWS Lake Formation with the Amazon Redshift data to enrich the S3 data.",
        "reason": "Redshift is mainly for analytics/data warehousing, not the best fit for the application requirement here."
      }
    ],
    "services": [
      {
        "name": "Amazon EMR",
        "definition": "Managed big data platform for distributed processing with Spark, Hadoop, and related tools."
      },
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "Amazon Redshift",
        "definition": "Managed data warehouse for SQL analytics at scale."
      },
      {
        "name": "Kinesis Data Streams",
        "definition": "Managed real-time streaming service for ordered event data."
      },
      {
        "name": "Athena",
        "definition": "Serverless SQL query service for data in S3."
      },
      {
        "name": "Glue",
        "definition": "Managed ETL and data integration service."
      }
    ]
  },
  {
    "id": 3,
    "question": "A company is planning to deploy a business-critical application in the AWS Cloud. The application requires durable storage with consistent, low-latency performance. Which type of storage should a solutions architect recommend to meet these requirements?",
    "options": [
      "Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume",
      "Amazon ElastiCache for Memcached cluster",
      "Instance store volume",
      "Throughput Optimized HDD Amazon Elastic Block Store (Amazon EBS) volume"
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "Provisioned IOPS SSD EBS is designed for durable block storage with predictable low latency and consistent I/O performance.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Amazon ElastiCache for Memcached cluster",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Instance store volume",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Throughput Optimized HDD Amazon Elastic Block Store (Amazon EBS) volume",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon EBS",
        "definition": "Block storage volumes for EC2 instances."
      },
      {
        "name": "ElastiCache",
        "definition": "Managed in-memory caching service for Redis or Memcached."
      }
    ]
  },
  {
    "id": 4,
    "question": "A transaction processing company has weekly scripted batch jobs that run on Amazon EC2 instances. The EC2 instances are in an Auto Scaling group. The number of transactions can vary, but the baseline CPU utilization that is noted on each run is at least 60%. The company needs to provision the capacity 30 minutes before the jobs run. Currently, engineers complete this task by manually modifying the Auto Scaling group parameters. The company does not have the resources to analyze the required capacity trends for the Auto Scaling group counts. The company needs an automated way to modify the Auto Scaling group's desired capacity. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Create an Amazon EventBridge event to invoke an AWS Lambda function when the CPU utilization metric value for the Auto Scaling group reaches 60%. Configure the Lambda function to increase the Auto Scaling group's desired capacity and maximum capacity by 20%.",
      "Create a dynamic scaling policy for the Auto Scaling group. Configure the policy to scale based on the CPU utilization metric. Set the target value for the metric to 60%.",
      "Create a scheduled scaling policy for the Auto Scaling group. Set the appropriate desired capacity, minimum capacity, and maximum capacity. Set the recurrence to weekly. Set the start time to 30 minutes before the batch jobs run.",
      "Create a predictive scaling policy for the Auto Scaling group. Configure the policy to scale based on forecast. Set the scaling metric to CPU utilization. Set the target value for the metric to 60%. In the policy, set the instances to pre-launch 30 minutes before the jobs run."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "Predictive scaling uses forecasts and can pre-launch capacity before the weekly batch job, which avoids manual tuning and trend analysis.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an Amazon EventBridge event to invoke an AWS Lambda function when the CPU utilization metric value for the Auto Scaling group reaches 60%. Configure the Lambda function to increase the Auto Scaling group's desired capacity and maximum capacity by 20%.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Create a dynamic scaling policy for the Auto Scaling group. Configure the policy to scale based on the CPU utilization metric. Set the target value for the metric to 60%.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Create a scheduled scaling policy for the Auto Scaling group. Set the appropriate desired capacity, minimum capacity, and maximum capacity. Set the recurrence to weekly. Set the start time to 30 minutes before the batch jobs run.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "EventBridge",
        "definition": "Event bus and scheduler for routing events and running scheduled tasks."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      }
    ]
  },
  {
    "id": 5,
    "question": "A company wants to relocate its on-premises MySQL database to AWS. The database accepts regular imports from a client-facing application, which causes a high volume of write operations. The company is concerned that the amount of traffic might be causing performance issues within the application. How should a solutions architect design the architecture on AWS?",
    "options": [
      "Provision an Amazon RDS for MySQL DB instance with Provisioned IOPS SSD storage. Monitor write operation metrics by using Amazon CloudWatch. Adjust the provisioned IOPS if necessary.",
      "Provision an Amazon Elastic File System (Amazon EFS) file system in General Purpose performance mode. Monitor Amazon CloudWatch for IOPS bottlenecks. Change to Provisioned Throughput performance mode if necessary.",
      "Provision an Amazon RDS for MySQL DB instance with General Purpose SSD storage. Place an Amazon ElastiCache cluster in front of the DB instance. Configure the application to query ElastiCache instead.",
      "Provision an Amazon DocumentDB (with MongoDB compatibility) instance with a memory optimized instance type. Monitor Amazon CloudWatch for performance-related issues. Change the instance class if necessary."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "RDS for MySQL keeps MySQL compatibility, and Provisioned IOPS directly addresses heavy write performance needs.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Provision an Amazon Elastic File System (Amazon EFS) file system in General Purpose performance mode. Monitor Amazon CloudWatch for IOPS bottlenecks. Change to Provisioned Throughput performance mode if necessary.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Provision an Amazon RDS for MySQL DB instance with General Purpose SSD storage. Place an Amazon ElastiCache cluster in front of the DB instance. Configure the application to query ElastiCache instead.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Provision an Amazon DocumentDB (with MongoDB compatibility) instance with a memory optimized instance type. Monitor Amazon CloudWatch for performance-related issues. Change the instance class if necessary.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "ElastiCache",
        "definition": "Managed in-memory caching service for Redis or Memcached."
      },
      {
        "name": "CloudWatch",
        "definition": "Monitoring and metrics service for AWS resources."
      },
      {
        "name": "Amazon EFS",
        "definition": "Managed shared NFS file storage for Linux workloads."
      }
    ]
  },
  {
    "id": 6,
    "question": "A solutions architect is designing an application that will allow business users to upload objects to Amazon S3. The solution needs to maximize object durability. Objects also must be readily available at any time and for any length of time. Users will access objects frequently within the first 30 days after the objects are uploaded, but users are much less likely to access objects that are older than 30 days. Which solution meets these requirements MOST cost-effectively?",
    "options": [
      "Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Glacier after 30 days.",
      "Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.",
      "Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.",
      "Store all the objects in S3 Intelligent-Tiering with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "S3 Standard is good for frequent access in the first 30 days. S3 Standard-IA keeps data durable and available while lowering cost after access drops.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Glacier after 30 days.",
        "reason": "Glacier classes are for archive access and are not ideal when objects must be immediately available."
      },
      {
        "choice": "C",
        "text": "Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.",
        "reason": "One Zone storage is cheaper but less resilient because it stores data in one Availability Zone."
      },
      {
        "choice": "D",
        "text": "Store all the objects in S3 Intelligent-Tiering with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      }
    ]
  },
  {
    "id": 7,
    "question": "A development team uses multiple AWS accounts for its development, staging, and production environments. Team members have been launching large Amazon EC2 instances that are underutilized. A solutions architect must prevent large instances from being launched in all accounts. How can the solutions architect meet this requirement with the LEAST operational overhead?",
    "options": [
      "Create an IAM role in each account that denies the launch of large EC2 instances. Grant the developers IAM group access to the role.",
      "Create an organization in AWS Organizations in the management account with the default policy. Create a service control policy (SCP) that denies the launch of large EC2 instances, and apply it to the AWS accounts.",
      "Define a resource in AWS Resource Access Manager that prevents the launch of large EC2 instances.",
      "Update the IAM policies to deny the launch of large EC2 instances. Apply the policies to all users."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "An SCP in AWS Organizations centrally blocks large EC2 launches across accounts with the least account-by-account work.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an IAM role in each account that denies the launch of large EC2 instances. Grant the developers IAM group access to the role.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "C",
        "text": "Define a resource in AWS Resource Access Manager that prevents the launch of large EC2 instances.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "D",
        "text": "Update the IAM policies to deny the launch of large EC2 instances. Apply the policies to all users.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "AWS Organizations",
        "definition": "Central management for multiple AWS accounts."
      },
      {
        "name": "SCP",
        "definition": "Service control policy that sets permission guardrails in AWS Organizations."
      }
    ]
  },
  {
    "id": 8,
    "question": "An application that is hosted on Amazon EC2 instances needs to access an Amazon S3 bucket. Traffic must not traverse the internet. How should a solutions architect configure access to meet these requirements?",
    "options": [
      "Establish an AWS Site-to-Site VPN connection between the VPC and the S3 bucket.",
      "Create a private hosted zone by using Amazon Route 53.",
      "Configure the EC2 instances to use a NAT gateway to access the S3 bucket.",
      "Set up a gateway VPC endpoint for Amazon S3 in the VPC."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "An S3 gateway VPC endpoint keeps S3 traffic on the AWS private network instead of sending it over the internet.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Establish an AWS Site-to-Site VPN connection between the VPC and the S3 bucket.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Create a private hosted zone by using Amazon Route 53.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Configure the EC2 instances to use a NAT gateway to access the S3 bucket.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "VPC endpoint",
        "definition": "Private connection from a VPC to supported AWS services."
      },
      {
        "name": "Route 53",
        "definition": "DNS and health-check service."
      }
    ]
  },
  {
    "id": 9,
    "question": "A company is developing a mobile game that streams score updates to a backend processor and then posts results on a leaderboard. A solutions architect needs to design a solution that can handle large traffic spikes, process the mobile game updates in order of receipt, and store the processed updates in a highly available database. The company also wants to minimize the management overhead required to maintain the solution. What should the solutions architect do to meet these requirements?",
    "options": [
      "Push score updates to Amazon Kinesis Data Streams. Process the updates with a fleet of Amazon EC2 instances set up for Auto Scaling. Store the processed updates in Amazon Redshift.",
      "Push score updates to Amazon Kinesis Data Streams. Process the updates in Kinesis Data Streams with AWS Lambda. Store the processed updates in Amazon DynamoDB.",
      "Push score updates to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe an AWS Lambda function to the SNS topic to process the updates. Store the processed updates in a SQL database running on Amazon EC2.",
      "Push score updates to an Amazon Simple Queue Service (Amazon SQS) queue. Use a fleet of Amazon EC2 instances with Auto Scaling to process the updates in the SQS queue. Store the processed updates in an Amazon RDS Multi-AZ DB instance."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "Kinesis handles ordered streaming spikes, Lambda processes without server management, and DynamoDB provides highly available scalable storage.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Push score updates to Amazon Kinesis Data Streams. Process the updates with a fleet of Amazon EC2 instances set up for Auto Scaling. Store the processed updates in Amazon Redshift.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "C",
        "text": "Push score updates to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe an AWS Lambda function to the SNS topic to process the updates. Store the processed updates in a SQL database running on Amazon EC2.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Push score updates to an Amazon Simple Queue Service (Amazon SQS) queue. Use a fleet of Amazon EC2 instances with Auto Scaling to process the updates in the SQS queue. Store the processed updates in an Amazon RDS Multi-AZ DB instance.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "Amazon Redshift",
        "definition": "Managed data warehouse for SQL analytics at scale."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "Kinesis Data Streams",
        "definition": "Managed real-time streaming service for ordered event data."
      },
      {
        "name": "SNS",
        "definition": "Pub/sub notification service that can fan out messages and send emails."
      },
      {
        "name": "SQS",
        "definition": "Managed message queue for decoupling systems."
      }
    ]
  },
  {
    "id": 10,
    "question": "A company has an on-premises server that uses an Oracle database to process and store customer information. The company wants to use an AWS database service to achieve higher availability and to improve application performance. The company also wants to offload reporting from its primary database system. Which solution will meet these requirements in the MOST operationally efficient way?",
    "options": [
      "Use Amazon RDS in a Single-AZ deployment to create an Oracle database. Create a read replica in the same zone as the primary DB instance. Direct the reporting functions to the read replica.",
      "Use AWS Database Migration Service (AWS DMS) to create an Amazon RDS DB instance in multiple AWS Regions. Point the reporting to a read replica.",
      "Use Amazon RDS deployed in a Multi-AZ cluster deployment to create an Oracle database. Direct the reporting functions to use the reader instance in the cluster deployment.",
      "Use Amazon RDS deployed in a Multi-AZ instance deployment to create an Amazon Aurora database. Direct the reporting functions to the reader instances."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "RDS Multi-AZ DB cluster gives high availability and readable instances for reporting without managing Oracle servers yourself.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use Amazon RDS in a Single-AZ deployment to create an Oracle database. Create a read replica in the same zone as the primary DB instance. Direct the reporting functions to the read replica.",
        "reason": "Single-AZ does not meet the high availability requirement."
      },
      {
        "choice": "B",
        "text": "Use AWS Database Migration Service (AWS DMS) to create an Amazon RDS DB instance in multiple AWS Regions. Point the reporting to a read replica.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use Amazon RDS deployed in a Multi-AZ instance deployment to create an Amazon Aurora database. Direct the reporting functions to the reader instances.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "DMS",
        "definition": "Database Migration Service for moving databases to AWS."
      },
      {
        "name": "Aurora",
        "definition": "AWS cloud-native relational database compatible with MySQL and PostgreSQL."
      }
    ]
  },
  {
    "id": 11,
    "question": "A company has an AWS Direct Connect connection from its corporate data center to its VPC in the us-east-1 Region. The company recently acquired a corporation that has several VPCs and a Direct Connect connection between its on-premises data center and the eu-west-2 Region. The CIDR blocks for the VPCs of the company and the corporation do not overlap. The company requires connectivity between two Regions and the data centers. The company needs a solution that is scalable while reducing operational overhead. What should a solutions architect do to meet these requirements?",
    "options": [
      "Set up inter-Region VPC peering between the VPC in us-east-1 and the VPCs in eu-west-2.",
      "Create private virtual interfaces from the Direct Connect connection in us-east-1 to the VPCs in eu-west-2.",
      "Establish VPN appliances in a fully meshed VPN network hosted by Amazon EC2. Use AWS VPN CloudHub to send and receive data between the data centers and each VPC.",
      "Connect the existing Direct Connect connection to a Direct Connect gateway. Route traffic from the virtual private gateways of the VPCs in each Region to the Direct Connect gateway."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "A Direct Connect gateway connects Direct Connect to VPCs across Regions at scale without building many separate links.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Set up inter-Region VPC peering between the VPC in us-east-1 and the VPCs in eu-west-2.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Create private virtual interfaces from the Direct Connect connection in us-east-1 to the VPCs in eu-west-2.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Establish VPN appliances in a fully meshed VPN network hosted by Amazon EC2. Use AWS VPN CloudHub to send and receive data between the data centers and each VPC.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Direct Connect",
        "definition": "Dedicated private network connection from on premises to AWS."
      }
    ]
  },
  {
    "id": 12,
    "question": "A company has customers located across the world. The company wants to use automation to secure its systems and network infrastructure. The company's security team must be able to track and audit all incremental changes to the infrastructure. Which solution will meet these requirements?",
    "options": [
      "Use AWS Organizations to set up the infrastructure. Use AWS Service Catalog to track changes.",
      "Use AWS CloudFormation to set up the infrastructure. Use AWS Config to track changes.",
      "Use AWS Organizations to set up the infrastructure. Use AWS Config to track changes.",
      "Use AWS CloudFormation to set up the infrastructure. Use AWS Service Catalog to track changes"
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "CloudFormation automates infrastructure as code, and AWS Config records and audits resource configuration changes.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use AWS Organizations to set up the infrastructure. Use AWS Service Catalog to track changes.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Use AWS Organizations to set up the infrastructure. Use AWS Config to track changes.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use AWS CloudFormation to set up the infrastructure. Use AWS Service Catalog to track changes",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "AWS Organizations",
        "definition": "Central management for multiple AWS accounts."
      },
      {
        "name": "CloudFormation",
        "definition": "Infrastructure as code service for provisioning AWS resources."
      },
      {
        "name": "AWS Config",
        "definition": "Tracks resource configuration and compliance over time."
      }
    ]
  },
  {
    "id": 13,
    "question": "A company has an on-premises MySQL database that handles transactional data. The company is migrating the database to the AWS Cloud. The migrated database must maintain compatibility with the company's applications that use the database. The migrated database also must scale automatically during periods of increased demand. Which migration solution will meet these requirements?",
    "options": [
      "Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon Aurora. Turn on Aurora Auto Scaling.",
      "Migrate the database to Amazon Redshift by using the mysqldump utility. Turn on Auto Scaling for the Amazon Redshift cluster.",
      "Use native MySQL tools to migrate the database to Amazon RDS for MySQL. Configure elastic storage scaling.",
      "Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon DynamoDB. Configure an Auto Scaling policy."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "Aurora keeps MySQL compatibility and can scale read capacity automatically with Aurora Auto Scaling.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Migrate the database to Amazon Redshift by using the mysqldump utility. Turn on Auto Scaling for the Amazon Redshift cluster.",
        "reason": "Redshift is mainly for analytics/data warehousing, not the best fit for the application requirement here."
      },
      {
        "choice": "C",
        "text": "Use native MySQL tools to migrate the database to Amazon RDS for MySQL. Configure elastic storage scaling.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon DynamoDB. Configure an Auto Scaling policy.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "Amazon Redshift",
        "definition": "Managed data warehouse for SQL analytics at scale."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "DMS",
        "definition": "Database Migration Service for moving databases to AWS."
      },
      {
        "name": "Aurora",
        "definition": "AWS cloud-native relational database compatible with MySQL and PostgreSQL."
      }
    ]
  },
  {
    "id": 14,
    "question": "A company is building a web application that serves a content management system. The content management system runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an Auto Scaling group across multiple Availability Zones. Users are constantly adding and updating files, blogs, and other website assets in the content management system. A solutions architect must implement a solution in which all the EC2 instances share up-to-date website content with the least possible lag time. Which solution meets these requirements?",
    "options": [
      "Copy the website assets to an Amazon Elastic File System (Amazon EFS) file system. Configure each EC2 instance to mount the EFS file system locally. Configure the website hosting application to reference the website assets that are stored in the EFS file system.",
      "Update the EC2 user data in the Auto Scaling group lifecycle policy to copy the website assets from the EC2 instance that was launched most recently. Configure the ALB to make changes to the website assets only in the newest EC2 instance.",
      "Copy the website assets to an Amazon S3 bucket. Ensure that each EC2 instance downloads the website assets from the S3 bucket to the attached Amazon Elastic Block Store (Amazon EBS) volume. Run the S3 sync command once each hour to keep files up to date.",
      "Restore an Amazon Elastic Block Store (Amazon EBS) snapshot with the website assets. Attach the EBS snapshot as a secondary EBS volume when a new EC2 instance is launched. Configure the website hosting application to reference the website assets that are stored in the secondary EBS volume."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "EFS gives all EC2 instances shared file storage with low lag, which fits content that users constantly update.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Update the EC2 user data in the Auto Scaling group lifecycle policy to copy the website assets from the EC2 instance that was launched most recently. Configure the ALB to make changes to the website assets only in the newest EC2 instance.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Copy the website assets to an Amazon S3 bucket. Ensure that each EC2 instance downloads the website assets from the S3 bucket to the attached Amazon Elastic Block Store (Amazon EBS) volume. Run the S3 sync command once each hour to keep files up to date.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Restore an Amazon Elastic Block Store (Amazon EBS) snapshot with the website assets. Attach the EBS snapshot as a secondary EBS volume when a new EC2 instance is launched. Configure the website hosting application to reference the website assets that are stored in the secondary EBS volume.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "Amazon EBS",
        "definition": "Block storage volumes for EC2 instances."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "Amazon EFS",
        "definition": "Managed shared NFS file storage for Linux workloads."
      }
    ]
  },
  {
    "id": 15,
    "question": "A company creates operations data and stores the data in an Amazon S3 bucket. For the company's annual audit, an external consultant needs to access an annual report that is stored in the S3 bucket. The external consultant needs to access the report for 7 days. The company must implement a solution to allow the external consultant access to only the report. Which solution will meet these requirements with the MOST operational efficiency?",
    "options": [
      "Create a new S3 bucket that is configured to host a public static website. Migrate the operations data to the new S3 bucket. Share the S3 website URL with the external consultant.",
      "Generate a presigned URL that has the required access to the location of the report on the S3 bucket. Share the presigned URL with the external consultant.",
      "Enable public access to the S3 bucket for 7 days. Remove access to the S3 bucket when the external consultant completes the audit.",
      "Create a new IAM user that has access to the report in the S3 bucket. Provide the access keys to the external consultant. Revoke the access keys after 7 days."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "A presigned S3 URL gives temporary access to one object without creating users or opening the whole bucket.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create a new S3 bucket that is configured to host a public static website. Migrate the operations data to the new S3 bucket. Share the S3 website URL with the external consultant.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Enable public access to the S3 bucket for 7 days. Remove access to the S3 bucket when the external consultant completes the audit.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Create a new IAM user that has access to the report in the S3 bucket. Provide the access keys to the external consultant. Revoke the access keys after 7 days.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      }
    ]
  },
  {
    "id": 16,
    "question": "A company that runs its application on AWS uses an Amazon Aurora DB cluster as its database. During peak usage hours when multiple users access and read the data, the monitoring system shows degradation of database performance for the write queries. The company wants to increase the scalability of the application to meet peak usage demands. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "Create a second Aurora DB cluster. Configure a copy job to replicate the users' data to the new database. Update the application to use the second database to read the data.",
      "Create an Amazon Redshift cluster. Copy the users' data to the Redshift cluster. Update the application to connect to the Redshift cluster and to perform read-only queries on the Redshift cluster.",
      "Create an Aurora read replica in the existing Aurora DB cluster. Update the application to use the replica endpoint for read-only queries and to use the cluster endpoint for write queries.",
      "Create an Amazon DynamoDB Accelerator (DAX) cluster in front of the existing Aurora DB cluster. Update the application to use the DAX"
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "An Aurora read replica offloads read traffic from the writer, improving write performance during peak read-heavy usage.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create a second Aurora DB cluster. Configure a copy job to replicate the users' data to the new database. Update the application to use the second database to read the data.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Create an Amazon Redshift cluster. Copy the users' data to the Redshift cluster. Update the application to connect to the Redshift cluster and to perform read-only queries on the Redshift cluster.",
        "reason": "Redshift is mainly for analytics/data warehousing, not the best fit for the application requirement here."
      },
      {
        "choice": "D",
        "text": "Create an Amazon DynamoDB Accelerator (DAX) cluster in front of the existing Aurora DB cluster. Update the application to use the DAX",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon Redshift",
        "definition": "Managed data warehouse for SQL analytics at scale."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "DAX",
        "definition": "DynamoDB Accelerator, an in-memory cache for DynamoDB."
      },
      {
        "name": "Aurora",
        "definition": "AWS cloud-native relational database compatible with MySQL and PostgreSQL."
      }
    ]
  },
  {
    "id": 17,
    "question": "A company has hired an external vendor to perform work in the company's AWS account. The vendor uses an automated tool that is hosted in an AWS account that the vendor owns. The vendor does not have IAM access to the company's AWS account. How should a solutions architect grant this access to the vendor?",
    "options": [
      "Create an IAM group in the company's account. Add the tool's IAM user from the vendor account to the group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.",
      "Create an IAM user in the company's account with a password that meets the password complexity requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.",
      "Create an IAM role in the company's account to delegate access to the vendor's IAM role. Attach the appropriate IAM policies to the role for the permissions that the vendor requires.",
      "Create a new identity provider by choosing \u201cAWS account\u201d as the provider type in the IAM console. Supply the vendor's AWS account ID and user name. Attach the appropriate IAM policies to the new provider for the permissions that the vendor requires."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "Cross-account IAM roles are the standard secure way to delegate access to a vendor-owned AWS account.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an IAM group in the company's account. Add the tool's IAM user from the vendor account to the group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Create an IAM user in the company's account with a password that meets the password complexity requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Create a new identity provider by choosing \u201cAWS account\u201d as the provider type in the IAM console. Supply the vendor's AWS account ID and user name. Attach the appropriate IAM policies to the new provider for the permissions that the vendor requires.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": []
  },
  {
    "id": 18,
    "question": "A company runs its databases on Amazon RDS for PostgreSQL. The company wants a secure solution to manage the master user password by rotating the password every 30 days. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Use the modify-db-instance command in the AWS CLI to change the password.",
      "Use Amazon EventBridge to schedule a custom AWS Lambda function to rotate the password every 30 days.",
      "Integrate AWS Systems Manager Parameter Store with Amazon RDS for PostgreSQL to automate password rotation.",
      "Integrate AWS Secrets Manager with Amazon RDS for PostgreSQL to automate password rotation."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "Secrets Manager integrates with RDS and can rotate database credentials automatically on a schedule.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use the modify-db-instance command in the AWS CLI to change the password.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "B",
        "text": "Use Amazon EventBridge to schedule a custom AWS Lambda function to rotate the password every 30 days.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "C",
        "text": "Integrate AWS Systems Manager Parameter Store with Amazon RDS for PostgreSQL to automate password rotation.",
        "reason": "Parameter Store can store values, but it is not the simplest fully managed rotation choice for this database password requirement."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "EventBridge",
        "definition": "Event bus and scheduler for routing events and running scheduled tasks."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Secrets Manager",
        "definition": "Secure secret storage with automatic rotation support."
      }
    ]
  },
  {
    "id": 19,
    "question": "A company wants to monitor its AWS costs for financial review. The cloud operations team is designing an architecture in the AWS Organizations management account to query AWS Cost and Usage Reports for all member accounts. The team must run this query once a month and provide a detailed analysis of the bill. Which solution is the MOST scalable and cost-effective way to meet these requirements?",
    "options": [
      "Enable Cost and Usage Reports in the management account. Deliver reports to Amazon Kinesis. Use Amazon EMR for analysis.",
      "Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon S3 Use Amazon Redshift for analysis.",
      "Enable Cost and Usage Reports in the management account. Deliver the reports to Amazon S3 Use Amazon Athena for analysis.",
      "Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon Kinesis. Use Amazon QuickSight tor analysis."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "Cost and Usage Reports delivered to S3 plus Athena is low-cost and scalable for monthly SQL analysis.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Enable Cost and Usage Reports in the management account. Deliver reports to Amazon Kinesis. Use Amazon EMR for analysis.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon S3 Use Amazon Redshift for analysis.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon Kinesis. Use Amazon QuickSight tor analysis.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon EMR",
        "definition": "Managed big data platform for distributed processing with Spark, Hadoop, and related tools."
      },
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "Amazon Redshift",
        "definition": "Managed data warehouse for SQL analytics at scale."
      },
      {
        "name": "AWS Organizations",
        "definition": "Central management for multiple AWS accounts."
      },
      {
        "name": "Athena",
        "definition": "Serverless SQL query service for data in S3."
      },
      {
        "name": "QuickSight",
        "definition": "Managed business intelligence and dashboard service."
      }
    ]
  },
  {
    "id": 20,
    "question": "A company has a mobile chat application with a data store based in Amazon DynamoDB. Users would like new messages to be read with as little latency as possible. A solutions architect needs to design an optimal solution that requires minimal application changes. Which method should the solutions architect select?",
    "options": [
      "Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to point to the Redis cache endpoint instead of DynamoDB.",
      "Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the code to use the DAX endpoint.",
      "Add DynamoDB read replicas to handle the increased read load. Update the application to point to the read endpoint for the read replicas.",
      "Double the number of read capacity units for the new messages table in DynamoDB. Continue to use the existing DynamoDB endpoint."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "DAX is a managed, low-latency cache built specifically for DynamoDB and needs only endpoint-level code changes.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to point to the Redis cache endpoint instead of DynamoDB.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Add DynamoDB read replicas to handle the increased read load. Update the application to point to the read endpoint for the read replicas.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Double the number of read capacity units for the new messages table in DynamoDB. Continue to use the existing DynamoDB endpoint.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "ElastiCache",
        "definition": "Managed in-memory caching service for Redis or Memcached."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "DAX",
        "definition": "DynamoDB Accelerator, an in-memory cache for DynamoDB."
      }
    ]
  },
  {
    "id": 21,
    "question": "A company runs an Oracle database on premises. As part of the company's migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system. Which solution will meet these requirements?",
    "options": [
      "Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.",
      "Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.",
      "Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.",
      "Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "RDS Custom for Oracle provides managed database features while still allowing access to the underlying OS, and a cross-Region read replica supports DR.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      }
    ]
  },
  {
    "id": 22,
    "question": "A company's website handles millions of requests each day, and the number of requests continues to increase. A solutions architect needs to improve the response time of the web application. The solutions architect determines that the application needs to decrease latency when retrieving product details from the Amazon DynamoDB table. Which solution will meet these requirements with the LEAST amount of operational overhead?",
    "options": [
      "Set up Amazon ElastiCache for Redis between the DynamoDB table and the web application. Route all read requests through Redis.",
      "Set up a DynamoDB Accelerator (DAX) cluster. Route all read requests through DAX.",
      "Set up Amazon DynamoDB Streams on the table, and have AWS Lambda read from the table and populate Amazon ElastiCache. Route all read requests through ElastiCache.",
      "Set up Amazon ElastiCache for Memcached between the DynamoDB table and the web application. Route all read requests through Memcached."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "DAX is the lowest-overhead cache for DynamoDB read latency because it is purpose-built for DynamoDB.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Set up Amazon ElastiCache for Redis between the DynamoDB table and the web application. Route all read requests through Redis.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Set up Amazon DynamoDB Streams on the table, and have AWS Lambda read from the table and populate Amazon ElastiCache. Route all read requests through ElastiCache.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Set up Amazon ElastiCache for Memcached between the DynamoDB table and the web application. Route all read requests through Memcached.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "ElastiCache",
        "definition": "Managed in-memory caching service for Redis or Memcached."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "DAX",
        "definition": "DynamoDB Accelerator, an in-memory cache for DynamoDB."
      }
    ]
  },
  {
    "id": 23,
    "question": "A company wants to provide data scientists with near real-time read-only access to the company's production Amazon RDS for PostgreSQL database. The database is currently configured as a Single-AZ database. The data scientists use complex queries that will not affect the production database. The company needs a solution that is highly available. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "Change the setup from a Single-AZ to a Multi-AZ instance deployment with a larger secondary standby instance. Provide the data scientists with a single read replica.",
      "Change the setup from a Single-AZ to a Multi-AZ cluster deployment with two readable standby instances. Provide read endpoints to the data scientists.",
      "Scale the existing production database in a maintenance window to provide enough power for the data scientists.",
      "Change the setup from a Single-AZ to a Multi-AZ instance deployment. Provide two additional read replicas for the data scientists."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "An RDS Multi-AZ DB cluster provides high availability and readable standby instances for near real-time read-only analytics.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Change the setup from a Single-AZ to a Multi-AZ instance deployment with a larger secondary standby instance. Provide the data scientists with a single read replica.",
        "reason": "Single-AZ does not meet the high availability requirement."
      },
      {
        "choice": "C",
        "text": "Scale the existing production database in a maintenance window to provide enough power for the data scientists.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Change the setup from a Single-AZ to a Multi-AZ instance deployment. Provide two additional read replicas for the data scientists.",
        "reason": "Single-AZ does not meet the high availability requirement."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      }
    ]
  },
  {
    "id": 24,
    "question": "A company collects data from thousands of remote devices by using a RESTful web services application that runs on an Amazon EC2 instance. The EC2 instance receives the raw data, transforms the raw data, and stores all the data in an Amazon S3 bucket. The number of remote devices will increase into the millions soon. The company needs a highly scalable solution that minimizes operational overhead. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
    "options": [
      "Use Amazon API Gateway to send the raw data to an Amazon Kinesis data stream. Configure Amazon Kinesis Data Firehose to use the data stream as a source to deliver the data to Amazon S3.",
      "Use AWS Glue to process the raw data in Amazon S3.",
      "Use Amazon Route 53 to route traffic to different EC2 instances.",
      "Add more EC2 instances to accommodate the increasing amount of incoming data."
    ],
    "correct": [
      0,
      1
    ],
    "answerText": "A, B",
    "whyRight": "API Gateway and Kinesis Firehose scale ingestion to S3, and Glue can process large raw datasets in S3 with low operational overhead.",
    "whyWrong": [
      {
        "choice": "C",
        "text": "Use Amazon Route 53 to route traffic to different EC2 instances.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "D",
        "text": "Add more EC2 instances to accommodate the increasing amount of incoming data.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Kinesis Data Firehose",
        "definition": "Managed delivery stream that loads streaming data into destinations like S3 and Redshift."
      },
      {
        "name": "Route 53",
        "definition": "DNS and health-check service."
      },
      {
        "name": "Glue",
        "definition": "Managed ETL and data integration service."
      }
    ]
  },
  {
    "id": 25,
    "question": "A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.",
      "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.",
      "Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.",
      "Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "KMS handles secure encryption and decryption, and S3 provides highly available durable encrypted storage.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "C",
        "text": "Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "Amazon EBS",
        "definition": "Block storage volumes for EC2 instances."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Secrets Manager",
        "definition": "Secure secret storage with automatic rotation support."
      },
      {
        "name": "KMS",
        "definition": "Key Management Service for creating and controlling encryption keys."
      }
    ]
  },
  {
    "id": 26,
    "question": "A company's SAP application has a backend SQL Server database in an on-premises environment. The company wants to migrate its on-premises application and database server to AWS. The company needs an instance type that meets the high demands of its SAP database. On-premises performance data shows that both the SAP application and the database have high memory utilization. Which solution will meet these requirements?",
    "options": [
      "Use the compute optimized instance family for the application. Use the memory optimized instance family for the database.",
      "Use the memory optimized instance family for both the application and the database.",
      "Use the high performance computing (HPC) optimized instance family for the application. Use the memory optimized instance family for the database.",
      "Use the storage optimized instance family for both the application and the database."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "Both the SAP application and database show high memory use, so memory optimized EC2 instances fit both tiers.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use the compute optimized instance family for the application. Use the memory optimized instance family for the database.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Use the high performance computing (HPC) optimized instance family for the application. Use the memory optimized instance family for the database.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use the storage optimized instance family for both the application and the database.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": []
  },
  {
    "id": 27,
    "question": "A company uses on-premises servers to host its applications. The company is running out of storage capacity. The applications use both block storage and NFS storage. The company needs a high-performing solution that supports local caching without re-architecting its existing applications. Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)",
    "options": [
      "Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.",
      "Deploy an AWS Storage Gateway volume gateway to replace the block storage.",
      "Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises servers.",
      "Deploy an AWS Storage Gateway file gateway to replace NFS storage."
    ],
    "correct": [
      1,
      3
    ],
    "answerText": "B, D",
    "whyRight": "Storage Gateway volume gateway supports block storage with local cache, and file gateway supports NFS-style access backed by AWS storage.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises servers.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon EFS",
        "definition": "Managed shared NFS file storage for Linux workloads."
      },
      {
        "name": "Storage Gateway",
        "definition": "Hybrid cloud storage service connecting on-premises apps to AWS storage."
      }
    ]
  },
  {
    "id": 28,
    "question": "A media company collects and analyzes user activity data on premises. The company wants to migrate this capability to AWS. The user activity data store will continue to grow and will be petabytes in size. The company needs to build a highly available data ingestion solution that facilitates on-demand analytics of existing data and new data with SQL. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones. Configure the service to forward data to an Amazon RDS Multi-AZ database.",
      "Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the data as the data arrives in the S3 bucket.",
      "Send activity data to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the data to an Amazon Redshift cluster.",
      "Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon S3 bucket."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "Kinesis Data Firehose can ingest streaming data with low operations and load it into Redshift for SQL analytics.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones. Configure the service to forward data to an Amazon RDS Multi-AZ database.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "B",
        "text": "Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the data as the data arrives in the S3 bucket.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon S3 bucket.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "Amazon Redshift",
        "definition": "Managed data warehouse for SQL analytics at scale."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Kinesis Data Firehose",
        "definition": "Managed delivery stream that loads streaming data into destinations like S3 and Redshift."
      }
    ]
  },
  {
    "id": 29,
    "question": "A company is creating a new application that will store a large amount of data. The data will be analyzed hourly and will be modified by several Amazon EC2 Linux instances that are deployed across multiple Availability Zones. The needed amount of storage space will continue to grow for the next 6 months. Which storage solution should a solutions architect recommend to meet these requirements?",
    "options": [
      "Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the file system on the application instances.",
      "Store the data in Amazon S3 Glacier. Update the S3 Glacier vault policy to allow access to the application instances.",
      "Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on the application instances.",
      "Store the data in an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume shared between the application instances."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "EFS is shared file storage that can be mounted by Linux EC2 instances across multiple Availability Zones and grows elastically.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Store the data in Amazon S3 Glacier. Update the S3 Glacier vault policy to allow access to the application instances.",
        "reason": "Glacier classes are for archive access and are not ideal when objects must be immediately available."
      },
      {
        "choice": "C",
        "text": "Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume on the application instances.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Store the data in an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume shared between the application instances.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "Amazon EBS",
        "definition": "Block storage volumes for EC2 instances."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Amazon EFS",
        "definition": "Managed shared NFS file storage for Linux workloads."
      }
    ]
  },
  {
    "id": 30,
    "question": "A company's web application consists of multiple Amazon EC2 instances that run behind an Application Load Balancer in a VPC. An Amazon RDS for MySQL DB instance contains the data. The company needs the ability to automatically detect and respond to suspicious or unexpected behavior in its AWS environment. The company already has added AWS WAF to its architecture. What should a solutions architect do next to protect against threats?",
    "options": [
      "Use Amazon Inspector to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.",
      "Use AWS Firewall Manager to perform threat detection. Configure Amazon EventBridge to filter for Firewall Manager findings and to invoke an AWS Lambda function to adjust the AWS WAF web ACL.",
      "Use Amazon GuardDuty to perform threat detection. Configure Amazon EventBridge to filter for GuardDuty findings and to invoke an AWS Lambda function to adjust the AWS WAF rules.",
      "Use Amazon Macie to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "GuardDuty detects suspicious activity, and EventBridge plus Lambda can automate updates to WAF rules.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use Amazon Inspector to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Use AWS Firewall Manager to perform threat detection. Configure Amazon EventBridge to filter for Firewall Manager findings and to invoke an AWS Lambda function to adjust the AWS WAF web ACL.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use Amazon Macie to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "EventBridge",
        "definition": "Event bus and scheduler for routing events and running scheduled tasks."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "GuardDuty",
        "definition": "Threat detection service for AWS accounts and workloads."
      },
      {
        "name": "AWS WAF",
        "definition": "Web application firewall for filtering HTTP/S traffic."
      },
      {
        "name": "Macie",
        "definition": "Sensitive data discovery service for S3."
      }
    ]
  },
  {
    "id": 31,
    "question": "A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of the responsibility in managing, updating, and securing servers for its AWS environment. What should a solutions architect recommend to meet these requirements?",
    "options": [
      "Configure AWS WAF rules and associate them with the ALB.",
      "Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then passes the traffic to the current ALB.",
      "Deploy the application using Amazon S3 with public hosting enabled.",
      "Deploy AWS Shield Advanced and add the ALB as a protected resource."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "AWS WAF directly protects an ALB from common web attacks like SQL injection and cross-site scripting with low server management.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then passes the traffic to the current ALB.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Deploy the application using Amazon S3 with public hosting enabled.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Deploy AWS Shield Advanced and add the ALB as a protected resource.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "AWS WAF",
        "definition": "Web application firewall for filtering HTTP/S traffic."
      }
    ]
  },
  {
    "id": 32,
    "question": "A company is expanding a secure on-premises network to the AWS Cloud by using an AWS Direct Connect connection. The on-premises network has no direct internet access. An application that runs on the on-premises network needs to use an Amazon S3 bucket. Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "Create a VPC and an Amazon S3 interface endpoint. Route the AWS traffic from the on-premises network to the S3 interface endpoint.",
      "Create a VPC peering connection between the on-premises network and Direct Connect. Route the AWS traffic over the peering connection.",
      "Create a VPC and a NAT gateway. Route the AWS traffic from the on-premises network to the NAT gateway.",
      "Create a public virtual interface (VIF). Route the AWS traffic over the public VIF."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "A public Direct Connect VIF allows private connectivity from on premises to public AWS services like S3 without using the public internet.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create a VPC and an Amazon S3 interface endpoint. Route the AWS traffic from the on-premises network to the S3 interface endpoint.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Create a VPC peering connection between the on-premises network and Direct Connect. Route the AWS traffic over the peering connection.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Create a VPC and a NAT gateway. Route the AWS traffic from the on-premises network to the NAT gateway.",
        "reason": "This does not keep traffic fully private to the AWS service or adds unnecessary network cost."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "Direct Connect",
        "definition": "Dedicated private network connection from on premises to AWS."
      }
    ]
  },
  {
    "id": 33,
    "question": "A company's solutions architect is designing an AWS multi-account solution that uses AWS Organizations. The solutions architect has organized the company's accounts into organizational units (OUs). The solutions architect needs a solution that will identify any changes to the OU hierarchy. The solution also needs to notify the company's operations team of any changes. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Use AWS CloudFormation templates to create accounts in Organizations. Use the drift detection operation on a stack to identify the changes to the OU hierarchy.",
      "Provision the AWS accounts by using AWS Control Tower. Use AWS Config aggregated rules to identify the changes to the OU hierarchy.",
      "Use AWS Service Catalog to create accounts in Organizations. Use an AWS CloudTrail organization trail to identify the changes to the OU hierarchy.",
      "Provision the AWS accounts by using AWS Control Tower. Use account drift notifications to identify the changes to the OU hierarchy."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "AWS Control Tower provides account drift notifications for changes such as OU hierarchy drift with low operational overhead.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use AWS CloudFormation templates to create accounts in Organizations. Use the drift detection operation on a stack to identify the changes to the OU hierarchy.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Provision the AWS accounts by using AWS Control Tower. Use AWS Config aggregated rules to identify the changes to the OU hierarchy.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Use AWS Service Catalog to create accounts in Organizations. Use an AWS CloudTrail organization trail to identify the changes to the OU hierarchy.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "AWS Organizations",
        "definition": "Central management for multiple AWS accounts."
      },
      {
        "name": "CloudFormation",
        "definition": "Infrastructure as code service for provisioning AWS resources."
      },
      {
        "name": "AWS Config",
        "definition": "Tracks resource configuration and compliance over time."
      },
      {
        "name": "Control Tower",
        "definition": "Governance service for setting up and managing multi-account AWS environments."
      }
    ]
  },
  {
    "id": 34,
    "question": "A company wants to configure its Amazon CloudFront distribution to use SSL/TLS certificates. The company does not want to use the default domain name for the distribution. Instead, the company wants to use a different domain name for the distribution. Which solution will deploy the certificate without incurring any additional costs?",
    "options": [
      "Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.",
      "Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.",
      "Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.",
      "Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-east-1 Region."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "CloudFront requires ACM public certificates in us-east-1 for alternate domain names, and public ACM certificates are free.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "ACM",
        "definition": "AWS Certificate Manager for provisioning and renewing TLS certificates."
      },
      {
        "name": "CloudFront",
        "definition": "Global content delivery network."
      }
    ]
  },
  {
    "id": 35,
    "question": "A company runs an ecommerce application on AWS. Amazon EC2 instances process purchases and store the purchase details in an Amazon Aurora PostgreSQL DB cluster. Customers are experiencing application timeouts during times of peak usage. A solutions architect needs to rearchitect the application so that the application can scale to meet peak usage demands. Which combination of actions will meet these requirements MOST cost-effectively? (Choose two.)",
    "options": [
      "Configure an Auto Scaling group of new EC2 instances to retry the purchases until the processing is complete. Update the applications to connect to the DB cluster by using Amazon RDS Proxy.",
      "Configure an Amazon API Gateway REST API with a usage plan.",
      "Configure an AWS Lambda function to retry the ticket purchases until the processing is complete.",
      "Update the application to send the purchase requests to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an Auto Scaling group of new EC2 instances that read from the SQS queue."
    ],
    "correct": [
      0,
      3
    ],
    "answerText": "A, D",
    "whyRight": "SQS decouples purchase requests from processing, Auto Scaling workers handle spikes, and RDS Proxy protects Aurora from connection storms.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Configure an Amazon API Gateway REST API with a usage plan.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Configure an AWS Lambda function to retry the ticket purchases until the processing is complete.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "SQS",
        "definition": "Managed message queue for decoupling systems."
      },
      {
        "name": "Aurora",
        "definition": "AWS cloud-native relational database compatible with MySQL and PostgreSQL."
      },
      {
        "name": "RDS Proxy",
        "definition": "Managed database proxy that pools and manages application database connections."
      }
    ]
  },
  {
    "id": 36,
    "question": "A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital's data team will scan the documents and will upload the documents to the AWS Cloud. A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
    "options": [
      "Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.",
      "Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.",
      "Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.",
      "Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text."
    ],
    "correct": [
      1,
      2
    ],
    "answerText": "B, C",
    "whyRight": "Textract extracts text from scanned documents, Comprehend Medical extracts medical entities, and Athena can query data stored in S3.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "D",
        "text": "Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Athena",
        "definition": "Serverless SQL query service for data in S3."
      },
      {
        "name": "Textract",
        "definition": "Extracts text and structured data from scanned documents and images."
      },
      {
        "name": "Comprehend Medical",
        "definition": "Detects medical information and PHI from text."
      }
    ]
  },
  {
    "id": 37,
    "question": "A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data. Which solution will meet these requirements with the LEAST operational effort?",
    "options": [
      "Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.",
      "Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.",
      "Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.",
      "Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "Multi-AZ Auto Scaling plus Multi-AZ database deployment and RDS Proxy improves availability with low operational effort.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Aurora",
        "definition": "AWS cloud-native relational database compatible with MySQL and PostgreSQL."
      },
      {
        "name": "RDS Proxy",
        "definition": "Managed database proxy that pools and manages application database connections."
      },
      {
        "name": "Route 53",
        "definition": "DNS and health-check service."
      }
    ]
  },
  {
    "id": 38,
    "question": "A company has 15 employees. The company stores employee start dates in an Amazon DynamoDB table. The company wants to send an email message to each employee on the day of the employee's work anniversary. Which solution will meet these requirements with the MOST operational efficiency?",
    "options": [
      "Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to send email messages to employees when necessary. Schedule this Lambda function to run every day.",
      "Create a script that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to send email messages to employees when necessary. Use a cron job to run this script every day on an Amazon EC2 instance.",
      "Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Notification Service (Amazon SNS) to send email messages to employees when necessary. Schedule this Lambda function to run every day.",
      "Create a script that scans the DynamoDB table and uses Amazon Simple Notification Service (Amazon SNS) to send email messages to"
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "A scheduled Lambda can check DynamoDB daily, and SNS can send email notifications without managing servers.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to send email messages to employees when necessary. Schedule this Lambda function to run every day.",
        "reason": "SQS queues messages but does not directly send email notifications."
      },
      {
        "choice": "B",
        "text": "Create a script that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to send email messages to employees when necessary. Use a cron job to run this script every day on an Amazon EC2 instance.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "D",
        "text": "Create a script that scans the DynamoDB table and uses Amazon Simple Notification Service (Amazon SNS) to send email messages to",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "SNS",
        "definition": "Pub/sub notification service that can fan out messages and send emails."
      },
      {
        "name": "SQS",
        "definition": "Managed message queue for decoupling systems."
      }
    ]
  },
  {
    "id": 39,
    "question": "A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.",
      "Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.",
      "Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.",
      "Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "ECS on Fargate runs existing containers with little code change, Auto Scaling, and no EC2 server management.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Fargate",
        "definition": "Serverless compute engine for containers on ECS or EKS."
      },
      {
        "name": "ECS",
        "definition": "Container orchestration service for running Docker containers."
      }
    ]
  },
  {
    "id": 40,
    "question": "A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an Elastic Load Balancer in an Auto Scaling group and with an Amazon DynamoDB table. The company wants to ensure the application can be made available in anotherAWS Region with minimal downtime. What should a solutions architect do to meet these requirements with the LEAST amount of downtime?",
    "options": [
      "Create an AWS CloudFormation template to create EC2 instances and a load balancer to be launched when needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.",
      "Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table.",
      "Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to be launched when needed. Configure DNS failover to point to the new disaster recovery Region's load balancer.",
      "Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm to trigger an AWS Lambda function that updates Amazon Route 53 pointing to the disaster recovery load balancer."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "Pre-created DR Auto Scaling and load balancing plus DynamoDB global tables gives the lowest downtime; automated DNS switching routes users to DR.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an AWS CloudFormation template to create EC2 instances and a load balancer to be launched when needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "B",
        "text": "Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to be launched when needed. Configure DNS failover to point to the new disaster recovery Region's load balancer.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "CloudWatch",
        "definition": "Monitoring and metrics service for AWS resources."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "CloudFormation",
        "definition": "Infrastructure as code service for provisioning AWS resources."
      },
      {
        "name": "Route 53",
        "definition": "DNS and health-check service."
      }
    ]
  },
  {
    "id": 41,
    "question": "An ecommerce company wants to use machine learning (ML) algorithms to build and train models. The company will use the models to visualize complex scenarios and to detect trends in customer data. The architecture team wants to integrate its ML models with a reporting platform to analyze the augmented data and use the data directly in its business intelligence dashboards. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Use Amazon SageMaker to build and train models. Use Amazon QuickSight to visualize the data.",
      "Use a pre-built ML Amazon Machine Image (AMI) from the AWS Marketplace to build and train models. Use Amazon OpenSearch Service to visualize the data.",
      "Use AWS Glue to create an ML transform to build and train models. Use Amazon OpenSearch Service to visualize the data.",
      "Use Amazon QuickSight to build and train models by using calculated fields. Use Amazon QuickSight to visualize the data."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "SageMaker is the managed ML service for building and training models, and QuickSight is the managed BI/dashboard service.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Use a pre-built ML Amazon Machine Image (AMI) from the AWS Marketplace to build and train models. Use Amazon OpenSearch Service to visualize the data.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Use AWS Glue to create an ML transform to build and train models. Use Amazon OpenSearch Service to visualize the data.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use Amazon QuickSight to build and train models by using calculated fields. Use Amazon QuickSight to visualize the data.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "QuickSight",
        "definition": "Managed business intelligence and dashboard service."
      },
      {
        "name": "SageMaker",
        "definition": "Managed machine learning service for building, training, and deploying models."
      },
      {
        "name": "Glue",
        "definition": "Managed ETL and data integration service."
      }
    ]
  },
  {
    "id": 42,
    "question": "A solutions architect needs to ensure that API calls to Amazon DynamoDB from Amazon EC2 instances in a VPC do not travel across the internet. Which combination of steps should the solutions architect take to meet this requirement? (Choose two.)",
    "options": [
      "Create a gateway endpoint for DynamoDB.",
      "Create an elastic network interface for the endpoint in each of the subnets of the VPC.",
      "Create a route table entry for the endpoint.",
      "Create an interface endpoint for Amazon EC2."
    ],
    "correct": [
      0,
      2
    ],
    "answerText": "A, C",
    "whyRight": "DynamoDB uses a gateway VPC endpoint, and route table entries send DynamoDB traffic through that endpoint privately.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Create an elastic network interface for the endpoint in each of the subnets of the VPC.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Create an interface endpoint for Amazon EC2.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      }
    ]
  },
  {
    "id": 43,
    "question": "A company that uses AWS Organizations runs 150 applications across 30 different AWS accounts. The company used AWS Cost and Usage Report to create a new report in the management account. The report is delivered to an Amazon S3 bucket that is replicated to a bucket in the data collection account. The company's senior leadership wants to view a custom dashboard that provides NAT gateway costs each day starting at the beginning of the current month. Which solution will meet these requirements?",
    "options": [
      "Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use Amazon Athena to query the new report.",
      "Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use Amazon Athena to query the new report.",
      "Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use AWS DataSync to query the new report.",
      "Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use AWS DataSync to query the new report."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "QuickSight dashboards can visualize Cost and Usage Report data queried from S3 by Athena.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use Amazon Athena to query the new report.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use AWS DataSync to query the new report.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use AWS DataSync to query the new report.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "CloudWatch",
        "definition": "Monitoring and metrics service for AWS resources."
      },
      {
        "name": "AWS Organizations",
        "definition": "Central management for multiple AWS accounts."
      },
      {
        "name": "Athena",
        "definition": "Serverless SQL query service for data in S3."
      },
      {
        "name": "QuickSight",
        "definition": "Managed business intelligence and dashboard service."
      }
    ]
  },
  {
    "id": 44,
    "question": "A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process adding and removing application nodes as needed based on the number of jobs to be processed. The processor solutions architect must ensure that the application is loosely coupled and the job items are durably stored. Which design should the solutions architect use?",
    "options": [
      "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.",
      "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.",
      "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.",
      "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "SQS durably stores jobs and decouples producers from workers. Auto Scaling can scale workers based on queue depth.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.",
        "reason": "SNS is pub/sub and does not durably hold work items like a queue."
      },
      {
        "choice": "B",
        "text": "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.",
        "reason": "SNS is pub/sub and does not durably hold work items like a queue."
      },
      {
        "choice": "D",
        "text": "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "SNS",
        "definition": "Pub/sub notification service that can fan out messages and send emails."
      },
      {
        "name": "SQS",
        "definition": "Managed message queue for decoupling systems."
      }
    ]
  },
  {
    "id": 45,
    "question": "A company has hundreds of Amazon EC2 Linux-based instances in the AWS Cloud. Systems administrators have used shared SSH keys to manage the instances. After a recent audit, the company's security team is mandating the removal of all shared keys. A solutions architect must design a solution that provides secure access to the EC2 instances. Which solution will meet this requirement with the LEAST amount of administrative overhead?",
    "options": [
      "Use an Amazon Cognito custom authorizer to authenticate users. Invoke an AWS Lambda function to generate a temporary SSH key.",
      "Use AWS Systems Manager Session Manager to connect to the EC2 instances.",
      "Allow shared SSH access to a set of bastion instances. Configure all other instances to allow only SSH access from the bastion instances.",
      "Use AWS Security Token Service (AWS STS) to generate one-time SSH keys on demand."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "Session Manager provides secure shell-like access without shared SSH keys or bastion hosts.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use an Amazon Cognito custom authorizer to authenticate users. Invoke an AWS Lambda function to generate a temporary SSH key.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "C",
        "text": "Allow shared SSH access to a set of bastion instances. Configure all other instances to allow only SSH access from the bastion instances.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use AWS Security Token Service (AWS STS) to generate one-time SSH keys on demand.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Systems Manager Session Manager",
        "definition": "Secure browser/CLI access to instances without SSH keys."
      },
      {
        "name": "Cognito",
        "definition": "Managed user sign-up, sign-in, and authentication."
      }
    ]
  },
  {
    "id": 46,
    "question": "A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years. What is the MOST operationally efficient solution that meets these requirements?",
    "options": [
      "Use AWS Backup to create backup schedules and retention policies for the table.",
      "Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.",
      "Use DynamoDB point-in-time recovery to back up the table continuously."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "AWS Backup centrally manages DynamoDB backup schedules and long retention policies such as 7 years.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use DynamoDB point-in-time recovery to back up the table continuously.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "EventBridge",
        "definition": "Event bus and scheduler for routing events and running scheduled tasks."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "CloudWatch",
        "definition": "Monitoring and metrics service for AWS resources."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "AWS Backup",
        "definition": "Centralized backup service for AWS resources."
      }
    ]
  },
  {
    "id": 47,
    "question": "A company runs a global web application on Amazon EC2 instances behind an Application Load Balancer. The application stores data in Amazon Aurora. The company needs to create a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss. The solution does not need to handle the load when the primary infrastructure is healthy. What should a solutions architect do to meet these requirements?",
    "options": [
      "Deploy the application with the required infrastructure elements in place. Use Amazon Route 53 to configure active-passive failover. Create an Aurora Replica in a second AWS Region.",
      "Replicate the primary infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora database that is restored from the latest snapshot.",
      "Back up data with AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-passive failover. Create an Aurora second primary instance in the second Region.",
      "Host a scaled-down deployment of the application in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora Replica in the second Region."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "An active-passive DR setup with Route 53 and an Aurora replica in another Region meets 30-minute RTO/RPO better than restore-only designs.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Replicate the primary infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora database that is restored from the latest snapshot.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Back up data with AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-passive failover. Create an Aurora second primary instance in the second Region.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Host a scaled-down deployment of the application in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora Replica in the second Region.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Aurora",
        "definition": "AWS cloud-native relational database compatible with MySQL and PostgreSQL."
      },
      {
        "name": "AWS Backup",
        "definition": "Centralized backup service for AWS resources."
      },
      {
        "name": "Route 53",
        "definition": "DNS and health-check service."
      }
    ]
  },
  {
    "id": 48,
    "question": "A company's near-real-time streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minutes to complete. The workload frequently experiences high latency due to large amounts of incoming data. A solutions architect needs to design a scalable and serverless solution to enhance performance. Which combination of steps should the solutions architect take? (Choose two.)",
    "options": [
      "Use Amazon EC2 instances in an Auto Scaling group to process the data.",
      "Use AWS Database Migration Service (AWS DMS) to ingest the data.",
      "Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data.",
      "Use AWS Lambda with AWS Step Functions to process the data."
    ],
    "correct": [
      2,
      4
    ],
    "answerText": "C, E",
    "whyRight": "Firehose provides serverless streaming ingestion, and ECS Fargate handles long-running 30-minute processing without Lambda time limits.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use Amazon EC2 instances in an Auto Scaling group to process the data.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "B",
        "text": "Use AWS Database Migration Service (AWS DMS) to ingest the data.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use AWS Lambda with AWS Step Functions to process the data.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "DMS",
        "definition": "Database Migration Service for moving databases to AWS."
      },
      {
        "name": "Fargate",
        "definition": "Serverless compute engine for containers on ECS or EKS."
      },
      {
        "name": "ECS",
        "definition": "Container orchestration service for running Docker containers."
      }
    ]
  },
  {
    "id": 49,
    "question": "A company uses an Amazon CloudFront distribution to serve content pages for its website. The company needs to ensure that clients use a TLS certificate when accessing the company's website. The company wants to automate the creation and renewal of the TLS certificates. Which solution will meet these requirements with the MOST operational efficiency?",
    "options": [
      "Use AWS Certificate Manager (ACM) to create a certificate. Use DNS validation for the domain.",
      "Use a CloudFront security policy to create a certificate.",
      "Use a CloudFront origin access control (OAC) to create a certificate.",
      "Use AWS Certificate Manager (ACM) to create a certificate. Use email validation for the domain."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "ACM with DNS validation automates public TLS certificate issuance and renewal for CloudFront.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Use a CloudFront security policy to create a certificate.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Use a CloudFront origin access control (OAC) to create a certificate.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Use AWS Certificate Manager (ACM) to create a certificate. Use email validation for the domain.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "ACM",
        "definition": "AWS Certificate Manager for provisioning and renewing TLS certificates."
      },
      {
        "name": "CloudFront",
        "definition": "Global content delivery network."
      }
    ]
  },
  {
    "id": 50,
    "question": "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.",
      "Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.",
      "Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.",
      "Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "Textract extracts text from PDFs/JPEGs, and Comprehend Medical identifies PHI with less custom code.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Textract",
        "definition": "Extracts text and structured data from scanned documents and images."
      },
      {
        "name": "Comprehend Medical",
        "definition": "Detects medical information and PHI from text."
      },
      {
        "name": "SageMaker",
        "definition": "Managed machine learning service for building, training, and deploying models."
      }
    ]
  },
  {
    "id": 51,
    "question": "A company runs an application on Amazon EC2 instances. The company needs to implement a disaster recovery (DR) solution for the application. The DR solution needs to have a recovery time objective (RTO) of less than 4 hours. The DR solution also needs to use the fewest possible AWS resources during normal operations. Which solution will meet these requirements in the MOST operationally efficient way?",
    "options": [
      "Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS CloudFormation.",
      "Launch EC2 instances in a secondary AWS Region. Keep the EC2 instances in the secondary Region active at all times.",
      "Launch EC2 instances in a secondary Availability Zone. Keep the EC2 instances in the secondary Availability Zone active at all times.",
      "Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS Lambda and custom scripts."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "AMI copies plus CloudFormation templates are a pilot-light style DR approach with few resources running normally and faster recovery than manual scripts.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Launch EC2 instances in a secondary AWS Region. Keep the EC2 instances in the secondary Region active at all times.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "C",
        "text": "Launch EC2 instances in a secondary Availability Zone. Keep the EC2 instances in the secondary Availability Zone active at all times.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "D",
        "text": "Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS Lambda and custom scripts.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "CloudFormation",
        "definition": "Infrastructure as code service for provisioning AWS resources."
      }
    ]
  },
  {
    "id": 52,
    "question": "A company runs an application in a VPC with public and private subnets. The VPC extends across multiple Availability Zones. The application runs on Amazon EC2 instances in private subnets. The application uses an Amazon Simple Queue Service (Amazon SQS) queue. A solutions architect needs to design a secure solution to establish a connection between the EC2 instances and the SQS queue. Which solution will meet these requirements?",
    "options": [
      "Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets. Attach to the interface endpoint a public subnet.",
      "Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets. Attach an Amazon SQS access policy to the interface VPC endpoint that allows requests from only a specified VPC endpoint.",
      "Implement a gateway endpoint for Amazon SQS. Add a NAT gateway to the private subnets. Attach an IAM role to the EC2 instances that allows access to the SQS queue.",
      "Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the private subnets. Add to the endpoint a security group that has an inbound access rule that allows traffic from the EC2 instances that are in the private subnets."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "SQS uses an interface VPC endpoint. Placing it in private subnets with security groups allows private EC2 access.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets. Attach to the interface endpoint a public subnet.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets. Attach an Amazon SQS access policy to the interface VPC endpoint that allows requests from only a specified VPC endpoint.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Implement a gateway endpoint for Amazon SQS. Add a NAT gateway to the private subnets. Attach an IAM role to the EC2 instances that allows access to the SQS queue.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "VPC endpoint",
        "definition": "Private connection from a VPC to supported AWS services."
      },
      {
        "name": "SQS",
        "definition": "Managed message queue for decoupling systems."
      }
    ]
  },
  {
    "id": 53,
    "question": "A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet. Which solution will meet these requirements?",
    "options": [
      "Configure a NAT gateway in the same subnet as the EC2 instances.",
      "Create an S3 bucket in the same AWS Region as the EC2 instances.",
      "Create an S3 bucket in a private subnet.",
      "Configure an S3 gateway endpoint."
    ],
    "correct": [
      3
    ],
    "answerText": "D",
    "whyRight": "An S3 gateway endpoint lets EC2 instances call S3 APIs privately without internet routing.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Configure a NAT gateway in the same subnet as the EC2 instances.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "B",
        "text": "Create an S3 bucket in the same AWS Region as the EC2 instances.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "C",
        "text": "Create an S3 bucket in a private subnet.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      }
    ]
  },
  {
    "id": 54,
    "question": "A solutions architect needs to review a company's Amazon S3 buckets to discover personally identifiable information (PII). The company stores the PII data in the us-east-1 Region and us-west-2 Region. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Configure Amazon Macie in each Region. Create a job to analyze the data that is in Amazon S3.",
      "Configure AWS Security Hub for all Regions. Create an AWS Config rule to analyze the data that is in Amazon S3.",
      "Configure Amazon Inspector to analyze the data that is in Amazon S3.",
      "Configure Amazon GuardDuty to analyze the data that is in Amazon S3."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "Amazon Macie is the managed service for discovering sensitive data such as PII in S3 and must be enabled per Region.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Configure AWS Security Hub for all Regions. Create an AWS Config rule to analyze the data that is in Amazon S3.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Configure Amazon Inspector to analyze the data that is in Amazon S3.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Configure Amazon GuardDuty to analyze the data that is in Amazon S3.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "AWS Config",
        "definition": "Tracks resource configuration and compliance over time."
      },
      {
        "name": "GuardDuty",
        "definition": "Threat detection service for AWS accounts and workloads."
      },
      {
        "name": "Macie",
        "definition": "Sensitive data discovery service for S3."
      }
    ]
  },
  {
    "id": 55,
    "question": "An ecommerce company needs to run a scheduled daily job to aggregate and filter sales records for analytics. The company stores the sales records in an Amazon S3 bucket. Each object can be up to 10 GB in size. Based on the number of sales events, the job can take up to an hour to complete. The CPU and memory usage of the job are constant and are known in advance. A solutions architect needs to minimize the amount of operational effort that is needed for the job to run. Which solution meets these requirements?",
    "options": [
      "Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type and an Auto Scaling group with at least on EC2 instance. Create an Amazon EventBridge Scheduled event to run the ECS task once a day.",
      "Create an AWS Lambda function. Create an Amazon API Gateway HTTP API, and integrate the API with the function. Create an Amazon EventBridge rule to call the API Gateway endpoint on a schedule.",
      "Create an Amazon Elastic Container Service (Amazon ECS) cluster with an AWS Fargate launch type. Create an Amazon EventBridge scheduled event to run the ECS task once a day.",
      "Create an AWS Lambda function that has an Amazon EventBridge notification. Schedule the EventBridge event to run once a day."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "A scheduled ECS task on Fargate can run for an hour with known CPU/memory and avoids managing EC2 servers.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type and an Auto Scaling group with at least on EC2 instance. Create an Amazon EventBridge Scheduled event to run the ECS task once a day.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Create an AWS Lambda function. Create an Amazon API Gateway HTTP API, and integrate the API with the function. Create an Amazon EventBridge rule to call the API Gateway endpoint on a schedule.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Create an AWS Lambda function that has an Amazon EventBridge notification. Schedule the EventBridge event to run once a day.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "EventBridge",
        "definition": "Event bus and scheduler for routing events and running scheduled tasks."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Fargate",
        "definition": "Serverless compute engine for containers on ECS or EKS."
      },
      {
        "name": "ECS",
        "definition": "Container orchestration service for running Docker containers."
      }
    ]
  },
  {
    "id": 56,
    "question": "A company wants to restrict access to the content of its web application. The company needs to protect the content by using authorization techniques that are available on AWS. The company also wants to implement a serverless architecture for authorization and authentication that has low login latency. The solution must integrate with the web application and serve web content globally. The application currently has a small user base, but the company expects the application's user base to increase. Which solution will meet these requirements?",
    "options": [
      "Configure Amazon Cognito for authentication. Implement Lambda@Edge for authorization. Configure Amazon CloudFront to serve the web application globally.",
      "Configure Amazon Cognito for authentication. Implement AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally.",
      "Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally.",
      "Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "Cognito handles authentication, Lambda@Edge supports low-latency authorization near users, and CloudFront serves globally.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Configure Amazon Cognito for authentication. Implement AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "CloudFront",
        "definition": "Global content delivery network."
      },
      {
        "name": "Cognito",
        "definition": "Managed user sign-up, sign-in, and authentication."
      },
      {
        "name": "Lambda@Edge",
        "definition": "Runs Lambda code at CloudFront edge locations."
      }
    ]
  },
  {
    "id": 57,
    "question": "A company needs to optimize the cost of its Amazon EC2 instances. The company also needs to change the type and family of its EC2 instances every 2-3 months. What should the company do to meet these requirements?",
    "options": [
      "Purchase a No Upfront Compute Savings Plan for a 1-year term.",
      "Purchase Partial Upfront Reserved Instances for a 3-year term.",
      "Purchase All Upfront Reserved Instances for a 1-year term.",
      "Purchase an All Upfront EC2 Instance Savings Plan for a 1-year term."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "A Compute Savings Plan discounts compute while allowing changes across instance families, sizes, OS, and Regions.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Purchase Partial Upfront Reserved Instances for a 3-year term.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Purchase All Upfront Reserved Instances for a 1-year term.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Purchase an All Upfront EC2 Instance Savings Plan for a 1-year term.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      }
    ]
  },
  {
    "id": 58,
    "question": "A company is running several business applications in three separate VPCs within the us-east-1 Region. The applications must be able to communicate between VPCs. The applications also must be able to consistently send hundreds of gigabytes of data each day to a latency-sensitive application that runs in a single on-premises data center. A solutions architect needs to design a network connectivity solution that maximizes cost-effectiveness. Which solution meets these requirements?",
    "options": [
      "Set up three AWS Direct Connect connections from the data center to a Direct Connect gateway in us-east-1. Establish connectivity by configuring each VPC to use one of the Direct Connect connections.",
      "Set up one AWS Direct Connect connection from the data center to AWS. Create a transit gateway, and attach each VPC to the transit gateway. Establish connectivity between the Direct Connect connection and the transit gateway.",
      "Configure three AWS Site-to-Site VPN connections from the data center to AWS. Establish connectivity by configuring one VPN connection for each VPC.",
      "Launch a third-party virtual network appliance in each VPC. Establish an IPsec VPN tunnel between the data center and each virtual appliance."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "Transit Gateway connects multiple VPCs and Direct Connect efficiently, avoiding separate connections per VPC.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Set up three AWS Direct Connect connections from the data center to a Direct Connect gateway in us-east-1. Establish connectivity by configuring each VPC to use one of the Direct Connect connections.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Configure three AWS Site-to-Site VPN connections from the data center to AWS. Establish connectivity by configuring one VPN connection for each VPC.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Launch a third-party virtual network appliance in each VPC. Establish an IPsec VPN tunnel between the data center and each virtual appliance.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Direct Connect",
        "definition": "Dedicated private network connection from on premises to AWS."
      }
    ]
  },
  {
    "id": 59,
    "question": "A company has an organization in AWS Organizations. The company runs Amazon EC2 instances across four AWS accounts in the root organizational unit (OU). There are three nonproduction accounts and one production account. The company wants to prohibit users from launching EC2 instances of a certain size in the nonproduction accounts. The company has created a service control policy (SCP) to deny access to launch instances that use the prohibited types. Which solutions to deploy the SCP will meet these requirements? (Choose two.)",
    "options": [
      "Attach the SCP to the Organizations management account.",
      "Attach the SCP to the root OU for the organization.",
      "Create an OU for the required accounts. Attach the SCP to the OU. Move the nonproduction member accounts into the new OU.",
      "Attach the SCP to the three nonproduction Organizations member accounts."
    ],
    "correct": [
      2,
      3
    ],
    "answerText": "C, D",
    "whyRight": "To target only nonproduction, attach the SCP directly to the three nonproduction accounts or put them in a new OU and attach the SCP there.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Attach the SCP to the Organizations management account.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Attach the SCP to the root OU for the organization.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "AWS Organizations",
        "definition": "Central management for multiple AWS accounts."
      },
      {
        "name": "SCP",
        "definition": "Service control policy that sets permission guardrails in AWS Organizations."
      }
    ]
  },
  {
    "id": 60,
    "question": "A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances in an Auto Scaling group behind an Elastic Load Balancing (ELB) load balancer. The application connects to an Amazon DynamoDB table. For disaster recovery (DR) purposes, the company wants to ensure that the application is available from another AWS Region with minimal downtime. Which solution will meet these requirements with the LEAST downtime?",
    "options": [
      "Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new DR Region's ELB.",
      "Create an AWS CloudFormation template to create EC2 instances, ELBs, and DynamoDB tables to be launched when necessary. Configure DNS failover to point to the new DR Region's ELB.",
      "Create an AWS CloudFormation template to create EC2 instances and an ELB to be launched when necessary. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new DR Region's ELB.",
      "Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm with an evaluation period of 10 minutes to invoke an AWS Lambda function that updates Amazon Route 53 to point to the DR Region's ELB."
    ],
    "correct": [
      0
    ],
    "answerText": "A",
    "whyRight": "Active DR infrastructure plus DynamoDB global tables and Route 53 failover gives the least downtime.",
    "whyWrong": [
      {
        "choice": "B",
        "text": "Create an AWS CloudFormation template to create EC2 instances, ELBs, and DynamoDB tables to be launched when necessary. Configure DNS failover to point to the new DR Region's ELB.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "C",
        "text": "Create an AWS CloudFormation template to create EC2 instances and an ELB to be launched when necessary. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new DR Region's ELB.",
        "reason": "This can work in some designs, but it requires more server management than the managed/serverless option."
      },
      {
        "choice": "D",
        "text": "Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm with an evaluation period of 10 minutes to invoke an AWS Lambda function that updates Amazon Route 53 to point to the DR Region's ELB.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "Auto Scaling",
        "definition": "Automatically adjusts capacity to match demand."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "CloudWatch",
        "definition": "Monitoring and metrics service for AWS resources."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "CloudFormation",
        "definition": "Infrastructure as code service for provisioning AWS resources."
      },
      {
        "name": "Route 53",
        "definition": "DNS and health-check service."
      }
    ]
  },
  {
    "id": 61,
    "question": "A company runs several Amazon RDS for Oracle On-Demand DB instances that have high utilization. The RDS DB instances run in member accounts that are in an organization in AWS Organizations. The company's finance team has access to the organization's management account and member accounts. The finance team wants to find ways to optimize costs by using AWS Trusted Advisor. Which combination of steps will meet these requirements? (Choose two.)",
    "options": [
      "Review the Trusted Advisor checks for compute optimization. Crosscheck the results by using AWS Compute Optimizer.",
      "Review the Trusted Advisor checks for Amazon RDS Reserved Instance Optimization.",
      "Review the Trusted Advisor checks for Amazon RDS Idle DB Instances.",
      "Use the Trusted Advisor recommendations in the management account."
    ],
    "correct": [
      1,
      3
    ],
    "answerText": "B, D",
    "whyRight": "For high-use RDS On-Demand databases, Trusted Advisor RDS Reserved Instance Optimization in the management account helps find cost savings across the organization.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Review the Trusted Advisor checks for compute optimization. Crosscheck the results by using AWS Compute Optimizer.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "C",
        "text": "Review the Trusted Advisor checks for Amazon RDS Idle DB Instances.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "AWS Organizations",
        "definition": "Central management for multiple AWS accounts."
      },
      {
        "name": "Trusted Advisor",
        "definition": "AWS best-practice checks for cost, security, performance, and more."
      }
    ]
  },
  {
    "id": 62,
    "question": "A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate. What should a solutions architect recommend to meet this requirement?",
    "options": [
      "Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).",
      "Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.",
      "Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "AWS Config has a managed rule for ACM certificate expiration, and EventBridge/SNS can notify when resources become noncompliant.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "B",
        "text": "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "D",
        "text": "Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      }
    ],
    "services": [
      {
        "name": "EventBridge",
        "definition": "Event bus and scheduler for routing events and running scheduled tasks."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "CloudWatch",
        "definition": "Monitoring and metrics service for AWS resources."
      },
      {
        "name": "SNS",
        "definition": "Pub/sub notification service that can fan out messages and send emails."
      },
      {
        "name": "AWS Config",
        "definition": "Tracks resource configuration and compliance over time."
      },
      {
        "name": "ACM",
        "definition": "AWS Certificate Manager for provisioning and renewing TLS certificates."
      },
      {
        "name": "Trusted Advisor",
        "definition": "AWS best-practice checks for cost, security, performance, and more."
      }
    ]
  },
  {
    "id": 63,
    "question": "A company uses Amazon RDS for PostgreSQL databases for its data tier. The company must implement password rotation for the databases. Which solution meets this requirement with the LEAST operational overhead?",
    "options": [
      "Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.",
      "Store the password in AWS Secrets Manager. Enable automatic rotation on the secret.",
      "Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the AWS KMS key.",
      "Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password."
    ],
    "correct": [
      1
    ],
    "answerText": "B",
    "whyRight": "Secrets Manager is designed for database password storage and automatic rotation with the least operational overhead.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.",
        "reason": "Parameter Store can store values, but it is not the simplest fully managed rotation choice for this database password requirement."
      },
      {
        "choice": "C",
        "text": "Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the AWS KMS key.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password.",
        "reason": "Parameter Store can store values, but it is not the simplest fully managed rotation choice for this database password requirement."
      }
    ],
    "services": [
      {
        "name": "Amazon RDS",
        "definition": "Managed relational database service for engines like MySQL, PostgreSQL, Oracle, and SQL Server."
      },
      {
        "name": "RDS",
        "definition": "Managed relational database service for relational databases."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "Secrets Manager",
        "definition": "Secure secret storage with automatic rotation support."
      },
      {
        "name": "KMS",
        "definition": "Key Management Service for creating and controlling encryption keys."
      }
    ]
  },
  {
    "id": 64,
    "question": "A company uses a legacy application to produce data in CSV format. The legacy application stores the output data in Amazon S3. The company is deploying a new commercial off-the-shelf (COTS) application that can perform complex SQL queries to analyze data that is stored in Amazon Redshift and Amazon S3 only. However, the COTS application cannot process the .csv files that the legacy application produces. The company cannot update the legacy application to produce data in another format. The company needs to implement a solution so that the COTS application can use the data that the legacy application produces. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      "Create an AWS Lambda function and an Amazon DynamoDB table. Use an S3 event to invoke the Lambda function. Configure the Lambda function to convert the .csv files to a format that the COTS application can process and store the output files in Amazon S3.",
      "Use Amazon EventBridge to launch an Amazon EMR cluster on a weekly schedule. Configure the EMR cluster to perform an extract, transform, and load (ETL) job to process the .csv files and store the processed data in an Amazon Redshift table.",
      "Create an AWS Glue extract, transform, and load (ETL) job that runs on a schedule. Configure the ETL job to process the .csv files and store the processed data in Amazon Redshift.",
      "Develop a Python script that runs on Amazon EC2 instances to convert the .csv files to .sql files. Invoke the Python script on a cron schedule to store the output files in Amazon S3."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "AWS Glue is the managed ETL service for converting CSV data and loading processed data into Redshift with low operations.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Create an AWS Lambda function and an Amazon DynamoDB table. Use an S3 event to invoke the Lambda function. Configure the Lambda function to convert the .csv files to a format that the COTS application can process and store the output files in Amazon S3.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "B",
        "text": "Use Amazon EventBridge to launch an Amazon EMR cluster on a weekly schedule. Configure the EMR cluster to perform an extract, transform, and load (ETL) job to process the .csv files and store the processed data in an Amazon Redshift table.",
        "reason": "This choice misses a key requirement, is less managed, or is less cost-effective than the correct answer."
      },
      {
        "choice": "D",
        "text": "Develop a Python script that runs on Amazon EC2 instances to convert the .csv files to .sql files. Invoke the Python script on a cron schedule to store the output files in Amazon S3.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      }
    ],
    "services": [
      {
        "name": "Amazon EMR",
        "definition": "Managed big data platform for distributed processing with Spark, Hadoop, and related tools."
      },
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "Amazon Redshift",
        "definition": "Managed data warehouse for SQL analytics at scale."
      },
      {
        "name": "EC2",
        "definition": "Virtual servers in AWS."
      },
      {
        "name": "EventBridge",
        "definition": "Event bus and scheduler for routing events and running scheduled tasks."
      },
      {
        "name": "AWS Lambda",
        "definition": "Serverless compute that runs code without managing servers."
      },
      {
        "name": "DynamoDB",
        "definition": "Managed NoSQL key-value and document database."
      },
      {
        "name": "Glue",
        "definition": "Managed ETL and data integration service."
      }
    ]
  },
  {
    "id": 65,
    "question": "A media company uses an Amazon CloudFront distribution to deliver content over the internet. The company wants only premium customers to have access to the media streams and file content. The company stores all content in an Amazon S3 bucket. The company also delivers content on demand to customers for a specific purpose, such as movie rentals or music downloads. Which solution will meet these requirements?",
    "options": [
      "Generate and activate field-level encryption to block non-premium customers.",
      "Generate and provide S3 signed cookies to premium customers.",
      "Generate and provide CloudFront signed URLs to premium customers.",
      "Use origin access control (OAC) to limit the access of non-premium customers."
    ],
    "correct": [
      2
    ],
    "answerText": "C",
    "whyRight": "CloudFront signed URLs are meant to grant temporary, controlled access to specific premium content such as rentals or downloads.",
    "whyWrong": [
      {
        "choice": "A",
        "text": "Generate and activate field-level encryption to block non-premium customers.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "B",
        "text": "Generate and provide S3 signed cookies to premium customers.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      },
      {
        "choice": "D",
        "text": "Use origin access control (OAC) to limit the access of non-premium customers.",
        "reason": "This adds more manual work or custom maintenance, so it is not the least operational overhead choice."
      }
    ],
    "services": [
      {
        "name": "Amazon S3",
        "definition": "Object storage for durable, scalable storage of files and data."
      },
      {
        "name": "CloudFront",
        "definition": "Global content delivery network."
      }
    ]
  }
];