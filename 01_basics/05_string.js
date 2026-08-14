const name = "hiteshi"
const  repoCount =  50
console.log(name + repoCount) //hiteshi50
console.log(name + repoCount + "value") //hiteshi50value
//but this syntax for stings is very outdated

//New way - using backticks
//String Interposition : we make placeholders and we can directly inject variables there
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //Hello my name is hiteshi and my repo count is 50

const name1 = new String('Yadav')//another way of declaring a string
console.log(name1) //[String: 'Yadav']
console.log(name1[0]) //Y
console.log(name1[3]) //a
//thereby string is stored in key-value pair(0-key and Y-value)
console.log(name1.__proto__) //{} (it means its an object)
console.log(name1.length) //5
console.log(name1.toUpperCase()) //YADAV (BUT THE OG VALUE ISNT CHANGED BECAUSE OBJECT IS UNDER NON-PRIMITIVE DATATYPE AND IS STORED INTO HEAP)
console.log(name1.charAt(4)) //v
console.log(name1.indexOf('a')) //1

const gameName = new String('hiteshi-hy')
//slicing
const newString = gameName.substring(0,4)//0 is the start number and 4 is the end number for slicing(although the last value wont be included)
console.log(newString)//hite
const newString1 = gameName.substring(-8,4)
console.log(newString1)//hite
//using negative values sin substring has no effect on it it will start from 0 only.
const newString2 = gameName.slice(-9,4)
console.log(newString2)//ite
//Resolved Index = length + negative index
//length of string is 10 and negative index is -9 so resolved index is 1
//start from index 1 and last point is 4 but its not taken so answer is ite
const newString3 = gameName.slice(-8,4)
console.log(newString3)//te
//resolved index = 10-8=2
//so from index 2 to 4-1(ie 3) so answer is te


//TRIM AND REPLACE
const newString4 = "    hiteshi    "
console.log(newString4)//    hiteshi
console.log(newString4.trim())//hiteshi
//trim() works on white space and \n

const url = "https://hiteshi.com/hiteshi%10yadav"
console.log(url.replace('%10','-'))//https://hiteshi.com/hiteshi-yadav
//Include
console.log(url.includes('hiteshi'))//true
console.log(url.includes('hiteshi10'))//false

//CONVERSION OF STRING TO ARRAY
//Split
const newString5 = "hiteshi-hy-yadav"
console.log(newString5.split('-')) //[ 'hiteshi', 'hy', 'yadav' ] thereby the string got split on the basis of '-' present in the string passed
