heros=["batman","hulk","spiderman"]
for (const i of heros) {
    console.log(`Name of hero ${i}`);
}
 const map= new Map()
 map.set('IND',"India")
 map.set('US',"Unites States")
 map.set('FRA',"France")
 console.log(map);
 
 for (const [key,value] of map) {
    console.log(key, ":-", value);
 }

 const languages={
    "js": "JavaScript",
    "cpp": "C++",
    "rb": "Ruby"
 }
for (const key in languages) {
   console.log(`${key} is the short form of ${languages[key]}`);
   }

const coding =["js", "cpp", "python", "java", "fortran"]
// coding.forEach(function(val){
//     console.log(val);
// })
coding.forEach((val)=>{
    console.log(val);
})

// function print(val1){
//     console.log(val1);
// }
// coding.forEach(print)

// coding.forEach((item, index, coding)=>{
//     console.log(item, index, coding);
// })

const mycoding=[
    {
        language:"C++",
        filename:"cpp"
    },
    {
        language:"Python",
        filename:"py"
    },
    {
        language:"Java",
        filename:"java"
    }
]
mycoding.forEach((item)=>{
    console.log(item.language);
})