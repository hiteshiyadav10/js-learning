//dataType is basically of 2 types - 1.Primitive and 2.Non-Primitive. (It is based on storage and accessibility of data.)

//PRIMITIVE DATATYPE

//All the primitive datatype is called by value, it means the original data is never given to us i.e, we are always give a copy of such datas.

//It has 7 categories: String, Number, Boolean, Null, undefined, Symbol(used to make any value unique), BigInt(for very big numerical values)


//In js variables does not need to be defined. eg- const score = 100(here there is no need to tell score has numeric value.) The type of a variable is determined at runtime, based on the value assigned.SO JAVASCRIPT IS DYNAMICALLY TYPED.
const score = 100
const isLoggedIn = false
const temp = null
let userEmail;//it will be undefined by default
   
const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 == id2)//false
//Symbol is used to make a value unique.

const bigNumber = 3627237791283723663713681273263n
//putting "n" at the end of any number is automatically considered as bigInt




//REFERENCE(NON-PRIMITIVE)
  
 //Eg- Array, Objects, Functions

 const heros = ["shaktiman", "nagraj", "doga"] //Array
 let myObj={          //objects
    Name : "Hiteshi",
    Age : "20"
 }
 const myFunction = function(){      //function
    console.log("Hello World")
 }

 //How to determine datatype of any variable
 
 console.log(typeof bigNumber) //bigint
 console.log(typeof heros) //object
 console.log(typeof myFunction) //function
 console.log(typeof myObj) //object
 console.log(typeof id2) //symbol
 