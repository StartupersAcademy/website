---
layout: post
title: "Lesson 3: User Authentication."
tags: ionic2, firebase3
date: 2016-12-03
categories: ionic2
comments: true
author: carlosrojas
cover: "https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2Ffirebase-ionic-user-authentication.png?alt=media&token=a0422048-52b1-4b85-b017-48063ce1fd85"
---
<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2Ffirebase-ionic-user-authentication.png?alt=media&token=a0422048-52b1-4b85-b017-48063ce1fd85" alt="Auth image">

Hello Startupers!!! and welcome to our lesson number 3. Hooray!!!

if you remember the first lesson we create a simple App called *myFirstApp* you can go [here](http://www.startupers.io/ionic-2-lesson1)

Now, we going to continue building our amazing App. Remember our goals.

* Read news from a Feed (RSS).
* Register users.
* Authenticate users.
* Reset password.

First, we need delete the existing pages in my project. When you create a new project by default ionic add some pages about, contacts, tabs, etc.

If you want a project blank you can add the *blank* parameter in the end of

````javascript

$ionic start myFirstApp --v2 blank

````

Delete all the directories in ````src/pages/````

Now, We going to need create some Pages and some Providers. to do this we going to use a CLI command called [generate](http://ionicframework.com/docs/v2/cli/generate/)

````javascript
$ ionic generate page NewsDetail
$ ionic generate page NewsListing
$ ionic generate page Login
$ ionic generate page Profile
$ ionic generate page ResetPassword
$ ionic generate page Signup
````

That will generate all the pages we need, and then:

````javascript
$ ionic generate provider NewsData
$ ionic generate provider AuthData
$ ionic generate provider ProfileData
````

Now, we need install the Cloud service client.

````javascript

$ npm install @ionic/cloud-angular --save

````

Before you can configure your cloud settings, you’ll need to have an app ID. In your project directory, run:

````javascript

$ ionic io init

````

In your ````src/app/app.module.ts```` file.

We need delete this:

````javascript

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

````

and this:

````javascript

    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
    
````



Define a CloudSettings object for your app’s cloud settings. Replace APP_ID with your app’s ID, which you can find in your ionic.config.json file.

