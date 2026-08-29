//console.log("H")
//console.log("I")
//console.log("T")
//console.log("E")
//console.log("S")
//console.log("H")
//console.log("I")
//instead of doing it again and again we can defeine a function foe this!
function sayMyName(){
console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
console.log("I")
}
sayMyName()
//H
//I
//T
//E
//S
//H
//I   (execution of the function)

//writing "sayMyName"=> does notion as its only reference to the function.

//FUNCTION TO ADD TWO NUMBERS
function addTwoNumbers(number1,number2){
      console.log(number1+number2);
}//number1 and number2 are parameters over here.
addTwoNumbers(4,6)//10 (4 and 6 are arguments over here.)
addTwoNumbers(4,"6")//46
addTwoNumbers(4,"a")//4a
//therefore, checking(using if/else statements) for dataType is important!

const result = addTwoNumbers(3,5)//8
console.log("Result: ",result)//Result:  undefined
//writing console.log() and returning a result are different things!!
function addTwoNumberss(number1,number2){
    let answer = number1 + number2
    console.log("hiteshi")//hiteshi
    return answer  
    console.log("hiteshi")//this will never get printed because after defining return, function doesnt do any work.

    //Instead of declaring an answer variable we can also directly return number1 + number2
}
const answer =  addTwoNumberss(4,6)
console.log("Answer: ",answer)//Answer:  10

function loginUserMessage(username){
      return `${username} just logged in`
}
console.log(loginUserMessage("hiteshi"))//hiteshi just logged in
console.log(loginUserMessage())//undefined just logged in
//TO AVOID THIS USE IF-THEN STATEMENT!
function loginUserMsg(username){
      if(username===undefined){
            console.log("Please enter a username")
            return
      }
      return `${username} just logged in`
} 
console.log(loginUserMsg())//Please enter a username
console.log(loginUserMsg("aashi"))//aashi just logged in
//if we would have passed "username = "sam",then in case of undefined also we will gwt sam just logged in and in case of defined sam will get overwritten with the passed argument.

//WHEN WE DONT KNOW HOW MANY ARGUMENTS ARE TO BE PASSED BY THE USER(eg.- in a shopping app we dont know hown many items will be added by the customer in the cart which we will be required to add)
function calculateCartPrice(...num1){
      return num1
}
//...=>Rest/Spread Operator
//here "..." works as rest operator which means whatever value passed will be bundled up and returned to us.
console.log(calculateCartPrice(200,400,600))//[ 200, 400, 600 ](now we can loop over this array, add all the values and get the desired output)

//another way-
function cartTotal(val1,val2,...num1){
      return num1;
}
console.log(cartTotal(200,400,600,800))//[ 600, 800 ](val1 and val2 becomes 200 and 400 respectively and the rest gets stored into num1)

//PASSING THE OBJECT CREATED INTO A FUNCTION
const user = {
      username : "hiteshi",
      price : 199
}
function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)//Username is hiteshi and price is 199
//direct way-
handleObject({
      username : "sam",
      price : 399
})//Username is sam and price is 399

//PASSING ARRAYS INTO THE FUNCTION
const myArray = [100,300,500,700]
function returnSecondValue(getArray){
      return getArray[1]
}
console.log(returnSecondValue(myArray))//300
//direct way-
console.log(returnSecondValue([200,400,600]))//400