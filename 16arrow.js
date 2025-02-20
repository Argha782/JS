const user = {
    name: "Argha",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.name="Priya"
user.welcomeMessage()

// console.log(this);

// function tea(){
//     username="Hitesh"
//     console.log(this.username);
// }
// tea()

// const tea= function(){
//     username="Hitesh"
//     console.log(this.username);
// }
// tea()

const tea= ()=>{
    username="Hitesh"
    console.log(this.username);
}
tea()

// const addsum= (num1,num2) => {
//     return num1+num2
// }

// const addsum= (num1,num2) => num1+num2
const addsum= (num1,num2) => (num1+num2)
console.log(addsum(4,5));
