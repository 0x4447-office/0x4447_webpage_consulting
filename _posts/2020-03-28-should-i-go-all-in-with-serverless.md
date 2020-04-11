---
title: Articles - Knoledge - Should I go all in with Serverless?
cover: /assets/img/articles/should-i-go-all-in-with-serverless/cover.png
layout: post
subtitle: This article is meant for CEOs, CTOs, and managers who want a good frame of reference to help them make more educated decisions about building products in the cloud.
categories: [knoledge]
---

![How to lower EC2 Costs](/assets/img/articles/should-i-go-all-in-with-serverless/header.png)

This article is meant for CEOs, CTOs, and managers who want a good frame of reference to help them make more educated decisions about building products in the cloud. If you think you may not be the right target, but you know someone who is, consider sharing the link to this article with that person.

And in the end, if you'd like to chat about this topic, we provide a free one-hour consultation for new clients. Send us a message at hello+linkedin+should_i_go_all_in_with_serverless@0x4447.email.

# First

There isn't a short answer to this question, because it all depends on what stage the project is in. I always recommend serverless to new clients at a starting point in exploring an idea that may or may not work - meaning that they're not certain how much traffic they're going to get. Then, once they begin to get some decent traffic, they can better predict how much load the solution will get, and thus transition some of the most expensive parts of the project to a regular server and lower the costs of running the solution. Once a company is established, the final transition would be 90 percent servers and some serverless for things that aren't triggered often or are only used to manage DevOps daily tasks.

Now the question is this: Why this life cycle?

# Start with serverless

One advantage of going serverless is that it's inexpensive at a project's starting point. It costs virtually nothing to run during development, regardless of how many resources are in use. In the beginning phase, when acquiring customers - all you pay for is traffic generated. And if you have to pause the project for whatever reason, you don't have to delete anything; keep the whole setup as is and just pay for storage. Then, when all is back to normal, you can resume the project right where you left it.

# Move to managed servers - lower costs

Serverless may be convenient at the beginning when you're testing the waters, but it's definitely not cheap in the long run. Once you see your idea is catching on and you're getting more and more traffic to your product, you should review your AWS bill on a monthly basis to identify the most expensive serverless resources. Use your list of the most expensive resources to begin converting to a custom server setup using EC2 Instances, but be sure that you understand the benefits of reserved instances to be sure that you pay as little as possible for them.

Regarding the server approach, a common misconception is that it requires dedicated people to monitor the servers and react when something is not working as expected.

The reality is that this way of thinking is old fashioned and doesn't take into account the programmatic nature of AWS. Meaning that you can manage the whole infrastructure with code and automate many of the moving parts.

By using CloudFormation and all the EC2 tools provided, you can create a server environment that acts like a serverless one. It all just works; the developers just have to push new code to a repository to make the stack automatically pull the changes and replace the old code with the new one without anyone having physical access to the servers.

This is also important: a setup like this implies no physical access to the deployed servers, no SSH Keys, Port 22 open, etc. A correct setup should just work. If AWS is able to do it, you should be too, because in the end serverless is nothing more than regular servers set up in a organized and automated way. Serverless is just a concept.

Once you have your initial migration to EC2 Instances, keep monitoring the AWS bills and keep moving more and more resources until you reach the right price balance.

# Volume discount

Now that you've struck the right price balance and your whole setup is working correctly, you can keep lowering the price by contacting the AWS Pricing Team to see if they can give you a volume discount for some of the services you're using. 

# Think about going outside AWS

Now you can look to see what's outside AWS. There are cloud providers out there that specialize in providing the cheapest price for a specific AWS service. For example, Wasabi competes directly against S3. Their prices are truly much cheaper compared with what AWS has to offer, but you also have to consider that AWS has more regions available, more storage options for S3 to lower your prices, and features - including triggers. This means that it all depends on your needs, but if what Wasabi offers is perfect for your solution, why not consider them?

# Go custom data center

And now, the last major step: a lot of online articles like to imply that AWS is too expensive and having your our own data center is the cheapest way to go about serving a product to clients. But this statement will be true only for some very specific companies that either have outgrown the AWS volume discount, operate at a scale close to that of AWS, or deal only with a local market.

A good example would be Bank of America, which transitioned to their own data center to lower costs. For a company of this size that deals only with the local market, this makes perfect sense and is the right move. 

[https://www.businessinsider.com/bank-of-americas-350-million-internal-cloud-bet-striking-payoff-2019-10](https://www.businessinsider.com/bank-of-americas-350-million-internal-cloud-bet-striking-payoff-2019-10)

# In the end

I hope this explanation will help you organize your thoughts around the serverless approach and you'll know exactly what to ask your team or contractors when talking about this topic.

If you found this article useful, consider sharing it with someone you think could benefit from it.