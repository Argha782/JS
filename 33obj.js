function multipleBy5(num){
    return num*5
}
multipleBy5.power=2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototypeS);

function create_user(username,score)
{
    this.username=username
    this.score=score
}

create_user.prototype.increment=function(){
    this.score++
}
create_user.prototype.printMe=function(){
    console.log(`Price is ${this.score}`);
    
}

const chai=new create_user("chai",15)
const tea=new create_user("tea",25)
chai.printMe()
tea.printMe()












// var a=10

// {
//     var a=20
// }

// let b=a
// {
//     let b=240
// }

// console.log(b);
// console.log(a);
