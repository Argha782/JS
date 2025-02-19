const mySYm =Symbol("key1")
let stud={
    name:"Argha",
    
    age: 23,
    [mySYm]: "key1",
    sub: "MCA",
    location: "Nagaon",
    employed: false,
    qualifications: ["HSLC", "HS", "BCA"]
}

console.log(stud);
console.log(stud.name);
console.log(stud["qualifications"]);
console.log(stud[mySYm]);

stud.greeting= function(){
    console.log("Hello User");
}
stud.greeting2= function(){
    console.log(`Hello User, ${this.name}`);
}

console.log(stud.greeting());
console.log(stud.greeting2());
stud.email= "arghasaha123@mail.com"
Object.freeze(stud)
stud.email= "sahaargha123@yahoo.com"
console.log(stud);





