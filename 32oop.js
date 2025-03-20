// const user={
//     username: "Argha",
//     logIncount: 8,
//     signedIn: true,
//     getUserDetails:function(){
//         console.log(this);
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);                          //  empty in node environment

function User(username, logIncount, isLoggedIn){
        this.username=username;
        this.logIncount=logIncount;
        this.isLoggedIn=isLoggedIn

        // return this              // optional
}

const user1= User("Saha",6,true)
const user2= User("Das",8,false)

console.log(user1);

const user3=new User("Saha",6,true)         // new is the constructor function call
const user4=new User("Das",8,false)

console.log(user3);
console.log(user4);
