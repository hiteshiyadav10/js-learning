//NUMBERS
const score = 400
console.log(score)//400
//as js is dynamic so in runtime it has identified its datatype is number but we can specify it too!
const balance = new Number(1000000)
console.log(balance)//[Number: 1000000]

console.log(balance.toString().length)//7
console.log(balance.toFixed(2))//1000000.00(its used to set precision value)

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))//23.9
console.log(otherNumber.toPrecision(2))//24
console.log(otherNumber.toPrecision(4))//23.90
console.log(otherNumber.toPrecision(1))//2e+1

const hundreds = 100000000
console.log(hundreds.toLocaleString());//100,000,000
//It returns answer with commas according to US standards.
console.log(hundreds.toLocaleString('en-IN'))//10,00,00,000
//It returns answer according to indian standard.


//+++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++

console.log(Math) //Object [Math] {}
console.log(Math.abs(-5)) //5
console.log(Math.abs(5)) //5
console.log(Math.round(-5.9))//-6
console.log(Math.round(4.3))//4
console.log(Math.ceil(-5.9))//-5
console.log(Math.ceil(4.2))//4
console.log(Math.ceil(4.8))//5
console.log(Math.floor(-5.9))//-6
console.log(Math.floor(4.5))//4
//Math.ceil(x) - Always rounds UP (towards +infinity, to the right on the number line).
//Math.floor(x) - Always rounds DOWN (towards -infinity, to the left on the number line).
console.log(Math.min(4,1,0,9,-7))//-7
console.log(Math.max(4,1,0,9,-7))//9

console.log(Math.random())//0.777400384019654
console.log(Math.random())//0.34182426264317733
//Math.random() always gives values in between 0 and 1
console.log(Math.random()*10)//6.379411393674532
console.log((Math.random()*10)+1)//10.469243862806469(we added +1 here because the value can be 0.0.. and multiplying it by 10 gives 0.... thereby we added 1 over here).Now the values will be between 1 to 9 for sure. 
console.log(Math.floor((Math.random()*10)+1))//9(it rounds of the random value to the lowest value)

//case in which min and max value for any randon number are predefined
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))//18
//max-min=>to get the number in desired range
//+1=>to get rid of 0 case
//min=>to get values above 10 only