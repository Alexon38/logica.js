const prompt = require('prompt-sync')();
const senhaCorreta = "1234";
let tentativa;
let historicoDeErros = [];

do {
    tentativa = prompt("digite a senha de acesso: ");

    if (tentativa !== senhaCorreta){
        
    }
}