---
title: The Importance of CloudFormation Files
cover: /assets/img/articles/the-importance-of-cloudformation-files/cover.png
header: /assets/img/articles/the-importance-of-cloudformation-files/header.png
layout: post
subtitle: The goal is to give a better understanding of what CloudFormation is and why every AWS project should be done only through a file like this.
categories: [knowledge]
---

This article is meant for CEOs, CTOs, and Managers. The goal is to give a better understanding of what CloudFormation is and why every AWS project should be done only through a file like this. 

This article also tries to answer a common question our clients ask: *Why spend time making a CloudFormation file*?

In the end, If you'd like to chat about this topic, we provide a free one-hour consultation for new clients.

# What is CloudFormation

A CloudFormation file is nothing more than a text file with the text formatted as JSON.

Within this JSON file, you describe what type of resources you'd like AWS to create for you, as if you clicked them through the AWS Console.

# The Benefits of Using CloudFormation

Because everything is described in this JSON format, when you upload this file, you get exactly what you've described.

This way...

- it's much easier to update your configuration or service. You have to edit just one value - and you know the exact location - instead of losing yourself to an ever changing web UI and wasting time looking for an option that's buried somewhere.
- if the file is committed to GitHub, you can track and monitor the changes to the stack over time.
- you can deploy the exact stack described in the JSON file to any AWS account. This is ideal when you have multiple environments, such as one AWS account for development and another for production (learn about AWS Organizations here). What you test in one, you can deploy in production within a few minutes and keep track of all your changes.

# More Flexibility

An additional benefit is hard to see in the beginning, but it's the one that will make you like this way of working in the cloud.

Once you do one file (which will take some time the first time you do it), making a new project based on a similar cloud structure will take just hours or a few days, instead of weeks or months.

Just copy and past what you need from what you have. And the best thing is that once a file like this is created and tested, you know it works - now and in the future. And, even if AWS makes some changes, modifications to the file will be minor and easy to do.

# To sum it up

I hope that I was able to make it easy to understand the benefits of this approach and that this AWS Service will help you streamline your DevOps work flow.
