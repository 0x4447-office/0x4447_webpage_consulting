---
layout: article
title: How to lower AWS Costs
image:
    path: /assets/img/articles/how-to-lower-aws-costs/featured.jpg
cover: /assets/img/articles/how-to-lower-aws-costs/cover.jpg
featured: /assets/img/articles/how-to-lower-aws-costs/featured.jpg
preview: /assets/img/articles/how-to-lower-aws-costs/preview.jpg
description: The reality is simpler than you might think.
categories: [how_to]
isFeatured: true
author: David Gatti
---

This article is meant for CEOs, CTOs, and Managers. The goal is to give a better understanding of how to lower AWS costs by answering a common raised question by clients: *what is the simplest way to lower the AWS bill*?

# The mysticism

AWS costs are wrapped in mysticism due to mysterious practices by companies that specialize in this field. The reality is simpler than you might think, otherwise these companies would not hide behind big words and convoluted explanations.

# The AWS Billing Page

AWS provides you with a very simple to use billing page, which brakes down all your costs based on the service, and the region. This makes it trivial to find the biggest expense in the account.

More importantly if you have an organization account and under that you have dozens of other AWS accounts, the billing page also provides you with a brake down based on the individual account under the organization. This makes it simple to find the account that is generating the biggest costs, while allowing you to then drill down to the service, and region.

The billing page is the most important thing to use when it comes to getting an idea of what is going on in the account. Once you know where the money goes, we can go into the details and figure out if there is something that can be changed to lower the monthly bill.

By the way: if you want to [learn more about the benefits of AWS Organizations](https://consulting.0x4447.com/articles/knowledge/the-benefits-of-aws-organizations.html), check out the article.

## Pay-By-The-Hour Services

The majority of the costs in your organization are going to come from EC2, RDS and similar Pay-By-The-Hour type services. This are the most used services, and most importantly AWS charges you for these services the moment they are turned on, regardless of the load.

The majority of the time, these services are turned on by employees temporarily just to perform a test, or run a one time job, but will forget to turn them off. Services could be left on for years, while your bank account is being drained for servers that have 0.45% CPU time.

Thankfully this problem can not only can be quickly identified, but also be quickly solved by just simply turning off those unused servers. The simplest approach is to stop all the servers with less then 1% CPU time in the case of Linux, and 3% in the case of Windows instances. This approach allows you to stop paying for the servers, but also turn them back on when they are actually needed (Because if they are, someone somewhere should start screaming).

On the other hand, if your servers are needed, then you are probably not taking advantage of the Reserved Instances features that AWS provides. With this service, instead of paying by the hour, you can pay up to 3 years upfront, and thus [lowering your bill by 40% to 75%](https://consulting.0x4447.com/articles/how_to/how-to-lower-ec2-costs.html), check the article to find out more.

## Serverless Services

The next big contributors are all of the serverless technologies that AWS offers. In contrast to the pay-by-the-hour onset, this one generates a charge when actually used. This means that there might not be a quick fix. To reduce the price for these services, you’ll have to change how you use them. In the case of S3 it might be as simple as enabling Intelligent-Tiering on a S3 bucket, but in other cases you might have to change the code of the application, for example how DynamoDB is being used.

Since we are discussing DynamoDB already - when you use this NonSQL database in On-Demand mode, you get charged by how many queries to it you make, and also how much data is being moved back and fort. If the application using this services makes lots of poorly constructed requests, or the data is structured in a way where the data transfer is high, then you you’ll pay incredible amount of money on a daily basis.

In situations similar to these, you’d need an expert to look in to the problem, and come up with a solution, and then this solution will have to be implemented correctly to lower the bill.

# Prevention Mechanisms

Overall the best approach is to always educate people to help them make better decisions when they use all that AWS has to offer. There also some simple ways to remind them of what they have learned.

## For:  Pay-By-The-Hour Services

The IAM services has the idea of Policies, this are documents that specify what a IAM User can do in the AWS account. It can be as simple as the user has only access to EC2 Instances, or you can extend it to include which type of instances can be launched by the user, and even specify the region in which they can do that. With a policy like this you can be confident that nobody will launch expensive instances without permission. This is true for any service that is pay-by-the-hour.

## For:  Serverless Services

Sadly, there is no way to have a policy that prevents developers from making queries the wrong way, or storing data the wrong way. The best solution here is to train the team so they can learn all the best practices for a given AWS Service.

# Good Monitoring

Lastly, a big part of keeping a close eye on the AWS expenses is good monitoring. Each service that is being used should have CloudWatch Alarms monitoring thresholds, and sending notifications when there is something that goes over your set limits. Of course in some cases this takes some effort to get the threshold just right, but once you do, you’ll know exactly when and what is causing a problem.

# To Sum it Up

Depending on your situation, I hope that you’ll be able to (even today!) lower your AWS bill substantially. If not, you should now have a good understanding on what to look for, and what to ask the people in your organization.