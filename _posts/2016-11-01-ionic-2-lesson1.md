---
layout: post
title: "Lesson 1: Preparation"
tags: ionic2
date: 2016-11-01
categories: ionic2
comments: true
author: carlosrojas
cover: "https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/AAEAAQAAAAAAAAd1AAAAJGU4ZDc4OTAzLWQzYzktNGQ2Ny1iODU3LWUxYzQyMjY4YzA5OA.png?alt=media&token=17030062-508e-43b2-9cf3-aef7563883e0"
---

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/AAEAAQAAAAAAAAd1AAAAJGU4ZDc4OTAzLWQzYzktNGQ2Ny1iODU3LWUxYzQyMjY4YzA5OA.png?alt=media&token=17030062-508e-43b2-9cf3-aef7563883e0" />

Hello Startupers!! and welcome to this travel called Ionic 2. 

First of all i want to do a distinction between Ionic 1 and Ionic 2
if it's your first time exploring Hybrid Apps maybe you can be confussed because people is talking about Ionic 1 and Ionic 2 

<i>are similars? it's the same? </i>

Well, basically this two versions of Ionic share the ideology to use html/js/css to build mobile apps. this two versions use the same CLI then you can use
the same commands to build, serve and deploy. but are differents mainly because Ionic 1 use Angular 1.x.x and Ionic 2 use Angular 2.x.x and this two technologies
only share the name :)

Ok. then having said that think that we gonna focus in this course in Ionic 2.

<h2>Installing Ionic.</h2>

<h3>Installing Node and Cordova</h3>

Ionic CLI is installed on top of Node and Ionic is Built on top of Cordova, so you gonna need [Download and Install a recent version of Node from here](https://nodejs.org/).

Once you have Node.js installed, you will be able to access the node package manager or npm through your command terminal.

````script

npm install -g ionic cordova

````

*Maybe you can need ```` sudo ```` in order to install globally*

<h3>Installing Android SDK</h3>

You gonna need Android installed in your machine to run smoothly ionic. Please follow these guides.

[Mac OS X](http://ionicframework.com/docs/v2/resources/platform-setup/mac-setup.html)

[Windows](http://ionicframework.com/docs/v2/resources/platform-setup/windows-setup.html)

<h3>Installing XCODE only for Mac OS X</h3>

If you have a Mac, you gonna need de Xcode CLI Tools. Follow the link and install.

[Download XCODE](https://developer.apple.com/xcode/)

<h3>Creating your first Ionic 2 App. Yeeeih!!</h3>

Ok, now we need write this command:

````script

ionic start myFirstApp --v2

````

Ok, now if everything goes well, you can see in your directory location a new folder called *"myFirstApp"* and in your terminal CLI. Something like this:


````script

♬ ♫ ♬ ♫  Your Ionic app is ready to go! ♬ ♫ ♬ ♫

Some helpful tips:

Run your app in the browser (great for initial development):
  ionic serve

Run on a device or simulator:
  ionic run ios[android,browser]

Test and share your app on device with Ionic View:
  http://view.ionic.io

Build better Enterprise apps with expert Ionic support:
  http://ionic.io/enterprise

New! Add push notifications, live app updates, and more 
with Ionic Cloud!
  https://apps.ionic.io/signup

````

Now we need move to our project folder.

````script

cd myFirstApp

````

From now on, whenever you are going to type something in the CLI it’s gonna be in this location.

Now, we going to start our new App. type in the terminal CLI.

````script

ionic serve

````

You have to see something like this in your browser:

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Screen%20Shot%202016-11-22%20at%2012.53.40%20PM.png?alt=media&token=d35c067a-7d22-4381-bee8-646a4198aa5f" width="100%" />

If you see that screen your are very good :) gratz.

Now, I personally use Chrome Dev Tools to work in my projects.

To use this from your Browser you need Click-Right Button in your Mouse. And select "Inspect".

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Screen%20Shot%202016-11-22%20at%2012.55.55%20PM%20(1).png?alt=media&token=df35d032-326c-4940-992d-1ded976ec9c7" width="100%" />

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FScreen%20Shot%202016-11-22%20at%2012.59.39%20PM%20(1).png?alt=media&token=196e5d56-456d-4f14-a88c-0afcd2fd3c2b" width="100%" />

Press in the 3 points in the corner and select "Dock to right".

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FScreen%20Shot%202016-11-22%20at%201.02.16%20PM.png?alt=media&token=6e6a96ae-99c8-4013-9e9c-a24ac11c0993" width="35%" />

and later, press in the small device image.

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FScreen%20Shot%202016-11-22%20at%201.05.01%20PM%20(1).png?alt=media&token=6818defd-84c2-4fcb-90a3-56739d1b5525" width="35%" />

Now you can see something like this:

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FScreen%20Shot%202016-11-22%20at%201.11.37%20PM%20(1).png?alt=media&token=e4386080-b652-4afb-937d-11896518404a" width="100%" />

Perfect!! now, we are almost ready. Additionally, you need and editor. you can find [good options here](http://ionicframework.com/docs/v2/resources/editors_and_ides/).

I'm using Visual Studio Code. 

Then, when you choose your editor you going to need open the project there:

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FScreen%20Shot%202016-11-22%20at%201.19.08%20PM.png?alt=media&token=2a8c983c-1d33-4fb3-a5f3-1a67c0d6b1d3" alt="" width="100%" />

Cool, What next?

Well, we going to create an app that have these features:

* You can read news from a Feed (RSS).
* You can register users.
* You can Authenticate users.
* Your users can reset password.

Ok, that's all for now. In 6 or 7 days from received this in your email you going to receive the next lesson. but, meanwhile 
you can read the next links :)

[What are RSS feeds?](http://j.mp/2gyce3x)

[Angular 2 Series](http://j.mp/1zaQGbP)

[Ionic Cloud Services](http://j.mp/2gylULG)

Please rate this [lesson here](https://carlosrojaso.typeform.com/to/Y07Lg9).Help us to improve :)