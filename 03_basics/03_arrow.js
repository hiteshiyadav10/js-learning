const user = {
    username : "hiteshi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)//username: 'hiteshi',
  //price: 999,
  //welcomeMessage: [Function: welcomeMessage]
//}
//sam, welcome to website
//{
//  username: 'sam',
//  price: 999,
//  welcomeMessage: [Function: welcomeMessage]
//}
    }
}
//this=>it is used to make current context(it means to access elements for current scope "this" is used)
user.welcomeMessage()//hiteshi, welcome to website
user.username = "sam"//changed username
user.welcomeMessage()//sam, welcome to website
//this is because we have not hard coded the value of username in the welcomeMessage function above and now we have just changed the context(value) thereby, new value gets

//console.log(this)=>this statement inside the welcomeMessage function gives details of both the contexts(when username is "hiteshi" or when username is "sam")

console.log(this)//{} (this is because inside the node environment(in which we are currently into) refers to an empty object because there is no context inside the global)
//BUT!
//if we do console.log(this) in the browser we get "Window" because inside the browser the global object is WINDOW.

function chai(){
    console.log(this)
}
chai()//we get manyyyyyyy values thereby we can say there is something inside this!
//but if we do-
function code(){
    let username = "hiteshi"
    console.log(this.username)
}
code()//undefined!
//thereby we cant use this inside functions like we did in the objects...

//doing samething using function expression-
const chaiii = function (){
    let username = "hiteshi"
    console.log(this.username)
}
chaiii()//undefined
//thereby using function declaration or expression we cant use this like we did in objects!

//ARROW FUNCTION    
const arrow = () => {
     let username = "hiteshi"
    console.log(this.username)
}
arrow()//undefined
const arroww = () => {
     let username = "hiteshi"
    console.log(this)
}
arroww()//{}

//ARROW FUNCTION CORE
const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(4,6))//10

//another way - IMPLICIT RETURN(it is used when we have 1 line statement thereby there is no need to use return keyword)
const add2 = (num1,num2)=> num1+num2
console.log(add2(2,6))//8
//we can store num1+num2 like "(num1+num2)" this also
//when there are no curly braces({}) there is no need to use return keyword
//using return keyword comes under explicit return as done in addTwo() function.
//when we store object we need to use {}

//arrow function in loops
const myArray=[1,2,3,4,5]
myArray.forEach(()=>{})