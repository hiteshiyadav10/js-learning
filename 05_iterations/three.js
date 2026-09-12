//for of

//["", "", ""]=> array of strings
//[{}, {}, {}]=> array of objects

const arr = [1,2,3,4,5]
//for (const element of object) {
    
//}=> element here means any iterator and object is the thing on which we have to loop on
for (const num of arr) {
    console.log(num);
}//1 to 5 numbers get printed

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}//all the characters from H to !(including space) gets printed 


//MAPS
//the map object holds key-value pairs and remembers the original insertion order of the keys....any value may be used as either a key or a value.
const map = new Map
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','India')
console.log(map)//Map(3) {
 // 'IN' => 'India',
 // 'USA' => 'United States of America',
 // 'Fr' => 'France'
//}
//India only came once as map stores unique key-value pairs

//loop on maps
for (const key of map) {
    console.log(key)
}
//[ 'IN', 'India' ]
//[ 'USA', 'United States of America' ]
//[ 'Fr', 'France' ]

//if we dont want the output in form of array then we need to destructure it
for (const [key,value] of map) {
    console.log(key,':-',value);
}
//IN :- India
//USA :- United States of America
//Fr :- France
//this will be our required destructured array

//const myObject = {
    //game1 : 'NFS',
    //game2 : 'Spiderman'
//}
//for (const [key,value] of myObject) {
    //console.log(key,':-',value);
//}//myObject is not iterable
//thereby using for-of loops we cant iterated of objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
//for (const key in object) {
  //  if (!Object.hasOwn(object, key)) continue;
    
    //const element = object[key];
//}
for (const key in myObject) {
    console.log(key)
}    
//js
//cpp
//rb
//swift
//therebyu we can iterate of object using for-in loop
for (const key in myObject) {
    console.log(myObject[key])
}//used to get all the values of the keys
//javascript
//C++
//ruby
//swift by apple
for (const key in myObject) {
    console.log(myObject[key])
} 

//for in loop on arrays
const programming= ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key);
}
//0
//1
//2
//3
//4
//this is seen because by default, keeys of arrays are numbers only this is why objects were designed
//to get values-
for (const key in programming) {
    console.log(programming[key]);
}
//js
//rb
//py
//java
//cpp

//for in loop on maps
const map2 = new Map
map2.set('IN','India')
map2.set('USA','United States of America')
map2.set('Fr','France')
map2.set('IN','India')
for (const key in map2) {
    console.log(key)
}//we get NOTHING!
//Thereby, maps afre not iteratable using for-in loops!


//for-each loop
const coding = ["js","ruby","java","python","cpp"]
coding.forEach( function (val) {
    console.log(val);
} )
//js
//ruby
//java
//python
//cpp

//arrow function will also give the same output as seen above
coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)//this also gives the same output

//we can pass and get more than one parameter too!
coding.forEach( (item,index,arr)=>{
     console.log(item,index,arr);
})
//js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

//[{},{},{}]
const myCoding = [
    {
        languageName: "javascript",
        languageFileNmae: "js"
    },
     {
        languageName: "java",
        languageFileNmae: "java"
    },
     {
        languageName: "python",
        languageFileNmae: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item)
})
//{ languageName: 'javascript', languageFileNmae: 'js' }
//{ languageName: 'java', languageFileNmae: 'java' }
//{ languageName: 'python', languageFileNmae: 'py' }
myCoding.forEach( (item) => {
    console.log(item.languageName)
})
//javascript
//java
//python