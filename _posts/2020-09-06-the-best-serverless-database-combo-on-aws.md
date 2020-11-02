---
title: The best serverless database combo on AWS
image: /assets/img/articles/the-best-serverless-database-combo-on-aws/cover.png
header: /assets/img/articles/the-best-serverless-database-combo-on-aws/header.png
layout: blog-post
description: What is the best serverless database combo on AWS?
categories: [experience]
isFeatured: false
author: David Gatti
authorAvatar: /assets/img/avatars/avatar-1.jpg
---

This article is meant for anyone who wants to better understand Serverless databases to get the best performance at the right price. This article presents an easier question: What is the best serverless database combo on AWS?

## The most unconventional solution

Over the years, I came to realize that your typical SQL database that we've been using since the 80's are only good for one thing: creating reports and calculating stats. 

SQL was typically used for everything, but nowadays we can be more specific with how we store data. 

We now have at our disposal blazing fast databases that can handle insane amounts of read and write, that automatically scale based on traffic, while the downside is that they are bad at generating reports and summarizing data stored within them.

We also have graph databases that allow us to track all the inner connections between objects. 

And we have databases that are very cheap, but are slow at retrieving the data.

Nowadays, you can pick multiple designs and store different types of data based on the use case, and this way you get the benefit of both worlds, where you pay only for what you need and can manipulate the data with ease thanks to the specificity of the database. 

Let's do a simple example.

## The S3 and DynamoDB combo

Based on my experience, the best database combo that also happens to be my current default approach, which is S3 and DynamoDB.

As far as I can see, this approach covers 80% of web applications out there. Where DDB would be used to host the data related to the application UI to render the interface as fast as possible, S3 is used to display the extra details when the user would be more comfortable waiting the extra time for additional information.

## A simple example - invoices

Every website with a payment option will have at the least monthly invoices generated in their system. When an invoice is generated, you can store the ID, Nr, and Timestamp of the invoice in DynamoDB, and you can store the rest of the invoice details in S3.

This way you can display a table that loads all the rows blazing fast, which allows the user to have a quicker experience when going back to look for the right invoice. Once the user clicks on the invoice they want, you can pull all the rest of the information from S3, which is slower but acceptable by the user.

## The benefits

This approach allows you to have a speedy UI while keeping the costs as low as possible. Costs can remain low because moving data back and forth in DynamoDB is expensive, but very cheap in S3. By combing the two, you can have the best of both worlds.

## Ideal solution to test ideas

This approach is ideal for startups to test an idea for a product and pay only for the resources used, because DynamoDBN and S3 are Serverless services provided by AWS where you pay only when those services are used.

This means that while developing your costs will be minimal, and you will start paying more and more once you gain more and more users.

Hopefully if your price structure for your product is correct, then you should be able to keep up with the AWS bill regardless of growth.

Once your business is established, you can look at the AWS bill and see if you would benefit from a transition to a different database, or if you should change how your application works to be even more efficient. But the described approach is a solid start.

## Something extra: S3 supports SQL

One important fact about S3 that not many people know is that you can run SQL queries on your data if the data is structured the right way. This allows you to store big JOSN files in S3 and query only for the data that you need. You will be able to minimize costs even more by only asking for the right information instead of pulling the whole file, not to mention that you will only need to download a fraction of the file itself.

S3's support of SQL is feature worth exploring and taking the time to understand.

## Real life example

![example](/assets/img/articles/the-best-serverless-database-combo-on-aws/s3_ddb_example.png#responsive)

The above screenshot is an example of how to organize your data between DynamoDB (in blue) and S3 (in red) using [Amazon.com](http://amazon.com) as a real life example. Of course this is just an idea to show how the approach explained above could be implemented, and it does not mean this is how you should always do it, or how Amazon should do it. 

But lets drill down into the example: Lets assume you have written your code in a way that makes a call to DynamoDB and S3 in an asynchronous way. 

First of all, I'd order my promises in a way where I'd first make all the S3 queries since they will be the slowest, and then move on to DynamoDB. 

Data from DDB will come sooner than S3, and so we can start displaying the page based on this information. By the time we are done, we should have the response from S3 which we can use to show the rest of the page. 

Based on your applications and needs you can play with the order of the queries to fine tune the load time of the data.

## What else

To maximize speed, especially with a website that has lots of data to display, you can consider splitting the data in to more then one file in S3. In the example above, you can have the basic description in one file, and you can have the extra description that is hidden under a page scroll in a separate file. That way you could download the second file after the first one in order to significantly speed up the page loading time, and the majority of the users won't notice that the detailed description did not show up immediately.

## Super simple backups

This solution also makes it very easy to create backups. When it comes to DynamoDB, you only have to enable one switch to enable point in time recovery, while with S3 you can enable object versioning and keep, for example, 7 days worth of version for a file, thus allowing you to restore a deleted or modified file with ease. 

## To sum it up

Of course over time, if your idea takes off, you could move crucial data to a faster Database to maximize revenue, but this approach would for sure help you build your idea, pay only for what you use, and not worry about database scalability and performance, since AWS guarantees the performances of these two services.