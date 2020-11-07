---
title: Should I go all in with Serverless?
image: /assets/img/articles/should-i-go-all-in-with-serverless/og.jpg
cover: /assets/img/articles/should-i-go-all-in-with-serverless/cover.jpg
header: /assets/img/articles/should-i-go-all-in-with-serverless/header.jpg
layout: article
description: The goal is to better understand Serverless technology and how it affects your costs as your project grows.
categories: [knowledge]
isFeatured: false
author: David Gatti
authorAvatar: /assets/img/avatars/avatar-1.jpg
---

This article is meant for CEOs, CTOs, and managers who want to make a more educated decision about building products in the cloud, by answering a common question clients have: *Should I go serverless or build a project with regular servers?*

## First

There isn't a short answer to this question, because it all depends on the stage of your project. I always recommend that new clients start out serverless when in the initial phases of exploring an idea that may or may not work, meaning when you are not certain how much traffic the site is going to get. Then, once you begin to get some decent traffic, you are able to better predict how much load the solution will get, and thus transition some of the most expensive parts of the project to a regular server and lower the costs of running the solution. After your business is established, the final transition stage would likely be 90 percent use of servers with some serverless remaining for anything that isn't triggered often or when only used to manage DevOps daily tasks.

So the question becomes: Why this life cycle?

## Start with serverless

One advantage of starting serverless is that it's inexpensive at the outset of the project. It will cost you virtually nothing to run during development, regardless of how many resources you use. In the beginning phase as you are acquiring customers, all you pay for is traffic generated. If you have to pause the project for any reason, then you don't have to delete anything or worry about starting over, because you can preserve the entire set up and just pay for storage. Then, when all is back to normal, you can resume the project right where you left it.

## Move to managed servers to lower costs

Serverless may be convenient in the beginning when you're testing the waters, but it's definitely not cheap in the long run. Once you see your idea is catching on and you're getting more and more traffic to your product, you should review your AWS bill on a monthly basis to identify the most expensive serverless resources. Use your list of the most expensive resources to begin converting to a custom server setup using EC2 Instances, but be sure that you understand the [benefits of reserved instances](https://consulting.0x4447.com/articles/how_to/how-to-lower-ec2-costs.html) in order to know that you are paying as little as possible for them.

A common misconception about using physical servers is that they requires dedicated people to monitor and react when something is not working as expected. Thankfully that way of thinking is old fashioned and doesn't take into account the current programmatic nature of AWS. Nowadays you can manage the whole infrastructure with code and automate many of the moving parts.

By using [CloudFormation](https://consulting.0x4447.com/articles/knowledge/the-importance-of-cloudformation-files.html) and all the EC2 tools provided, you can create a server environment that acts like a serverless one. Operation is seamless and developers just have to push new code to a repository to make the stack automatically pull the changes and replace the old code, even without anyone having physical access to the servers.

Another important factor: a setup like this implies no need for physical access to the deployed servers, no SSH Keys, or Port 22 open, etc. Once set up correctly, everything should run smoothly. If AWS is able to operate your servers, then you should be able to as well, because serverless ends up being no more involved than a regular server set up in a organized and automated way. Serverless could be considered just a concept.

If you have migrated to EC2 Instances, then you can monitor the AWS bills and continue to transfer more and more resources until you find the price balance that's right for you.

## Volume discount

With the right price balance in hand and your whole setup working correctly, you can take additional steps to lower your costs by contacting the AWS Pricing Team to see if they can give you a volume discount for some of the services you're using. 

## Think about going outside AWS

You can also look to see what's outside AWS. There are cloud providers out there that specialize in providing the cheapest price for specific AWS services. For example, Wasabi competes directly against S3. Their prices are truly much cheaper compared with what AWS has to offer, but you also have to consider that AWS has more regions available, more storage options for S3 to lower your prices, and more features - including triggers. This means that it all depends on your needs. But if what Wasabi offers is perfect for your solution, why not consider them?

## Go custom data center

And now, the last major step: a lot of online articles like to imply that AWS is too expensive and that having your our own data center is the cheapest way for you to serve a product to your clients. But this statement will only be true for a select few companies that have either outgrown the AWS volume discount, operate at a scale close to that of AWS, or only interact with a local market.

A good example would be [Bank of America](https://www.businessinsider.com/bank-of-americas-350-million-internal-cloud-bet-striking-payoff-2019-10), which transitioned to their own data center to lower costs. For a company of this size that deals only with the local market, this makes perfect sense and is the right move. 

## To sum it up

I hope this explanation will help you organize your thoughts around the serverless approach and you'll know exactly how to discuss this with your team or contractors.