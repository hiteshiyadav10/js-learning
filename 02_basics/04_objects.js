const tinderUser = new Object()//SINGLETON OBJECT
//or it can also be declared as "const tinderUser = {}".BUT THIS OBJECT CREATED IS NON-SINGLETON
console.log(tinderUser)//{}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
//object inside object
const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstname : "hiteshi",
            lastname : "yadav"
        }
    }
}
console.log(regularUser.fullName.userFullName.lastname)//yadav

 //combining objects
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {obj1,obj2}
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//not a good method.
const obj4 = Object.assign(obj1, obj2)
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj5 = Object.assign({},obj1, obj2)
console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//both give the same output but adding '{}' is a better method becaouse it means that all values of obj 1 and 2 are going to {}.
//{}=>target and obj1 and obj2 are the sources

//spread
const obj6 = {...obj1,...obj2}
console.log(obj6)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//This is the method we usually use.

//array of objects
const users = [
    {
        id : 1,
        email : "hiteshi@gmail.com"
    },
     {
        id : 2,
        email : "yadav@gmail.com"
    },
     {
        id : 3,
        email : "aashi@gmail.com"
    }
]
console.log(users[1].email)//yadav@gmail.com


console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]   (the given result is in form of  an array)
console.log(Object.values(tinderUser))//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]  (this one gives array inside an array of key vakue pair)

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true


//De-structuring of objects
const course = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor : "hitesh"
}
//instead of doing console.log(course.courseInstructor), we can also extract any value using the following method
const {courseInstructor} = course // const {whatToExtract} = fromWhereToExtract
console.log(courseInstructor);//hitesh
//we can also give new name to the value that is to be extracted
const {courseInstructor : instructor} = course
console.log(instructor)//hitesh (here, instructor is the new name give to courseInstructor)


//JSON API INTRO
       //APIs in form of object(key and value botyh are string only)
//{
//  "name" : "hiteshi",
//  "courseName" : "JS in Hindi",
//  "price" : "free"
//}
      //APIs in form of arrays
//[
// {},
// {},
// {}
//]    