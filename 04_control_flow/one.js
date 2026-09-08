//if
//if (condition) {
    //if condition is true then the code inside the scope is executed not otherwise.
//}
//Basic Comparison Operator : <,>,<=,>=,==,!=,===
if(2=="2"){
    console.log("executed")
}//executed(because "==" conly compares values not the dataTypes)
if(2==="2"){
    console.log("executed")
}//nothing gets executed because 2 is an integer and "2" is a string
if(2!=3){
    console.log("executed")
}//executed(because the condition is true)
const temp =  41
if(temp<50){
    console.log("temperature is less than 50")
}
else {
    console.log("temperature is more than 50")
}
//temperature is less than 50

const score = 200
if(score>100) {
    const power = "fly"
    console.log(`User Power: ${power}`)
}//User Power: fly
//console.log(`User Power: ${power}`)//ReferenceError: power is not defined (this is due to scope! everything inside {} have scope or are defined into {} only)

const balance = 1000
//if(balance>500) console.log("test1"), console.log("test2");
//although this will get executed but this is not a good practice at all!!!

//if-else
if(balance<500){
    console.log("less than 500")
} else if(balance<750){
    console.log("less than 750")
} else if(balance<900){
    console.log("less than 900")
} else{
    console.log("less than 1200")
}//less than 1200

//multiple-condition-check
const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("allowed to buy the course")
}//allowed to buy the course

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in")
}//user logged in