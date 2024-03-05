const accountId=144553
let accountEmail="ayushisingh@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;//undefined agar kisi variable ki value nhi dete hai toh//

//accountId=2// not allowed
console.log(accountId);
accountEmail="sc@gmail.com"
accountPassword="jwkd"
accountCity="Bengaluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*Prefer not to use var because of issue in block scope andfunctional scope */
/*NOTE:-ONLY USE CONST(for constants) AND LET(for variables)*/ 