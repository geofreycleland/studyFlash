
const questions = [
{
question: "Sample Question",
options: [
"Correct Answer",
"Wrong Answer 1",
"Wrong Answer 2",
"Wrong Answer 3"
],
correct: 0,
explanation: "This is correct because it provides the least operational overhead and fully meets the requirement.",
wrongExplanations: {
1: "This option requires additional manual maintenance and does not scale as efficiently.",
2: "This option does not fully meet the durability or scalability requirement in the question.",
3: "This option introduces unnecessary complexity and operational burden."
},
services: [
{
name: "Amazon RDS",
definition: "Fully managed relational database service supporting MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB. Handles backups, patching, scaling, and high availability."
},
{
name: "AWS Lambda",
definition: "Serverless compute service that automatically runs code in response to events without provisioning or managing servers."
}
],
examClue: "Keywords like least operational overhead usually point toward managed AWS services."
}
];
