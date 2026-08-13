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


 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //MEMORY
 //Memories are of two types - Stack(used to store primitive datatype) and Heap(used to store non-primitive datatype)
 //whenever stack memory is declared it means you will get a copy of whatever variable you have declared whereas when a heap memory is declared you get the reference of the original value.

 let myName = "Hiteshi" //as we know its primitive datatype thereby it will go to stack
 let anotherName = myName
 anotherName = "Yadav"
 console.log(anotherName) //Yadav
 console.log(myName) //Hiteshi
 //therefore original value doesnt change only the copy changes

 let user1 = {            
   email : "user@gmail.com",
   upi : "user@fbi"
 }      //all of this goes to heap memory as reference not as a copy
 let user2 = user1
 user2.email = "hiteshi@google" //redefining email for user 2
 console.log(user1.email) //hiteshi@google
 console.log(user2.email) //hiteshi@google
 //therefore change of data for any of the user makes change for both as they are equal and has heap memory therefore they have same reference(all the changes made are in the original value only)
