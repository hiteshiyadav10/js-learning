const accountId = 144553
let accountEmail = "hiteshiyadav10@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

//accountId = 2//
accountEmail = "hiteshiy@gmail.com"
accountPassword = "121212"
accountCity = "Jaipur"

/*
prefer not to use  var
beacuse of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
