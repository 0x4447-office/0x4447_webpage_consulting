---
title: How to lower EC2 Costs
cover: /assets/img/articles/how-to-lower-ec2-costs/cover.png
layout: post
subtitle: The goal is to show you how to lower your AWS costs by 40 or even 75 percent (depending on the instance type and plan) within few minutes.
categories: [how_to]
---

![How to lower EC2 Costs](/assets/img/articles/how-to-lower-ec2-costs/header.png)

This article is meant for CEOs, CTOs, and Managers. The goal is to show you how to lower your AWS costs by 40 or even 75 percent (depending on the instance type and plan) within few minutes

This article also tries to answer a common question our clients ask: *What options do I have at my disposal to lower the AWS bill*?

In the end, If you'd like to chat about this topic, we provide a free one-hour consultation for new clients.

## What are Reserved Instances?

If you pay upfront for a period of one or three years, your price for an instance will either be  40 to 75 percent lower. The beauty of this is that if you buy a Reserved Instance, you don't have to change anything in your instances; no restart or change in configuration will be needed. This is because a Reserved Instance is a billing concept. If you have two instances and you buy one Reserved Instance, AWS will automatically apply the discount for the instance that matches the type you bought. To you, this process is transparent.

# What else should I know?

## Standard vs. Convertible

There are two types of RI: Standard and Convertible. Standard is for situations in which you have an organized environment and know what you need. Convertible (a bit more expensive) is for situations where your environment is more dynamic and requires constant changes in operating systems used and changing instance families in addition to types.

## Normalization Factor

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

This means that if you buy one large type, you can actually have four small instance types. Or two small ones and four nano types. You can mix this as long as the total factor number matches the total of what you bought.

Another thing AWS allows you to do is to scale above what you've got. For example, let's say you bought a large type for the year, and you scaled up to twice the type for one week. AWS will charge you the On-Demand price, but only for the scaling factor that goes beyond what you paid for. They do the calculation automatically so you don't have to worry about it.

## Be organized

The Scaling Factor is flexible, but it's best practice to have a homogeneous instance type. This makes it much easier to manage and keeps costs to a minimum.

## You can resell what you don't use

If you buy a one-year or three-year lease, and after some time you find that you don't need it anymore, or you've upgraded to a new type because of traffic to your site, you can buy the new type and put the old lease on the market for bidding. While you won't be able to get the money back for 100 percent of what's left, you'll still get a decent amount.

## The roll-over strategy

Even with the flexibility AWS gives you, you may still be left with some unused instance types. Before you sell them off, consider the following strategy. You can roll it to the next-lower traffic site. For example, let's assume that you have a site with two parts: the front end and the back end. The back is the API, and the front delivers the site build using Angular, with some server rendering for good SEO.

Both projects run using a load balancer, and each LB has a minimum of two instances of type t3.small. So you buy one type t3.large server for one year, paying 100 percent upfront. You then use the Normalization Factor to fragment the one large into four small types.

Six months later, you get so much traffic that you have to upgrade the back end to a bigger type. In this case, you would change the instance type and buy a one-year lease for a large type and split that into two mediums.

Now you have two units to spare. You could add two more small (or one medium) instance types to your front end to handle the additional traffic.

The reasoning here is that more traffic will increase the load on both projects, but the front end will have the smallest load, and that can be handled by four small server types.

When the lease for the old types expires, you can switch the front end to two bigger server types or extend the lease for what you already have.

# To sum it up

Stop using On-Demand servers for long-term work. Use them only for quick tests, maintenance, or temporary auto scaling to handle spikes in traffic during the day. For continuous work, use Reserved Instances - and spend your money elsewhere.

# Contact

Check our [contanct](/contact/) page to find out how to get in touch with us.

# Sharing is Caring

If you found this article useful, consider sharing it with someone you think could benefit from it.