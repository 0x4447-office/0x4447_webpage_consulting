---
layout: article
title: How to lower EC2 Costs
image:
    path: /assets/img/articles/how-to-lower-ec2-costs/featured.jpg
cover: /assets/img/articles/how-to-lower-ec2-costs/cover.jpg
featured: /assets/img/articles/how-to-lower-ec2-costs/featured.jpg
preview: /assets/img/articles/how-to-lower-ec2-costs/preview.jpg
description: Lower your AWS costs by 40 or even 75 percent within a few minutes (depending on the instance type and plan).
categories: [how_to]
isFeatured: false
author: David Gatti
---

This article is meant for CEOs, CTOs, and Managers. The goal is lowering your AWS costs by 40 or even 75 percent within a few minutes (depending on the instance type and plan), by answering a common question clients have: *What options do I have at my disposal to lower the AWS bill?*

## What are Reserved Instances?

If you pay for an instance upfront for a period of either one or three years, then your price for an instance can be 40 to 75 percent lower. The beauty of this is that if you buy a Reserved Instance, you don't have to make changes to your instances - no restart or reconfiguration is necessary. This is because a Reserved Instance is a billing concept. If you have two instances and you buy one Reserved Instance, AWS will automatically apply the discount for the instance that matches the type you bought. The entire process is seamless for you.

## What else should I know?

#### Standard vs. Convertible

There are two types of Reserved Instances: Standard and Convertible. Standard is suitable for a situation when you have an organized environment and you know what you need. Convertible (a bit more  expensive) is for situations with a more dynamic environment that requires constant changes to your operating systems and instance families as well as types.

#### Normalization Factor

AWS gives you quite a bit of flexibility with the Normalization Factor approach. Each instance type has the following factors:

- nano: 0.25
- micro: 0.5
- small: 1
- medium: 2
- large: 4
- xlarge: 8
- 2xlarge: 16
- 4xlarge: 32
- 8xlarge: 64
- 10xlarge: 80
- 16xlarge: 128
- 32xlarge: 256

This means that if you buy one large type, you can actually have four small instance types, or two small ones and four nano types. You can mix this as long as the total factor number matches the size of what you bought.

AWS also allows you to scale above what you have. For example, let's say you bought a large type for the year and you scaled up to the 2xlarge type for one week. AWS will charge you the On-Demand price, but only for the scaling factor that goes beyond what you paid for. They do the calculation automatically so you don't have to worry about it.

#### Be organized

The Scaling Factor is flexible, but best practice is to have a homogeneous instance type. This makes it much easier to manage and keeps costs to a minimum.

#### You can resell what you don't use

If you buy a one-year or three-year lease, and after some time you find that you don't need it anymore, or you've upgraded to a new type because of traffic to your site, then you can buy the new type and put the old lease on the market for bidding. While you won't be able to get 100 percent of the money back from the remainder of your old type, you'll still get a decent amount.

#### The roll-over strategy

Even with the flexibility AWS gives you, you may still be left with some unused instance types. Before you resell them, you should consider the following strategy: roll your instance types to the next-lower traffic site. For example, let's assume that you have a site with two parts, the front end and the back end. The back is the API, and the front delivers the site build using Angular, with some server rendering for good SEO. 

Both projects run using a load balancer, and each LB has a minimum of two instances of type t3.small. You buy one type, a t3.large server, for one year and pay 100 percent upfront. You then use the Normalization Factor to fragment the one large into four small types.

Six months later you get so much traffic that you have to upgrade the back end to a larger type. In this case, you could change the instance type by buying a one-year lease for a large type and split that into two mediums.

Now you have two units to spare. You could add two more small (or one medium) instance types to your front end to handle the additional traffic.

The reasoning here is that more traffic will increase the load on both projects, but the front end will have the smallest load, and that can be handled by four small server types.

When the lease for the old types expires, you can switch the front end to two bigger server types or extend the lease for what you already have. AWS's flexibility means you have options to role-over instance types and save money.

## To sum it up

Stop using On-Demand servers for long-term work. Use them only for quick tests, maintenance, or temporary auto scaling to handle spikes in traffic during the day. For continuous work, use Reserved Instances, and spend your money elsewhere.