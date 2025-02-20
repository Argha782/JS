// const loggedin= true
// if (true) {
//     console.log(`User is Logged in`);
// }
// if (2<=3) {
//     console.log(`User is Logged in`);
// }
// if (2!=2) {
//     console.log(`User is Logged in`);
// }
// if (2=="2") {
//     console.log(`User is Logged in`);
// }
// if (2==="2") {
//     console.log(`User is Logged in`);
// }

// // <, >, <=, >=, ==,!=, ===

// const mnth ="april"

// switch (mnth) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("February");
//         break;
//     case "march":
//         console.log("March");
//         break;
//     case "april":
//         console.log("April");
//         break;
//     default:
//         console.log("Default case match");
//         break;
// }

// userloggedIn = true
// DebitCard = true
// loggedInFromGoogle = true
// loggedInFromEmail = false

// if(userloggedIn && DebitCard && 2!=3){
//     console.log("Allow to buy course");
// }
// if(loggedInFromEmail || loggedInFromGoogle){
//     console.log("Allow to buy course");
// }

const email= "as@mail.com"
const email2= "sas@mail.com"

if (email) {
    console.log("Got user email")
}
else {
    console.log("Don't have user email")
}

//  falsy values --->   false, 0, -0, null, "", undefined, BigInt On, NaN 

//  truthy values --->   "false", "0", "-0", " ", [], {}, function(){}, NaN 

newArr =[]
newObj ={}

if (newArr.length===0) {
    console.log("Array is empty");
}
if (Object.keys(newObj).length===0) {
    console.log("Object is empty");
}

//  Nullish  Coalescing Operator (??): null defined

let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 15
val1= undefined ?? 25 ?? 20
console.log(val1);


// Terniary Operator

let marks = 55

marks>=40 ? console.log("Pass") : console.log("Fail")