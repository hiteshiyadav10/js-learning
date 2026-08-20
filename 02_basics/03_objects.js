//object can be declared as a literal or a constructor
//singleton=> object made by constructor method(object.create) are singleton(its a type of object only)

//object literals
const jsUser = {
    Name:"hiteshi",
    "Full Name": "Hiteshi Yadav",
    age: 18,
    location: "Jaipur",
    email: "hiteshi@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}//objects store data in key-value pair
//Name, "Full Name", age, location, email, isloggedIn, LastLoginDays - all of them have string  datatype
console.log(jsUser.email)//hiteshi@google.com
console.log(jsUser["email"])//hiteshi@google.com
console.log(jsUser["Full Name"])//Hiteshi Yadav(we cant use console.log(jsUser."Full Name")) here as it will give an error

//  Q: Declare a symbol and add it to the keys of an object.
const mySym = Symbol("key1")
const jsUser2 = {
    Name: "Hiteshi",
    mySym: "mykey1"
}
console.log(jsUser2.mySym)//mykey1
console.log(typeof jsUser2.mySym)//string
//so mysym is not used as a symbol, its used as a string only which was not required by us
//mySym: "mykey1" tells JavaScript to make a key literally named "mySym" (a string). It completely ignores the const mySym variable you created above.

//Correct Way-
const mySymbol = Symbol("mykey2");
const jsUser3 = {
    [mySymbol]: "mykey2"
}
console.log(jsUser3[mySymbol])//mykey2
console.log(typeof jsUser3[mySymbol])//string
//Using square brackets tells JavaScript to evaluate the variable as a dynamic key (the Symbol itself) rather than creating a string key named "mySymbol".

//overwriting values of an object
jsUser.email = "hiteshi@microsoft.com"
console.log(jsUser.email)//hiteshi@microsoft.com

//to lock values of an object
Object.freeze(jsUser)//now any changes made in jsUser will not be entertained
jsUser.Name = "aashi"
console.log(jsUser)//{Name:'hiteshi','Full Name': 'Hiteshi Yadav',age: 18,location: 'Jaipur',email: 'hiteshi@microsoft.com',isLoggedIn: false,lastLoginDays: [ 'Monday', 'Saturday' ]}
//value of name is not changed!

//addition of function into a object
jsUser2.greeting = function(){
    console.log("Hello JS User!")
}
console.log(jsUser2.greeting)//undefined
console.log(jsUser2.greeting())//Hello JS User! 

jsUser2.greeting2 = function(){
    console.log(`Hello JS user, ${this.Name}`)
}
console.log(jsUser2.greeting2())//Hello JS user, Hiteshi