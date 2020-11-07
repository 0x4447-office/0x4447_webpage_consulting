---
title: The benefits of AWS organizations
image: /assets/img/articles/the-benefits-of-aws-organizations/og.jpg
cover: /assets/img/articles/the-benefits-of-aws-organizations/cover.jpg
header: /assets/img/articles/the-benefits-of-aws-organizations/header.jpg
layout: article
description: The goal is to show you the benefits of managing your AWS infrastructure using Organizations.
categories: [knowledge]
isFeatured: false
author: David Gatti
authorAvatar: /assets/img/avatars/avatar-1.jpg
---

This article is meant for CEOs, CTOs, and managers who want to understand the benefits of managing AWS infrastructure using Organizations, by answering a common question clients have: *Why spend the time setting up AWS Organizations?* 

## Why I wrote this article

I have worked with countless clients on recurring issues that leave them feeling trapped and struggling how to:

- building new features
- understanding where they are
- figuring out whether their infrastructure is secure
- running a stable product
- Understand their costs

I am confident that this article will help you understand how important is to use AWS at the outset so that you start off organized and thus avoid the extra time and costs involved in having to later reorganize.

## Key features of AWS Organizations

- You have one bill to pay for all of your AWS accounts within Organizations.
- You get a detailed breakdown of your bill per AWS account, which helps showcase where your money goes.
- You can control access to AWS resources for each individual AWS account from the main Organizations account.
- You can apply policies from the Organizations account down to all the sub-accounts.
- You can organize the sub-accounts in Organization Unit (OU) to help you further organize the company in AWS and improve security.

## The benefits

It's much easier to:

- Do audits
- Set the right policies and access resources
- Create test environments
- Understand what each AWS account has for newcomers
- Lower costs by exposing hidden costs

## The bare-minimum setup

I always recommend this setup to my clients:

- In **Development** you test and work on the project. Here you have the most freedom to use different resources.
- The **Demo** account is where you can showcase the latest features that are ready to go into production. This is your last chance to see if you like what's been done. It can also be used to perform demos for clients.
- On the other hand, **Production** is for your customers with live data.

The **Demo** and **Production** environments are locked down to the point that no one but the main admin has access to them. 

All accounts have 100 percent automatic deployment and do not have access to the servers over SSH or other means – no exceptions. 

## A word of caution

Having said all this, here's an example of what will happen if you start the wrong way, based on interacting with clients over the years.

Depending on project size, creating a CloudFormation from scratch takes an average of one month, and then it takes two more weeks to create all the AWS accounts to deploy the stack using the created CloudFormation files. This is the stage where all the final testing and final tuning happens.

Lastly, you'll start running your code in the new environment with a new work flow. A lot of the project's bugs will surface at this stage, because up to this point no one could log into the servers to perform ad hoc changes (also known as massaging the code). Now all the work a developer told himself he'd copy later in the repository shows up at this stage. How long will it take to fix everything? It depends on the project. From my experience, it takes a team of developers three months to normalize everything and adapt to the more organized environment.

## What else should I know?

- You're limited to five nested OU, so design your infrastructure accordingly.
- You can use CloudFormation to describe your organization.
- You can programmatically request a limit increase.
- Converting the main account to an Organization won't make any changes to what you already have in the account.

## An example of a more complex Organization

This is an example for once you get your project off the ground. You could extend your Organization this way later on:

- Application (OU):
    - Development - (AWS Account)
    - Demo - (AWS Account)
    - Production - (AWS Account)
- Information security (OU):
    - Log Collection - (AWS Account)
    - Auditing - (AWS Account)
- Infrastructure (OU):
    - DNS - (AWS Account)
    - Build Tools - (AWS Account)
    - Repos - (AWS Account)
- Office (OU):
    - Work Mail - (AWS Account)
    - VPN - (AWS Account)
    - NAS - (AWS Account)
    - AppStream - (AWS Account)
- Etc.

## To sum it up

I hope this explanation helps you organize your thoughts around AWS Organizations so that you can know exactly what to ask for when talking to contractors or your team.