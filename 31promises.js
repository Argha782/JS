// const promise1 = new Promise((resolve, reject) => {
//     // Do an Async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })
// promise1.then(() => {
//     console.log("Promise consumed");
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task 2');
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("Async 2 resolved");
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: "!!Phantom!!", email: "phantom@mail.in" })
//     }, 1000)
// })
// promise3.then((user) => {
//     console.log(user);

// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "!!Phantom!!", email: "phantom@mail.in", password: "123@#" })
//         }
//         else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })
// promise4.then((user) => {
//     console.log(user);
//     return user.username
// }).then((myusername) => {
//     console.log(myusername);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected")
// )

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "JavaScript", email: "phantom@mail.in", password: "123@#" })
//         }
//         else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromise5() {
//     try {
//         const response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise5()


// async function allDetails() {
//     try {
//         const response= await fetch('https://api.github.com/users/argha782')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// allDetails()             //  using async

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })          //   using async