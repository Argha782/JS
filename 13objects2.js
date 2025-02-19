// const user = new Object()
// const user = {}
// console.log(user);
// user.id="123abc"
// user.name="Sammy"
// user.isLoggedin=false
// console.log(user);

// const ruser = {
//     email: "some@mail.com",
//     full_name: {
//         userfullname: {
//             first_name: "Dwayne",
//             last_name: "Sammy"
//         }
//     }
// }
// console.log(ruser.full_name.userfullname);

// const obj1= {1: "a", 2: "b"}
// const obj2= {3: "a", 4: "b"}
// const obj3= {5: "a", 6: "b"}
// console.log(Object.assign({},obj1,obj2,obj3));
// obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

// const users = [
//     {
//         id: 1,
//         email: "m@gmail.com"
//     },
//     {
//         id: 2,
//         email: "n@gmail.com"
//     },
//     {
//         id: 3,
//         email: "o@gmail.com"
//     }
// ]
// console.log(users[1].email);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('isLoggedin'));

course= {
    name: "js in hindi",
    price: 999,
    instructor: "hitesh"
}

const{instructor:ins}=course
console.log(ins);

// {
//     "name": "hitesh",
//     "coursename": "dsa",
//     "price": "free"
// }                               // json