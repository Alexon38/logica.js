const input = require('prompt-sync')();

const n1 = Number(input("Nota 1: ")), n2 = Number(input("Nota 2: ")), n3 = Number(input("Nota 3: "));

const media = (n1 + n2 + n3) / 3;

const situacao = media >= 7 ? "Aprovado" : media >= 5 ? "Recuperação" : "Reprovado";

console.log(`Média: ${media.toFixed(1)} - Situação: ${situacao}`);