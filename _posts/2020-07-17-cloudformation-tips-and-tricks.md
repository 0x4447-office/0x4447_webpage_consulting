---
title: CloudFormation Tips and Tricks
image: /assets/img/articles/cloudformation-tips-and-tricks/cover.jpg
header: /assets/img/articles/cloudformation-tips-and-tricks/header.jpg
layout: article
description: The goal is to give a better understanding of what CloudFormation is and why it should be used for every AWS project.
categories: [knowledge]
isFeatured: false
author: David Gatti
authorAvatar: /assets/img/avatars/avatar-1.jpg
---

This article is meant for CEOs, CTOs, and Managers. The goal is to give a better understanding of what CloudFormation is and why it should be used for every AWS project, by answering a common question clients have: *What are the the most important things our team should be aware of when working on a CF file?*

## Pick a framework

Since a CloudFormation is nothing more then a JSON file, one might think that keeping everything in one big file is the right way to go. But it is not. After you have added multiple services, even as little as 3, then you will have to scroll across the file like crazy trying to edit it, and each new service exponentially extends the complexity of managing the file.

A good approach that I found helpful is to keep the JSON familiarity while braking down each service in a separated JSON file. Hence, I create a framework called [Grapes](https://www.npmjs.com/package/@0x4447/grapes).

With the [Grapes framework](https://www.npmjs.com/package/@0x4447/grapes), you are free to structure the Resource folder however you want. You can nest folders and name your files in total freedom – whatever makes sense to your project.

The only imposed structure is the root folders. I have used Grapes since 2019 and I have been able to make and easily manage a massive stack, since everything remains neatly organized. Below you can find a handful of links to open source projects that I released using Grapes.

## The bare minimum

One of the few negatives about CloudFormation is the parameters part and how it is implemented in the AWS Console.

When you deploy a stack the first time with multiple parameters and there is an error, you'll loose everything you added. This is infuriating when you have a stack with 50 parameters, because if you have to redeploy a stack until it works, and let's say it takes 10 retries and you have 50 parameters, then that's equal to you having to do 500 copy and paste actions. 

The only work around at this moment is to start small. Make the smallest stack that makes sense to you, deploy it successfully, and then the parameters will be saved. Afterwards you can incrementally add a service to the others.

This approach is also good to more quickly find issues within the CF file.

## Good naming and description

Since we are on the parameters topic, I highly recommend making sure all your parameters have simple, clear names that explain what to expect from them. You can add as many details of the description as you would like, even if the description is just a copy and paste of the input field. The purpose of this is to have a clear description with your default parameters in the description itself, which gives you a reference to the parameters. If you don't have a good description, then when you come back months after you made the stack and have to deploy it in another account, then you won't remember what parameters are needed for the stack.

## Do not rename the resources

Each resource described in the CloudFormation file must have a unique name as the JSON object Key. I recommend that you name them carefully, ideally with a simple pattern, because once the stack is deploy it can cause a lot of drama to change the name of the resource. For example:

CloudFormation deploys changes by first making the new resource, and if all goes well, it deletes the old one. Such as, if you have a S3 bucket that you want to rename (renaming the bucket not the service object Key), then AWS will make the new bucket first, and when all is successful, it will delete the old one if empty.

But if you were to rename the object Key, then AWS will see the changes as: "I have to add a completely new service, while deleting the old one." But since AWS first makes resources and then deletes them, in this case you would get an error because AWS would try to make a S3 Bucket that already exists. Thus resulting in a update error.

Instead, the solution is to rename the resource while also renaming the S3 Bucket by adding at the end of the name, for example, `1`. Deploying that will be sufficient, since now the buckets have unique names. Then remove the `1` from the name and update the stack again.

This trick won't work in some AWS resources and you might be stuck.

Make sure your resource names are standardized, and always follow this standard, because once they are used it is going to be almost impossible to rename them.

CloudFormation is for people that like to be organized and keep everything neat. With this service, you can't just do something quick and later improve upon it; you have to have it right from the start - otherwise it is going to be complete misery later working with it.

## Don't refer to Resource Outputs in Another AWS CloudFormation Stack

CloudFormation allows you to create a cross-stack reference that can be used in another stack. For example, one stack creates a S3 Bucket, and then you can reference the name of the Bucket in the 2nd stack.

At first this sounds like a cool and useful idea, but in practice it is the most dangerous feature out there for CF.

The problem is similar to the previous section. Because once a stack is referenced by other stack, the referenced one can't be modified because other stacks rely on it. Meaning if you have a daisy chain of 3 stacks and you wanted to edit the first one, you'd have to sequentially delete the whole stack before it, from right to left.

This feature is one that you should never use. The ideal approach when you want to reference a resource created in one stack with another, is to just output the resource name or ID in the original stack, copy it, and paste it in the params section of the second one. This way you still can split your stack and keep everything small and compact, while staying flexible and free to make any changes. Of course you have to remember that if you rename a S3 Bucket in the original stack, you then have to update all the CF files that uses the Bucket name.

## Don't trust a working CloudFormation file.

If you have your work organized with 2 AWS accounts, one for production and one for development, then it doesn't necessarily mean that the CloudFormation file you created and tested in development will work in production.

When working on the CF file you add features as you go, slowly building it out. And by doing so, you build on top of pre-existing services that already exist from the previous deployment.

Deploying the stack from scratch in production will create all the services at once, and in some cases a service that relies on another one won't deploy because not everything is in place, which means that the stack will fail.

To mitigate this problem, I recommend that you delete the stack in development and then redeploy it from scratch. This approach will let you see what will fail, and then you will know how to set the `DependsOn` option to make sure the stack is deployed in the right order.

Only then can you be confident that deploying the stack in production will work.

## To sum it up

Move slowly, iterate piece by piece, and be organized - these are things to keep in mind when working with CloudFormation.