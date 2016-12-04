---
layout: post
title: "Lesson 2: Fundamentals"
tags: ionic2
date: 2016-11-02
categories: ionic2
comments: true
author: carlosrojas
cover: "https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FAAEAAQAAAAAAAAT0AAAAJDliNTk5MmU3LWM5ZmUtNGJmYi1iOTI3LTY5MTExOTI0NWExYg%20(1).jpg?alt=media&token=a9ca42a8-f648-4cab-8329-cccd1f29ee62"
---

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FAAEAAQAAAAAAAAT0AAAAJDliNTk5MmU3LWM5ZmUtNGJmYi1iOTI3LTY5MTExOTI0NWExYg%20(1).jpg?alt=media&token=a9ca42a8-f648-4cab-8329-cccd1f29ee62" />

Hello Startupers!!!

This is Lesson 2 in this trip to build your first App in Ionic 2. I hope you are very comfy because this going
to be a bunch or new topic that you gonna need in order to understand Ionic 2, but don't worry you going to 
find this helpful later when you continue creating amazing views and logic in your App.

## ECMAScript 6

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FkYzZHh%20(1).png?alt=media&token=6751662a-3239-41bb-948c-08b6d1eeefed" alt="">

Javascript is the cornerstone in the world of Hybrid Apps. Angular 2 is built on top of ECMAScript 6.
ECMAScript 6 is the specification of Javascript to be used in all the WEB in the next years. EC6 bring 
interesting stuff.

### New Features

#### Classes

Javascript ES 5 don't have the concept of Classes that is a paradigm used in development in other languages as C#, Java,
Objetive-C. But now we gonna can use this feature in Javascript easily.

##### EC6 (Now)

````javascript

class Person {
  name;
  age;

  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  getName(){
    return this.name;
  }
}

````

##### EC5 (Before)

````javascript

var Person = function (name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.getName = function () {
    return this.name;
};

````

#### Modules

Now we can write and import smoothly our libraries.

##### EC6 (Now)

````javascript

//  lib/math.js
export function multiply (x, y) { return x * y }

//  someApp.js
import { multiply } from "./lib/math"
console.log(multiply(2, 2));

````

##### EC5 (Before)

````javascript

//  lib/math.js
LibMath = {};
LibMath.multiply = function (x, y) { return x * y };

//  someApp.js
var math = LibMath;
console.log(math.multiply(2, 2));

````

## Promises

Promises are a nice way to make async requests on other words ask to servers for data. Now is integrated in javascript then you
can implement this easily.

##### EC6 (Now)

````javascript

doSomething(){
   return new Promise((resolve) =>{
     resolve(true);
   })
}

doSomething().then(rta => {
  console.log(rta);
});

````

##### EC5 (Before)

````javascript

function doSomething (onDone) {
  onDone();
}

doSomething(function(rta){
  console.log(rta);
})

````
## let y const

Now we can integrate the variable scope without use self-invoking functions.

##### EC6 (Now)

````javascript

const PI = 3.14;
if(true) {
  let twitter = "@startupersio";
}
console.log(twitter); //Error. twitter is out of the scope.
console.log(PI); //3.14

PI = 3.12; //Error. PI is Constant.

````

##### EC5 (Before)

````javascript

if(true) {
  var twitter = "@startupersio";
}
console.log(twitter); //twitter is global

````

The important thing here is that we can use this new features in Ionic 2.

## TypeScript

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2Fhm2KzP%20(1).jpg?alt=media&token=55c515d2-a07c-4e48-b9c4-386c1ee7efee" alt="">

TypeScript is a superset of JavaScript that gives you advantages like static types, classes and interfaces.

For example:

##### Types

````javascript

// Only string permitted.

let alert = (msg: string) => {
  alert(msg);
}

````

##### Interfaces

````javascript

interface Shoe {
  brand: string,
  size: number,
  isCasual: boolean
}

````

Ok, the importan thing here is that we going to have more cool features thanks to Typescript.

## Transpiling

Transpiling means converting from one language to another language. This is important because ES6 is not completely
supported by browsers yet. That means that we can use this new cool stuff. Then we need convert code from ES6 to ES5
to use new features but in a language that all the browsers understand already.

When you are using Ionic 2 you don't need worry with this. Ionic CLI handle this for you.


## Angular 2

<img src="https://firebasestorage.googleapis.com/v0/b/startupers-9cbb6.appspot.com/o/Posts%2FZiY7lT8%20(1).jpg?alt=media&token=2a2737ac-f30c-46e6-954d-c6711734a8df" alt="">

If you remember our [First Lesson](/ionic-2-lesson1) we mention that the big difference between Ionic 1 and Ionic 2 is that you need 
use Angular 2 to write the logic in your App.

Some examples:


##### Binds property value to the result of expression firstName.

````javascript

<input [value]="firstName">

````

#####  Binds text content to an interpolated string, for example, "Hello Seabiscuit".

````javascript

<p> Hello {{ ponyName }} </p>

````

The important thing here is that you need remember that you gonna use Angular 2.0 all the time with you new Ionic 2 App.

Ok, this is everything for now. In 6 or 7 days from received this in your email you going to receive the next lesson. but, meanwhile you can read the next links :)

[Angular 2 Intro](http://j.mp/2gRgW9A)
[Angular 2 Series](http://j.mp/1zaQGbP)
[Angular 2 Cheatsheet](http://j.mp/2gReoIz)

