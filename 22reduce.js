const num = [1, 2, 3, 4]
myNum=num.reduce(function(acc,curval){
console.log(`accumulator: ${acc} and current value: ${curval}`);
return acc + curval},0)
console.log(myNum);
console.log(num.reduce((acc,cur)=>acc + cur,0));

const shopkart= [
    {
        course: "DSA",
        price: 2999
    },
    {
        course: "Data-Science",
        price: 9999
    },
    {
        course: "Full-Stack",
        price: 11999
    }
]

console.log(shopkart.reduce((acc,item)=>acc + item.price,0));