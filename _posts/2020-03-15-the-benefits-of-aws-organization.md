---
title: The benefits of AWS organization
cover: /assets/img/articles/the-benefits-of-aws-organization/cover.png
layout: post
subtitle: The goal is to show you the benefits of managing your AWS infrastructure using the Organization.
categories: [knoledge]
---

![How to lower EC2 Costs](/assets/img/articles/the-benefits-of-aws-organization/header.png)

This article is meant for CEOs, CTOs, and Managers. The goal is to show you the benefits of managing your AWS infrastructure using the Organization.

This article also tries to answer a common question our clients ask: *Why spend the time setting up AWS Organization*?

In the end, If you'd like to chat about this topic, we provide a free one-hour consultation for new clients.

# Why I wrote this article

I've worked with countless clients with recurring issues that leave them in a corner and having a hard time with:

- building new features
- understanding where they are
- figuring out whether their infrastructure is secure
- running a stable product

My hope is that this article will help you understand the importance of being organized from the start with AWS and avoiding the extra costs and time involved in reorganizing everything.

# Key features of AWS organization

- You have one bill to pay for all other AWS accounts within the organization.
- You get a detailed breakdown of your bill per AWS account, which helps showcase where your money goes.
- You can control access to AWS resources for each individual AWS account from the main organization account.
- You can apply policies from the org account down to all the sub-accounts.
- You can organize the sub-accounts in Organization Unit (OU) to help you further organize the company in AWS and improve security.

# The benefits

It's much easier to:

- Do audits
- Set the right policies and access to resources
- Create test environments
- Understand what each AWS account has for newcomers
- Easier to lower costs

# The bare-minimum setup

I always recommend this setup to my clients:

- In **Development** you test and work on the project. Here, you have the most freedom to use different resources.
- The D**emo** account is where you can showcase the latest features that are ready to go into production. This is your last chance to see if you like what's been done. It can also be used to perform demos for clients.
- On the other hand, **Production** is for your customers with live data.

The **Demo** and **Production** environments are locked down to the point that nobody but the main admin has access to them. 

All accounts have 100 percent automatic deployment and no access to the servers over SSH or other means- no exceptions. 

# A word of caution

Having said all this, here's an example of what will happen if you start the wrong way, based on clients I've worked with over the years.

Depending on project size, creating a CloudFormation from scratch takes an average of one month, then two more weeks of creating all the AWS accounts and deploying the stack using the created CloudFormation files. That's where all the final testing and final tuning happens.

Lastly, you'll start running your code in the new environment and with a new work flow. A lot of the project's bugs will surface in this moment because at this point nobody can log in to the servers to perform ad hoc changes (also known as massaging the code) . Now all the work a developer told himself he'd copy later in the repository will show up at this stage, and how long will it take to fix everything? It depends on the project. From my experience, it takes a team of developers three months to normalize everything and adapt to the more organized environment.

# What else should I know?

- You're limited to five nested OU, so design your infrastructure accordingly.
- You can  use CloudFormation to describe your organization.
- You can programmatically request a limit increase.
- Converting the main account to an organization won't make any changes to what you already have in the account.

# An example of a more complex organization

This is just an example for once you get your project off the ground. You could extend your organization this way later on:

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

# To sum it up

I hope this explanation will help you organize your thoughts around the AWS organization and you'll know exactly what to ask for when talking to contractors or your team.

If you found this article useful, consider sharing it with someone you think could benefit from it.

# Contact

Check our [contanct](/contact.html) page to find out how to get in touch with us.