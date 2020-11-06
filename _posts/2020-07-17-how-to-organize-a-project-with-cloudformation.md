---
title: How to organize a project with CloudFormation
image: /assets/img/articles/how-to-organize-a-project-with-cloudformation/cover.png
header: /assets/img/articles/how-to-organize-a-project-with-cloudformation/header.png
layout: article
description: How should a project be broken down to keep it flexible?
categories: [how_to]
isFeatured: true
author: David Gatti
authorAvatar: /assets/img/avatars/avatar-1.jpg
---

This article is meant for CEOs, CTOs, and Managers. The goal is to give a better understanding of how to organize a project with CloudFormation, by answering a common question clients have: *How should a project be broken down to keep it flexible?*

## Don't paint yourself in to a corner

CloudFormation files are powerful, will simplify your life, and are easy to be reused in other projects, as mentioned in this article where I describe the beefiest of CloudFormation files.

But it is important to understand how to separate the files in to smaller stacks, because putting the whole project in to one big file will make your life harder, not to mention there is a limit of 200 services per file.

## Harder how?

AWS will follow the instructions in the CloudFormation file and will add, update, or remove services at your command. But sometimes you can encounter a situation where you can't create an update because there is a dependency that is blocking the resources that you want to update. A common problem is, for example, renaming a service or removing a service that another service is relying on. And, since the two series are linked together by an ARN in some situations, AWS won't update that ARN and you will be stuck.

## The solution

The key is to keep the CloudFormation files separate for each category of your project. For example, this is a default breakdown that I do for clients:

- Database
- Compute
- Cedentials
- SMTP
- Notification
- etc.

In the Database CloudFormation file, I might have RDS, DynamoDB, and also S3. If I'm taking advantage of the triggering system that DynamoDB and S3 provides, then I paste the ARN of the Lambdas from the Compute CloudFormation file. Since it is impossible right now deploy a stack that has the triggering service and the triggered one, since, for example, S3 depends on the existence of a Lambda to get the ARN to be triggered, and the Lambda permission depends on the S3 existing to get the ARN for the policy.

The solution is to keep these two parts separate to allow yourself maximum flexibility while also keeping things organized in a logical way.

## Easier to manage and control

This way of braking down the project into separate CF files makes it also easier to manage, because you can have an expert for each project. For example, if your project gets big enough, you can have a Database expert that manages and has only access to the Database stack. Same for a Serverless expert, and maybe one person that can handle 3 smaller stacks at the same time.

This way everyone only has access to what they are responsible for.

## To sum it up

I hope this article helped you to get an idea how a project should be structured with multiple CloudFormation files, and of course you are not limited to the examples provided above. You are free to brake your project down in anyway that makes sense to you, but regardless of how you do, one big file is never the way to go, since the goal is to have the project grow over time.