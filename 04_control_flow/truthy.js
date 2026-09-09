const userEmail = "hiteshi.ai"
if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have user email")
}//got user email

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}(empty function)
//if a string contains anything(even a space) is a truthy value

//check-array
const arr=[]
if(arr.length===0){
    console.log("array is empty")
}//array is empty

//check-object
const myObj = {}
if(Object.keys(myObj).length===0){
    console.log("object is empty")
}//object is empty
//(Object.keys(myObj)=> this gives an array of object keys thereby, we can use length property on it )

//false==0 => true
//false=='' => true
//0=='' => true

//Nullish Coalescing Operator (??): null undefined
//The Nullish Coalescing Operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is null or undefined. Otherwise, it returns its left-hand side operand.
let val1;
val1 = 5 ?? 10
console.log(val1)//5
let val2
val2 =  null??10
console.log(val2)//10
let val3
val3 = undefined ?? 15
console.log(val3)//15
let val4
val4 = null ?? 10 ??20
console.log(val4)//10
let val5
val5 = null ?? false
console.log(val5)//false
let val6
val5 = null ?? 0
console.log(val6)//undefined
//this operator is basically a way to avoid null/undefined value.

//Terniary Operator
//condition ? true : false
const teaPrice = 100
teaPrice >=80 ? console.log("more than 80") : console.log("less than 80")//more than 80
