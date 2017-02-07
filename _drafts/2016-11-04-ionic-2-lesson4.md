---
layout: post
title: "Lesson 4: Objects."
tags: ionic2, ionic cloud
date: 2016-12-04
categories: ionic2
comments: true
author: carlosrojas
cover: "https://cdn-images-1.medium.com/max/800/1*Pq2S2TRqVpSnurkKnhKbZw.png"
---

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2Fobject.jpg?alt=media&token=5a4e23bf-e1fc-4795-a7bb-06e3e5ee8d18" alt="Object">

Hello Startupers!!! and welcome to our lesson number 4. Hooray!!!

At this point we have learned 

* [How to connect our App with Ionic Cloud.](/ionic-2-lesson3){:target="_blank"}
* [Some fundamentals about Ionic 2 and the technologies that compose Ionic.](/ionic-2-lesson2){:target="_blank"}

Now, we gonna learn about Classes and Objects and we gonna create our view to read News.

## What is an Object ?

An Object is compound data: it combines other things together into a single bundle. What makes the Object unique is that it combines data with code.

## What is a Class ?

Classes are the data-type for Objects. Each Class defines the specific set of data and the specific procedures that will make a particular Object.

You can see a class like a template and a Object like the product of that template.

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2Fobject.png?alt=media&token=1b29e488-c458-4e8e-bb87-442a1054b60f" alt="">

Objects have two more characteristics atributes and methods. atributes are properties that have the objects and methods are functions that have objects. You can see an example in this picture.

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FCPT-OOP-objects_and_classes_-_attmeth.svg.png?alt=media&token=d9774d2b-d8a8-4ffa-b788-9ced6212340d" alt="">

if you take an eye in our App we can find this elements in our project.

### login.ts

````javascript

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginPage {
   myForm: FormGroup;
}

````

If you see this piece of code, you can see ````ìmport```` and ````export```` words. ````ìmport```` is the word that say
to Ionic that you going to need create *objects* from the clases that you are importing. in the same way the word ````export````
say to Ionic that that class that you are creating can be import in the future in other file.


Now we gonna use a service. A service is a kind of piece of code with methods that you going to reuse in diferent parts of your app.
To create a provider we gonna use the ````generate```` command.

````javascript
$ ionic g provider rssService
````

and we need to say to Ionic that we want to use this service.

### app.module.ts
````javascript
...
import { rssService } from '../providers/rssService';
...
@NgModule({
  declarations: [
    MyApp,
...
...
  providers: [rssService]
})
export class AppModule {}

````
Ok, now we are ready to continue with our App.



