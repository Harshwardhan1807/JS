const args = process.argv.slice(2); 
const num = parseInt(args[0]);

if (isNaN(num)) {
    console.log("Please provide a valid number. Usage: node script.js <number>");
    process.exit(1);
}

if (num === 0) {
    console.log("Please provide a non-zero number.");
    process.exit(1);
}

console.log(`\nMultiplication Table of ${num} using FOR loop:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

console.log(`\nMultiplication Table of ${num} using WHILE loop:`);
let j = 1;
while (j <= 10) {
    console.log(`${num} x ${j} = ${num * j}`);
    j++;
}

console.log(`\nMultiplication Table of ${num} using DO-WHILE loop:`);
let k = 1;
do {
    console.log(`${num} x ${k} = ${num * k}`);
    k++;
} while (k <= 10);
