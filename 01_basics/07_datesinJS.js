//Date object encapsulate an integral number that represents  milliseconds since the midnight at the beginning of January 1,1970.
let myDate = new Date()
console.log(typeof myDate)//object
console.log(myDate)//2026-08-15T14:27:14.659Z
console.log(myDate.toString())//Sat Aug 15 2026 14:29:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Sat Aug 15 2026
console.log(myDate.toISOString())//2026-08-15T14:36:55.116Z
console.log(myDate.toJSON())//2026-08-15T14:36:55.116Z
console.log(myDate.toLocaleDateString())//8/15/2026
console.log(myDate.toLocaleString())//8/15/2026, 2:36:55 PM

//declaring a new date
let myCreatedDate = new Date(2006,7,10)
console.log(myCreatedDate.toDateString())//Thu Aug 10 2006
//Months in JS are started from 0.
let myCreatedDate2 = new Date(2006,7,10,5,9,8)
console.log(myCreatedDate2.toLocaleString())//8/10/2006, 5:09:08 AM
let myCreatedDate3 = new Date("2026,7,10")
console.log(myCreatedDate3.toLocaleString())//7/10/2026, 12:00:00 AM
//Months here are not started from 0. 
//In India however dd-mm-yy is followed.
let myCreatedDate4 = new Date("10-08-2026")
console.log(myCreatedDate4.toLocaleString())//10/8/2026, 12:00:00 AM

//Time Stamps
let myTimeStamp = Date.now()
console.log(myTimeStamp)//1786885612005(its the milliseconds from 1 January,1970)
console.log(myCreatedDate4.getTime())//1791417600000(these are milliseconds from 1 January,1970 to (myCreatedDate4)

//conversion of date.now() to seconds
console.log(Date.now()/1000)//1786885990.694
console.log(Math.floor(Date.now()/1000))//1786886034
//as date.now() gives answer in milliseconds so to convert it into seconds we divide it by 1000 and math.floor() is used to get left most approximate value.

let newDate = new Date()
console.log(newDate)//2026-08-16T13:16:37.086Z
console.log(newDate.getFullYear())//2026
console.log(newDate.getMonth())//7(after 0-based-indexing)
console.log(newDate.getDay())//0(it represents 'Sunday')
console.log(newDate.getMonth()+1)//8(to get the desired month)

console.log(`The date today is ${newDate.getDate()}`)//The date today is 16

//Customise the output of locale strings-
newDate.toLocaleString('default',{
    weekday: "long"
})
