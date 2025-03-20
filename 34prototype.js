// let myName= "Argha    "
// console.log(myName.length);
// Object.prototype.truelength=function(){
//     console.log(`The true length is: ${this.trim().length}`);
//  }
// myName.truelength()
 
const myHero=["thor","hulk"]

const heroPower={
    thor: "hammer",
    hulk: "smash"
}
Object.prototype.saha=()=>{
    console.log(`It is present in all objects`);
}
// Array.prototype.saha=()=>{
//     console.log(`It is present in all objects`);
// }
myHero.saha()
heroPower.saha()            // can't access the fucntion if it's an arrays


//*****************************INHERITANCE*************************************

const user={
    name: "argha",
    email: "phantom123@mail.com"
}
const teacher={
    makeVideo: true
}
const tsupport={
    isAvailable: false,
    __proto__:teacher
}
teacher.__proto__=user

//*********mordern syntax */

Object.setPrototypeOf(tsupport,teacher)