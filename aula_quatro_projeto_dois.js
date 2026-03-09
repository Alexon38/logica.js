const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pessoa = {};

console.log("--- Cadastro de Pessoa ---");

rl.question("Digite o nome: ", (nome) => {
    pessoa.nome = nome;

    rl.question("Digite a idade: ", (idade) => {
        pessoa.idade = idade;

        rl.question("Digite o e-mail: ", (email) => {
            pessoa.email = email;

            console.log("\n--- Dados Salvos com Sucesso ---");
            Object.entries(pessoa).forEach(([chave, valor]) => {
                console.log(`- ${chave.toUpperCase()}: ${valor}`);
            });

            rl.close();
        });
    });
});
