
const myNum =[1,2,3,4,5,6,7,8,9,10]
console.log(myNum.filter((num) => num > 4));

const books = [
    {title: `Book1`, genre: `History`, publish: 1995, edition: 2002 },    
    {title: `Book2`, genre: `Science`, publish: 2004, edition: 2010 },    
    {title: `Book3`, genre: `Fiction`, publish: 2000, edition: 2004 },    
    {title: `Book4`, genre: `History`, publish: 1981, edition: 2006 },    
    {title: `Book5`, genre: `Romance`, publish: 1990, edition: 2011 }    
]

console.log(books.filter((bk) => bk.publish>=2000));
console.log(books.filter((bk) => bk.publish < 2000 && bk.genre === `History`));
console.log(books.filter((bk) => {return bk.edition > 2005}));             // return required with scope

console.log(myNum.map((num) => num*10+1));
console.log(myNum
            .map((num) => num*10)
            .map((num) => num-1)
            .filter((num) => num >=40));
