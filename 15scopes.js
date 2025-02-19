let a = 100
const b = 200
var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER scope:",a, b, c);
}
console.log(a, b, c);
console.log(b);
console.log(c);
