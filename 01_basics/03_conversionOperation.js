let score = 33
console.log(typeof(score))//number
score = "33"//dont write let score ="33". It will give an error.
console.log(typeof(score))//string
//now datatype of score is string only

//eg-1
let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number
console.log(valueInNumber) //33

//eg-2
let marks = "33abc";
let valueInNumber1 = Number(marks)
console.log(typeof valueInNumber1) //number
console.log(valueInNumber1) //NaN (not a number)
//so we can give a variable(here valueInNumber1) dataType like this but the value given may or may not be the same.SO CHECK! 

//eg-3
let points = null
let valueInNumber2 = Number(points)
console.log(typeof valueInNumber2) //number
console.log(valueInNumber2) //0

//eg-4
let strike = undefined
let valueInNumber3 = Number(strike)
console.log(typeof valueInNumber3) //number
console.log(valueInNumber3) //NaN

//eg-5
let stroke = true
let valueInNumber4 = Number(stroke)
console.log(typeof valueInNumber4) //number
console.log(valueInNumber4) //1(if it would have been false then answer would be 0)

//eg-6
let name = "hiteshi"
let valueInNumber5 = Number(name)
console.log(typeof valueInNumber5) //number
console.log(valueInNumber5) //NaN

//SUMMARY
//"33"=> 33
//"33abc"=>NaN
//null=>0
//undefined=>NaN
//true=>1 & false=>0
//"hiteshi"=>NaN

//CONVERSION TO BOOLEAN

let isLoggedIn = 1
let valueInBoolean = Boolean(isLoggedIn)
console.log(typeof valueInBoolean) //boolean
console.log(valueInBoolean) //true(similarly for 0 it will get converted to false)

let str = ""
let valueInBoolean1 = Boolean(str)
console.log(typeof valueInBoolean1) //boolean
console.log(valueInBoolean1) //false

let string = "hiteshi"
let valueInBoolean2 = Boolean(string)
console.log(typeof valueInBoolean2) //boolean
console.log(valueInBoolean2) //true

//SUMMARY2
//1=>true
//0=>false
//""=>false
//"hiteshi"=>true


//CONVERSION TO STRING

let numb = 12
let valueInString = String(numb)
console.log(typeof(valueInString)) //string
console.log(valueInString) //12
//therefore the value of valueInString is number only but type is changed to string



//*************OPERATIONS***************

let value = 3
let negValue = -value
console.log(negValue) //-3

//Basic Maths Operations
console.log(2+2) //4
console.log(2-2) //0
console.log(2*2) //4
console.log(3**2) //9(it means 3 raise-to-the-power 2)
console.log(3/2) //1.5
console.log(3%2) //1

let str1 = "Hello"
let str2 = " Hiteshi"
let str3 = str1 + str2 //we can join 2 strings like that
console.log(str3) //Hello Hiteshi

//Complex Situations
console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + "2") //12
console.log("1"+ 2 + 2) //122
console.log(1 + 2 + "2") //32
console.log(1 + "2" + 2) //122

console.log( 3 + 4 * 5 % 6 ) //5(you will get the output here but writing code like this is not a good practice....USE PARENTHESIS!!)

//Tricky Conversions
console.log(true) //true
console.log(+true) //1(Because "true" is itself a boolean and is converted due to increment done here)
//console.log(true+) it gives an error here
console.log(+"") //0(Its because ""=> false and is converted into 0 due to increment.)


let num1, num2, num3
num1=num2=num3=2+2 //writing such things is a bad practice though but its possible


let gameCounter = 100
gameCounter++ //postfix
console.log(gameCounter)//101

let gameCounter1 = 100
++gameCounter1 //prefix
console.log(gameCounter1) //101