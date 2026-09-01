//Immediately Invoked Function Expression (IIFE)
//(function which gets executed immediately. This is ususlly done to prevent effect on our function due to global scope. To prevent pollution due to global function we write iife.)
//so we use "()()"=>first one stores the function second tells to execute the function

//named iife(here named as "chai")
(function chai(){
    console.log("DB CONNECTED");
})();//DB CONNECTED(the output isnt altered)
//iife doesnt know where to stop thereby we use ";" to end it otherwise there will be an error while executing the next function.

//using arrow function to do the same
( () => {
    console.log("DB CONNECTED TWO")
})();//DB CONNECTED TWO
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("hiteshi");//DB CONNECTED TWO hiteshi