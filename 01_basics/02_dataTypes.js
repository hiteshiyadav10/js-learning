"use strict"; //use all JS code as newer version


//alert(3+3) //this will give an error because alert isn't defined in node.js environment,it is a browser function. we can run it in browser console or use node.js sepecific function like console.log() this will work in node.js environment.

//console.log(3+3) console.log("Hiteshi")//this will give a error
//console.log(3+3); console.log("Hiteshi")//now this will run but its still a bad practice to do

//Code redabiity should be high
console.log(3+3) //prints 6 in the terminal
console.log("Hiteshi") //prints Hiteshi in the terminal

//"Preetier" is an extension which is used to indent the code automatically
//MDN is easy documentation for everthing given by mozilla org. But original documentation is actually given by ECMAScript for giving js standards.


//Datatypes
let name = "Hiteshi"
let age = 20
let isLoggedIn = true
let state;
let status = null
//Number : it has range =>2 to power 53
//BigInt : used when your number is very big.
//String : can use single or double quotes.
//Boolean : uses true/false only as its value.
//Null : Yes its a dataType but its also a standalone value.Its a representation of empty value.
//Undefined : when variable is declared but no value is given yet. Eg.-state
//Symbol : its implementation will be seen during react topic. It is used to find uniqueness.

//Object : will be studied further.

//Finding DataTypes
console.log(typeof age) //will return number as answer
console.log(typeof name)//wiil return string as answer
console.log(typeof isLoggedIn)//will return boolean  as answer
console.log(typeof state)//will return undefined only as answer
console.log(typeof status)//will return object as answer
