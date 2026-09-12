const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num) => num+10)
console.log(newNums)
//[
//  11, 12, 13, 14, 15,
//  16, 17, 18, 19, 20
//]
//chaining
const newNums1 = myNumbers
           .map((num) => num*10)
           .map((num) => num + 1)//the result of the 1st map will be passed over here....eg- 1st number passed over here will be 10 not 1!
console.log(newNums1)
//[
//  11, 21, 31, 41,  51,
//  61, 71, 81, 91, 101
//]
const newNums2 = myNumbers
           .map((num) => num*10)
           .map((num) => num + 1)
           .filter((num)=> num>=40)

console.log(newNums2) 
//[
//  41, 51,  61, 71,
//  81, 91, 101
//]          