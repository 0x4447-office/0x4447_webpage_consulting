---
title: How to understand DynamoDB
image: /assets/img/articles/how-to-understand-dynamodb/cover.png
header: /assets/img/articles/how-to-understand-dynamodb/header.png
layout: post
description: Am I doing DynamoDB the right way?
categories: [how_to]
---

This article is meant for anyone who wants to better understand DynamoDB after experiencing that your AWS bill for DDB is too high, the complexity is too big, or the promised speed is not there. This article presents an easier question: Am I doing DynamoDB the right way?

# Why I'm not getting DynamoDB

You may be surprised, but 20+ years of SQL may not help you with this new AWS service, but the biggest reason is that you are probably comparing DynamoDB to MongoDB.

Both are NoSQL but they still way different from each other. Just because you store data as JSON and there are no columns for fixed structure that you have to set upfront, doesn't mean they are the same.

# MongoDB is self hosted, and this is a problem

Because you can host MongoDB, it makes it hard for you to realize the incorrectness in the ongoing data structure that you have. Doing it wrong doesn't appeared to cost you anything, because you don't have limits and you pay just for the server that MondoDB runs on. If the performance starts to be an issue, then you can always add a bigger server, and all the incorrectness gets hidden away.

# DynamoDB is the real NoSQL Database

Since AWS hosts DynamoDB for you, you are forced to adhere to the NoSQL principles, which makes you pay for all your mistakes out of your pocket, and the only way around it is to really understand NoSQL.

# DynamoDB Key Limits

DynamoDB has 3 major limits:

1. Pay per request
2. Pay for each byte that goes in and out
3. One record can't be bigger then 400Kb

These three rules makes it so that either you structure the data the right way, or you lose performance and could have to pay thousands of dollars for simple requests.

# Examples

I'll give you 2 examples which should give you a good idea of how to start thinking about DDB data structure and even how to organize your website to make sure that all works well together.

## User Data

A typical case of user data would be the name, email, address, a JSON object could look like this:

```json
{
    "name": "0x4447",
    "email": "hello@0x4447.email",
    "address": {
        "street": "10 Springflied St.",
        "city": "Springflied",
        "state": "Springflied",
        "country": "USA",
        "postal": "01100"
    }
}

```

The gut instinct is to just save this whole object in to DDB and call it day. But this is not the right way of doing it. The reason: you pay per bytes sent and received. In a typical situation, you will display the user name more than the email, and then display address from time to time. But if you save everything, you'd pay for the whole payload each time you only want to get the name. This approach is slower since you have to send more data, and you end up paying for the whole payload, despite just needing the name.

A better way of saving this data is to split it in 3 different objects:

```json
{
    "id": "001",
    "type": "user#basic",
    "name": "0x4447"
}

{
    "id": "001",
    "type": "user#basic#email",
    "email": "hello@0x4447.email"
}

{
    "id": "001",
    "type": "user#basic#address",
    "address": {
        "street": "10 Springflied St.",
        "city": "Springflied",
        "state": "Springflied",
        "country": "USA",
        "postal": "01100"
    }
}
```

This way you get only what you need, because you have tree separated pages for each piece of information. For example:

- User Identity
- Emails
- Address

When the user visits this individual pages, you will get only what the page requires.

More details about `type` key letter on in the article.

# Invoice Data

The next example looks at the 400Kb limit per object. The clients that I work with always end up with this data structure: they use the Array type object, add Invoice data in this array, and then save the whole thing as one object in DynamoDB. For example:

```json
{
    "id": "001",
    "type": "user#invoices",
    "invocie": [
        {
            "id": "001",
            "price": "$99",
            "payed": true
        },
        {
            "id": "002",
            "price": "$99",
            "payed": true
        },
        {
            "id": "003",
            "price": "$99",
            "payed": false
        }
    ]
}
```

User data from the example above is rather limited. In the invoice example, we will hopefully increase the object size each month for the lifespan of the product. And at some point you will go over the 400Kb limit per object. What then? Developers often come up with crazy solutions to split up the object in order to go around this limit. Doing so adds a huge amount of complexity. Performance also drops drastically, since now you have to get back every time 400Kb of data, plus you are not taking advantage of partitioning.

There is a way simpler solution that will allow you to never have to think about this limit ever again. The simpler solution will add incredible flexibility to your data and will dramatically increase speed.

# Always add a Search Key

The Search Key is your friend and you should always use it. There are edge cases where you don't have to use it. But this are edge cases and over time you'll know when not to use it. We will focus on that 99.99% of cases.

The search key needs to be understood as a file path, the same file path that you have on your computer. For example: `/folder_name/folder_name/file_name.extension`

You have to make the search key using the same logic. For example if we take the user data example. We could have:

- `user#basic`
- `user#basic#email`
- `user#basic#address`

With a structure like this, you can take advantage of the query function that DynamoDB has, and the filter `start_with`. With this two things you can get everything that you need in one go by saying that you want everything that starts with `user#basic#` or be more precise with a regular `get` request, and get just `user#basic#address`, for the page that just shows the address.

You still have the flexibility to get a big chunk of information when needed but you also get all the granularity that you need most of the time.

The same rule applies for the invoices for example. Because you can have a search key like this:

- `user#invoice#nr1`
- `user#invoice#nr2`
- `user#invoice#nr3`

And keep all your data in each separate record, where 400Kb is plenty. But you can go one step further and do this:

- `user#invoice#2020#nr1`
- `user#invoice#2020#nr2`
- `user#invoice#2020#nr3`

This way you can make a query that can give you back:

- just one invoice
- the whole year worth of invoices
- or everything all together.

As you can see this is your infinite array of data that can go in to infinity. No need to worry about the 400Kb limit. Not to mention that working with arrays in DynamoDB is complex and wasteful.

Because to update an entry in the array you need to know the position of that item (index), if you don't know it, you have to download the whole object, loop over every entry in the array, find the position, update it, and then send back the whole object again. So if we have on object of 400Kb, you then have to send back 400Kb, which is 800Kb in total. A slow and expensive operation, just co change one item in a array.

# Never do this with DynamoDB

- Never make one big object
- Never use Arrays unless the data that you are working with has them, and you need to store it as is.

# Always do this with DynamoDB

- Brake down your data in the smallest parts you can
- Design your search key as folder structure
- Always make precise queries to just get what you need.

# To sum it up

I hope this explanation will give you a much better understanding how to go about working with DynamoDB, and I truly hope this will bring your costs down, and speed improvements.