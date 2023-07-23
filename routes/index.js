var express = require('express');
var router = express.Router();

const glossary_list = [
  {'id': 1, 'Term': 'DevOps', 'Description': 'DevOps is an approach to working that emphasizes the quick, incremental, and continuous delivery of products', 'reference': 'https://www.coursera.org'},
  {'id': 2, 'Term': 'Kubernetes', 'Description': 'Kubernetes automates operational tasks of container management and includes built-in commands for deploying applications, rolling out changes to your applications, scaling your applications up and down to fit changing needs, monitoring your applications, and more—making it easier to manage applications', 'reference': 'cloud.google.com'},
  {'id': 3, 'Term': 'Lean', 'Description': 'Lean agile is a development method that helps teams identify waste and refine processes. It\'s a guiding mindset that facilitates efficiency, effectiveness, and continuous improvement', 'reference': 'easyagile.com'},
  {'id': 4, 'Term': 'Microservices', 'Description': 'Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams', 'reference': 'https://aws.amazon.com/microservices/'},
  {'id': 5, 'Term': 'Version Control System(VCS)', 'Description': 'Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time', 'reference': 'https://www.atlassian.com/git/tutorials/what-is-version-control'},
  {'id': 6, 'Term': 'DevSecOps', 'Description': 'DevSecOps is a development practice that integrates security initiatives at every stage of the software development lifecycle to deliver robust and secure applications. DevSecOps infuses security into the continuous integration and continuous delivery (CI/CD) pipeline, allowing development teams to address some of today\'s most pressing security challenges at DevOps speed', 'reference': 'vmware.com'},
  {'id': 7, 'Term': 'Dockerization', 'Description': 'Dockerization involves packaging an application in a Docker image to run in one or more containers. Dockerizing an application involves specifying everything needed to run the application in a Dockerfile and then using the file to build a specialized Docker image that can be shared to multiple machines', 'reference': 'blog.appsignal.com'},
  {'id': 8, 'Term': 'Jenkins', 'Description': 'Jenkins is an open-source automation tool written in Java with plugins built for continuous integration. Jenkins is used to build and test your software projects continuously making it easier for developers to integrate changes to the project, and making it easier for users to obtain a fresh build ', 'reference': 'edureka.com'},
  {'id': 9, 'Term': 'Scrum', 'Description': 'Scrum is an agile project management framework that helps teams structure and manage their work through a set of values, principles, and practices ', 'reference': 'https://www.atlassian.com/agile/scrum'},
  {'id': 10, 'Term': 'Feature Driven Development (FDD)', 'Description': 'Feature-Driven Development (FDD) is customer-centric, iterative, and incremental, with the goal of delivering tangible software results often and efficiently. FDD in Agile encourages status reporting at all levels, which helps to track progress and results. FDD allows teams to update the project regularly and identify errors quickly', 'reference': 'https://www.planview.com/resources/articles/fdd-agile/'},
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'SIT 722 DevOps Glossary', glossary: glossary_list });
});

module.exports = router;

