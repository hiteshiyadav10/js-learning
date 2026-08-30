/*let a = 10
const b = 20
var c = 30
console.log(a);//10
console.log(b);//20
console.log(c);//30
*/
//{}=>curly braces used with functions/if-else statements is called SCOPE.(Dont confuse it with objects)
var c = 40;
if(true){
let a = 10
const b = 20
var c = 30 
}
//console.log(a);//error comes saying a is not defined
//console.log(b);//error comes saying b is not defined
console.log(c);//30
//NOW THIS CREATES A PROBLEM!
//declared "var c = 30" is not limited to the loop.Even if he wanted to get value of c as "40" he will get 30 only as it got overwritten.
//THEREBY, usage of var is avoided.

//everthing inside the if statement comes under "bock scope" and everthing outside is "global scope".
//everything inside the global scope is accessible inside the block scope but the reverse is not true!

let a=300;
if(true){
   let a=1
   console.log(a)//1
}
console.log(a)//300


//NESTED SCOPES
function one(){
    const username = "Hiteshi"

    function two(){
        const website = "Youtube"
        console.log(username)//Hiteshi(for two(), one() is global or we can say child can access the parent.)
    }
    //console.log(website)//=>ERROR
    two()//if we dont write this, username wont be printed
}
one()//if we dont write this, username wont be printed

//same thing happens in if-else statements
if(true){
    const username = "Hiteshi"
    if(username==="Hiteshi"){
        const website = " Youtube"
        console.log(username + website)//Hiteshi Youtube
    }
    //console.log(website)//error
}
//console.log(username)//error

//++++++++++++++++++++++++ interesting +++++++++++++++++++++

addone(5)
function addone(num){
    return num+1
}
addone(5)//value is only returned not printed over here

//addTwo(5)//=>ERROR
const addTwo = function(num){
    return num+2
}
addTwo(5)
//There is problem in returning function 2 before defination as it is declared differently from funtion 1.(funtion 2 is declared and held in a variable)
//This comes under "HOISTIONG"!