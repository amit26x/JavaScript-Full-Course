const accountId = 12345678
let accountEmail = "amit@gmail.com"
var accountPass = "12345"
accountCity = "Nautanwa"
 let accountState;

// accountID = 2   //not allowed 

accountEmail = "gupta@gmail.com"
accountPass = "12321"
accountCity = "Gorakhpur"
console.log(accountId);

//prefer not to use var because of issue in bock scope and functional scope

console.table([accountEmail, accountId, accountPass, accountCity, accountState])