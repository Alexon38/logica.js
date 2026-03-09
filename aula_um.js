//crie um programa que pede seu nome e sobrenome e mostre o nome completo usando PROMPT SYNC do NODE.JS.

const input = require('prompt-sync')();

let nome = input("Digite seu nome: ");
let sobrenome = input("Digite seu sobrenome: ");

console.log("Nome completo: " + nome + " " + sobrenome);