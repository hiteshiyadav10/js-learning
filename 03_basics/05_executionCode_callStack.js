//JavaScript Execution Context : it shows how we will run the file we have made in JavaScript. It can be done into 2 modes.
//  Whenever we write a code in javascript, GLOBAL EXECUTION CONTEXT is created which is always reffered to "this" variable.
//Remember, inside the browser this gives value as "window".
//Second one is, FUNCTION EXECUTION CONTEXT.
//EVAL EXECUTION CONTEXT(basically, it is a property of global execution context)....
//The two phases in which javascript ececution code is executed are -
//1. Memory Creation Phase (here, all the variables/whatever we have careated are allocated some space but are not executed yet or we can say any type of mathematical function is not executed here.)
//2. Execution Phase

//lets understand with the help of a code
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 =  addNum(10,2)

//step1=>Global Execution
//any type of code big or small runs with global execution context and is allocated with "this".

//step2=>Memory Phase
//the the variables are collected and stored in memory. val1 and val2 will be stored as undefined over here! addnum will be stored with its defination and result1 and result 2 will also be stored as undefined...

//step3=>Execution Phase
//val<=10, val2<=5, addNum will make a new execution context which has "new variable environment + execution thread" and now memory creation phase and execution phase will be created again for this function!
    //Memory Phase=> val1, val2 and total all three inside the function will be undefined.
    //Execution Phase=> num1, num2 and total will have 10, 5 and 15 stored in them respectively. Total will apparantly get returned to global executional context.
//After all of this work is being done the new executional context created due to addNum function gets DELETED!!!
//After this, result1 becomes 15.
//For result2, again new variable environment and thread will be created which will further have manmory pahse and executional context.
  //Memory Phase=> val1, val2 and total will be undefined over here.
  //Execution Phase=> num1, num2 and total will be 10, 2 and 12 respectively.
  //total will ultimately get returned to the global executional context.
//after all this, new executional context will get deleted and result2 will become 12...


//********************** CALL STACK **********************

//First of all, global executional context will go into the stack.
//If a function without any other function call inside is called, it moves to the stack does it work and gets removed eventually....BUTTT if a fuction has another function called inside it then that fuction also comes into the stack after the first one....
//Here comes the concept of LIFO=>Last In First Out. The functions will get removed from the stack using this concept only.
