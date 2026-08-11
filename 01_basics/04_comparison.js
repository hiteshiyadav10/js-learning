console.log(2>1) //true
console.log(2>=1) //true
console.log(2<1) //false
console.log(2==1) //false
console.log(2!=1) //true

console.log("2" > 1) //true
console.log("02" > 1) //true
//JS has already converted the passed string into number, hence the output. But its not necessary that such conversions will always give predictable results.
//make sure dataType of compared elements is same!

console.log(null>0) //false
console.log(null>=0) //false
console.log(null<0) //true
console.log(null==0) //false
console.log(null!=0) //true

console.log(undefined>0) //false
console.log(undefined>=0) //false
console.log(undefined<0) //false
console.log(undefined==0) //false
console.log(undefined!=0) //true

//Comparison and equality check works differently in javascript which will be seen further.The type of comparison shown above is avoided. 

//STRIP CHECK(CHECK WITH "===")

//console.log("2"==2) In this case the answer will be true because here conversion of dataType occur.
console.log("2"===2) //false
//In strip check no conversion of dataType occur.