---
layout: article
title: The Importance of CloudFormation Files
image:
    path: /assets/img/articles/the-importance-of-cloudformation-files/featured.jpg
cover: /assets/img/articles/the-importance-of-cloudformation-files/cover.jpg
featured: /assets/img/articles/the-importance-of-cloudformation-files/featured.jpg
preview: /assets/img/articles/the-importance-of-cloudformation-files/preview.jpg
description: The goal is to give a better understanding of what CloudFormation is and why it should be used for every AWS project.
categories: [knowledge]
isFeatured: false
author: David Gatti
---

This article is meant for CEOs, CTOs, and Managers. The goal is to give a better understanding of what CloudFormation is and why it should be used for every AWS project, by answering a common question clients have: *Why spend time making a CloudFormation file?*

## What is CloudFormation

A CloudFormation file is nothing more than a text file with the text formatted as JSON.

Within this JSON file, you are able to describe what type of resources you'd like AWS to create for you, as if you clicked them through the AWS Console.

Simple, right?

## The Benefits of Using CloudFormation

Because everything is laid out as JSON format, when you upload this file, you get exactly what you've described.

This way...

- it's much easier to update your configuration or service, because you just have to edit one value. You will also know the exact location, instead of losing yourself to an ever changing web UI and you end up wasting time looking for an option that's buried somewhere.
- if the file is committed to GitHub, you can track and monitor the changes to the stack over time.
- you can deploy the exact stack described in the JSON file to any AWS account. This is ideal when you have multiple environments, such as one AWS account for development and another for production (learn about [AWS Organizations](/articles/knowledge/the-benefits-of-aws-organizations.html) here). What you test in one account, you can  then deploy in production within a few minutes and keep track of all your changes.

## More Flexibility

Another benefit that's hard to see in the beginning, is that as you become more comfortable with CloudFormation files you will start to like this way of working in the cloud.

After you've done one file (which takes some time at first), the next time you make a new project based on a similar cloud structure it will take just hours or a few days, instead of weeks or months.

You can just copy and past what you need from your completed file. The best thing is that once a file like this is created and tested, you know it works – now and in the future. And, even if AWS makes some changes, modifications to the file will be minor and easy to do.

It takes time and money to get the hang of it, but once you do you'll have a nice foundation to build upon and extend.

## To sum it up

I hope that you now understand the benefits of using CloudFormation files and that this AWS Service will help you streamline your DevOps work flow.