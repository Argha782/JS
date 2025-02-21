function sayMyname(){
    console.log("A")
    console.log("R")
    console.log("G")
    console.log("H")
    console.log("A")
}

// sayMyname()

function addnum(num1,num2){
    console.log(num1 + num2)
}
// function addnum(num1,num2){
//     result=num1 + num2
//     console.log("Hitesh");
//     return result
//     console.log("Hitesh"); //won't be printed after result
    
// }
// addnum(3,4)
// addnum(3,"4")
// addnum(3,"a")
// addnum(3,null)

// function loginUsermessage(username){
//     if(username===undefined){           // if(!username){
//         console.log("Plese enter username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUsermessage("Argha"));
// console.log(loginUsermessage(""));
// console.log(loginUsermessage());

function calcprice(...num1)
{
    return num1
}

console.log(calcprice(200,300,400));

const item={
    product: "laptop",
    price: 30000
}

function handleobj(anyitem){            // functions with obj
    console.log(`Product name is ${anyitem.product} and its price is ${anyitem.price}`);
}
handleobj(item)

const newArr=[100,200,200]
function handlearray(anyArr){           // functions with array
//* console.log(anyArr[1]);
    return anyArr[1]
}
//* handlearray(newArr)
console.log(handlearray(newArr));
