---
layout: post
title: "Lesson 1: Preparation"
tags: ionic2
date: 2016-11-24
categories: ionic2
comments: true
author: carlosrojas
cover: "https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/AAEAAQAAAAAAAAd1AAAAJGU4ZDc4OTAzLWQzYzktNGQ2Ny1iODU3LWUxYzQyMjY4YzA5OA.png?alt=media&token=17030062-508e-43b2-9cf3-aef7563883e0"
---

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/AAEAAQAAAAAAAAd1AAAAJGU4ZDc4OTAzLWQzYzktNGQ2Ny1iODU3LWUxYzQyMjY4YzA5OA.png?alt=media&token=17030062-508e-43b2-9cf3-aef7563883e0" />

Hello there!! and welcome to this travel called Ionic 2. 

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

Ok, now if everything goes well, you can see in your directory location a new folder called *"myFirstApp"* j