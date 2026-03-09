const prompt = require('prompt-sync')();

let limite = prompt("Até qual número você quer verificar os pares? ");
limite = Number(limite);
let pares = [];
let i = 1;

while (i <= limite) {
    if (i % 2 === 0) {
        pares.push(i);
    }
    i++;
}

console.log("Os números pares encontrados foram: ");
console.log(pares);