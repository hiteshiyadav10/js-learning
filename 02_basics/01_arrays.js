//The Array object, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myArr = [0,1,2,3,4,5]//An array can store elements of different dataTypes too! eg-[1,2,true,"hiteshi"]
//Javascript arrays are resizable.
//Arrays are 0-indexed.
console.log(myArr[6]);//undefined
console.log(myArr[5])//5
//Array copy operation creates shallow copies.(Shallow copy of an object is a copy whose properties share the same reference point.) Anything changed in any copy of an array makes change to the original array too!
const myHeros = ["Shaktiman", "Nagraj"]
const myArr2 = new Array(1,2,3,4)//no need of square brackets over here

console.log(myArr2[0])//1


//Array Methods
myArr2.push(6)//simply adds the passed element to the array
console.log(myArr2)//[ 1, 2, 3, 4, 6 ]
myArr2.pop();//last added value will be removed from the array
console.log(myArr2)//[ 1, 2, 3, 4 ]

myArr2.unshift(9)//9 will get added onto 0 index. Its not good to do this command as all other values get shifted due to this which eventually increases load on the computer.
console.log(myArr2)//[ 9, 1, 2, 3, 4 ]
myArr2.shift()//The element placed at 0-index gets removed from the array.
console.log(myArr2)//[ 1, 2, 3, 4 ]
myArr2.shift()
console.log(myArr2)//[ 2, 3, 4 ]

console.log(myArr2.includes(0))//false
console.log(myArr2.indexOf(9))//-1(That is the passed value doesnt exist)
console.log(myArr2.indexOf(3))//1

const newArr = myArr.join()//Adds all elements of an array into a string, separated by the specified separator string.
console.log(newArr)//0,1,2,3,4,5
console.log(myArr)//[ 0, 1, 2, 3, 4, 5 ]
console.log(typeof newArr)//string
console.log(typeof myArr)//object
//join() is used to bind two arrays and the new created array is actaully a string.

//slice, splice
console.log("A ",myArr)//A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)//(stats at 1 and ends at 2 i.e, 3 is not included here)
//slice()=> it basically returns a copy of section of an array.
console.log(myn1)//[ 1, 2 ]
console.log("B ",myArr)//B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("C ",myArr)//C  [ 0, 4, 5 ](The ORIGINAL array got changed over here! The spliced portion got removed)
console.log(myn2)//[ 1, 2, 3 ](Most people think the only difference in slice and splice is of last index value being added or not.BUT THATS NOT TRUE!)
//slice=>does not manuplate the original array at all. Also, the last index is not added in the spliced portion.
//splice=>removes the spliced portion from the original array. Also, the last index is added in the spliced protion.
console.log(myn1)//[ 1, 2 ]
console.log(myn2)//[ 1, 2, 3 ]