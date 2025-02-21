const ar = [];
for (let i = 1; i <= 10; i++) {
    const element = ar[i];
    console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        const element = ar[j];
        console.log(i, " * ", j, " = ", i * j);
    }
}

for (let j = 1; j <= 10; j++) {
    const element = ar[j];
    if (j == 5) {
        console.log(`Applying break at index ${j}`);
        break
        // continue
    }
    console.log(`Value of j is ${j}`);

}

let k =0
while (k<=10) 
{
    console.log(`Value of k is ${k}`);
    k=k+2
}

do {
    console.log(`Value of k is ${k}`);
    k=k+3
} while (k<=33);