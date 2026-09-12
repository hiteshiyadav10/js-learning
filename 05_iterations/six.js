const myNums = [1,2,3]

const myTotal = myNums.reduce(function(accumulator,currentval) {
    return accumulator + currentval
},0)//this 0 is given as initial value for the accumulator
console.log(myTotal)//6

//to get value of accumulator at each step-
const myTotal2 = myNums.reduce(function(accumulator,currentval) {
    console.log(`Accumulator: ${accumulator} and CurrentValue: ${currentval}`)
    return accumulator + currentval
},0)
console.log(myTotal2)
//Accumulator: 0 and CurrentValue: 1
//Accumulator: 1 and CurrentValue: 2
//Accumulator: 3 and CurrentValue: 3
//6

//using arrow function-
const myTotal3 = myNums.reduce((acc,currVal) => acc+currVal, 0)
console.log(myTotal3)//6

const shoppingCart = [
   
     {
        itemName: "js course",
        price: 2900
    },
     {
        itemName: "python",
        price: 999
    },
     {
        itemName: "mobile dev course",
        price: 5900
    },
     {
        itemName: "data science course",
        price: 2999
    }
]
const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price, 0)
console.log(priceToPay)//12798