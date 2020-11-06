---
title: How to hire the technical team
image: /assets/img/articles/how-to-hire-the-technical-team/cover.png
header: /assets/img/articles/how-to-hire-the-technical-team/header.png
layout: article
description: how can I hire technical people when I myself know nothing about the technology world?
categories: [how_to]
isFeatured: false
author: David Gatti
authorAvatar: /assets/img/avatars/avatar-1.jpg
---

This article is meant for CEOs, CTOs, and Managers. The goal is to give a better understanding of how to hire technical people by answering a common raised by clients: *how can I hire technical people when I myself know nothing about the technology world*?

# Understanding the symptoms

The biggest difficulty when hiring technical people is when you don’t fully understand the skill you are hiring for and you can only try to gage their expertise with your gut feeling. You are stuck with your fingers crossed that the new hire will be as he presents himself.

This is an issue that very often comes up with clients that I work with. Normally, the symptoms look like this: the project starts fairly well, you see progress, and milestones are being achieved; but, after a few months, the project starts to slow down, seemingly simple things start to take months, and/or the new features are unstable. 

At this point, even as a non-technical person, you start to realize that something is not right.

This type of scenarios is not due to the lack of knowledge of how to code (coding is easy) - the problem is in the lack of understanding that organized code is more important than simply knowing how to use a “if” statement. Or the DevOps people don't fully understand AWS, nor the best practices that they should follow to manage the whole infrastructure correctly, since AWS is not a SaaS solution like Heroku or others. AWS is the building blocks that allow you to build your own SaaS application. This key difference requires having a different mindset that not many know they have to get into, and so they manage AWS by hand, in one environment, and with minimal automation.

# How to fix the existing damage?

## Code

When I come in to help, I do not try to understand the code, since normally the state of the code is in poor condition. There are no comments, no spaces, no new lines, and no formatting at all. I focus on reformatting the code to make it clean and simple to understand, then I do a second pass where I start to simplify some expressions, and after this stage all the mistakes that were impossible to figure out become obvious and stand out on their own.

## Infrastructure

In this situation, we need to go over the idea of the project from scratch, understand what you want to build, and then start to make a diagram of the whole infrastructure based on what I think needs to be done. Then with the team we go over it to see if I missed something, where the team may have already encountered some limitation of the approach worth not repeating. We then finalize the diagram. 

Once that is completed, I start making multiple CloudFormation files that describe the stack on AWS. This means that what was done will be scrapped and everything will be redone using CloudFormation files that will be deployed in three new environments: Development, Demo and Production - to keep everything organized.

# How to start with the right team

If you have not yet start to put together a team, this section is for you. Here I want to give you a good frame of reference on how to look for technical people, while having little-to-no technical skills yourself. I believe that asking very technical question dose not allow you to find the best talent. For example, a law company won't ask a candidate if they memorized all the law books; they want to find out what type of person is in front of them. Just because you memorized paragraph 8 doesn't mean you are a good lawyer. The same analogy can be used in the technology world. Just because you know a "if()" statement or a function, doesn't make you a good developer - you just know how to code, and that is just a skill.

## What to focus on

You can’t ask direct questions where the answer is a Yes or No, because you will always get back what you want to hear. You have to give open ended questions that require the other side to think.

You want to look for people that can explain what they know and are able to share their experience easily, where you don’t have to pull information out of them. If you have the most genius person that doesn't know how to talk to others, and most importantly doesn't know how to explain technical things to non-technical people, then you'd get someone with very limited use. This person can only function with another technical person. In the beginning of your company, if they have to report to you, then you don't want someone like this on your team.

Another important thing is not to ask for cliché things like their education or years of experience, because this information is meaningless. One person can be very good after 2 years of learning the skill, while others will be mediocre even if they have 8 or 20 years of experience. If someone worked for 20 years in a big company, they can easily hide their mediocrity within the organization. And worst of all, they might not even know they are mediocre. Education is the same: you could have passed with the lowest grades and still got a diploma. If someone slept thought the whole university, they might know less then a passionate programmer who learned his craft in his free time.

Also, just because someone has been in the market for 20 years already, dose not mean they are good at it. You can infer that they just know the syntax of the specific language they claim to know; whereas the most important skills are the abilities to write clearly and to easily understand code, which are things that nobody teaches anyone. People that write hard to understand code will make your project eventually grind to a halt, and you will be held hostage by one programmer because he is the only one that knows what he did. Under no circumstance would you want to be held hostage by unnecessary complexity.

Writing working code is not a skill; it is a trait. The skill is to make it presentable to others.

Similarly with AWS. I interviews countless AWS “experts” who claim to know all that there is to know about AWS, yet when asked something more serious, they fail. As of writing this article, AWS has 170 services - just because an "expert" claimed to have used 3 of them doesn't mean they know how to use AWS. I have talked with a lot of candidates that claim they know AWS because they made and account and went over a simple tutorial on how to setup a Lambda. To them, this is the basic requirement to claim to know AWS.

A true AWS expert is someone that knows the ideology of the service, is able to mix and match all of this services to build a cost effective and extensible solution that can grow over time with the business, understands the pitfalls, knows how to get out of problems, and can figure out a new service within a week to combine it with the project if necessary. Not to mention they need to know how to automate everything in AWS, because nothing can be done by hand, as clicking things around with a mouse through the AWS console is something that can’t scale over time.

An expert also needs to understand what security is, how to provide only the required access to employees, and how to adhere to best practices to make it easier to pass compliance tests. 

# General questions for all

- **How do you keep your team leader up to date with the progress of the work?**

    This is personal, so if you like the answer, all good.

- **What do you do when you don’t know something?**

    What you want to hear is that they check the documentation, search Google, ask friends, then look for help with you.

- **When there is nothing to do, what do you do?**

    This is personal, so if you like the answer, all good.

- **Do you make your bed in the morning?**

    You want to hear a "yes." This should tell you that they are more organized than most and don't give up easily.
    
- **After how many years will you be done learning?**

    You want to hear "never." This is the only acceptable answer and approach to life.

- **Why did you get into the technology business?**

    If someone is in it just for the money, it might mean they don't have a mindset where they want to learn and get better.

- **When someone tells you it can't be done, what do you do?**

    The answer should be: "I don't accept no for an answer."

- **How many times do you try before asking for help?**
    
    You want someone that knows after a while he needs to ask for help.

## How to check for comprehension

Write a few paragraphs describing 5 tasks to be completed but not broken down into sections or a list. Then tell them to brake down your description into steps and technologies that need to be used to accomplish the task. What they come up with should: 

- have all 5 things that need to be done;
- should be easy to understand by you. If something is unclear, ask for clarification and see if they can simplify the step further.

Unclear explanations by people only means that either they don’t understand the technology or the problem itself. Either is a serious red flag, because people will create very complex solutions that will be hard to extend over time.

# Specific questions for Developer

- **Do you have some open source projects on GitHub?**

    They should have something. This shows that they are passionate about programming and love it so much that they spend their free time learning new things on their own.
    
- **Paste 100 lines of the code that you are most proud of.**

    Regardless of if you know how to code or not, you should look for clear comments that explain the story of the code. And the code itself should look visually simple. The more the code feels good to you, the better.

- **What is more important, to use all the latest features of a language, or to keep the code as simple as possible?**

    You want to hear that they want to keep the code as simple as possible. Using the latest features of a language means that they will lose themselves in semantics, theories, ideologies, and ideas instead of focusing on the work that needs to be done. These types of people can be good scholars, but in a company when works needs to be done right, they will slow the project down and create endless discussions that go nowhere.

# Specific questions for AWS Experts

- **How would you host a website with no servers on AWS that is SEO friendly?**

    You want to hear that the site will be built statically, hosted on S3, and delivered over CloudFront; while setting up a CodePipeline to build the site automatically when there is new code in the repository to build the static version of the site through CodeBuild.

- **How many services have you used in your latest project?**

    You want to hear services that you think you'd like to use in your project. It is impossible to know them all, but you want to hear at least 2/3 of what you need.

- **How did you integrate them with each other?**

    This is a hard one because you can make a project hundreds of ways that will all work. But AWS is designed around the idea of Triggers, especially when you deal with the Serverless part of AWS. So you want to hear that they used triggers to pass messages to another service, which then triggered another one etc.

- **How do you keep up to date with AWS?**

    You want to hear that they work on small private projects, check the AWS Blog daily, and watch videos regarding how others use AWS, in order to get ideas that can be implemented in another project.

- **When would you use Server and when Serverless?**

    Any project that you start on AWS, you want to start with Serverless. This is an ideal approach because in the beginning you don't know how the project will pan out, and once it picks up steam, you want to convert the most used lambdas or other services in to a regular server to improve performance and reduce costs. This is the ideal road map.

# Unacceptable excuses

- **"I can’t share my code" or "I have signed an NDA."**

    A passionate developer should be proud to have one or 2 projects open for anyone to see.

# To sum it up

You don't understand technical people because you lack the knowledge they have, or you don't understand them because they can't explain their work in simpler terms. The technicality is their expertise and knowledge they acquired over time, which is something that you don't have to have. But they must be able to not make you feel stupid or question your intelligence. Knowledge is *not* intelligence.