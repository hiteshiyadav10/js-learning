//for
for (let index = 0; index <10; index++) {
    const element = index;
    if(element==8){
        console.log("8 is best number")
    }
    console.log(element)
}//numbers from 0 to 9 gets printed...also, "8 is best number" gets printed before 8

for (let i = 0; i <=10; i++) {
    console.log(`outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
       console.log(`inner loop value: ${j} and inner loop ${i}`)
    }
}

for (let i = 0; i <=10; i++) {
    for (let j = 0; j <= 10; j++) {
       console.log(i + '*' + j + '=' + i*j)
    }
}//prints all the tables from 0 to 10

let array = ["flash", "batman", "superman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
//flash
//batman
//superman

//break and continue
for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log('detected 5')
        break;
    }
    console.log(`value of i is ${index}`)
}
//value of i is 1
//value of i is 2
//value of i is 3
//value of i is 4
//detected 5

for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log('detected 5')
        continue;
    }
    console.log(`value of i is ${index}`)
}//everthing except "value of i is 5" gets printed
