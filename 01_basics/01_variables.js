const accountId = 144553
let accountEmail = "hiteshi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState
//accountId = 2 //rewritting of a constant entity isnt allowed.

accountEmail = "hy@hy.com"
accountPassword = "212122"
accountCity = "Bengaluru"


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope

A variable can be declared without using keywords too!
eg-accountCity
but its a really BAD prectice.

accountState will give "undefined" as result on printing.
*/
