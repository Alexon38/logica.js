const prompt = require('prompt-sync')({ sigint: true });

let saldo = 0;

function verSaldo() {
    console.log(`\n--- SALDO ATUAL: R$ ${saldo.toFixed(2)} ---`);
}

function depositar() {
    let entrada = prompt("Quanto deseja depositar? ");
    let valor = parseFloat(entrada);
    
    if (!isNaN(valor) && valor > 0) {
        saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado!`);
    } else {
        console.log("Erro: Valor de depósito inválido.");
    }
}

function sacar() {
    let entrada = prompt("Quanto deseja sacar? ");
    let valor = parseFloat(entrada);
    
    if (!isNaN(valor) && valor > 0 && valor <= saldo) {
        saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado!`);
    } else if (valor > saldo) {
        console.log("Erro: Saldo insuficiente.");
    } else {
        console.log("Erro: Valor de saque inválido.");
    }
}

function iniciarSistema() {
    let continuar = true;

    while (continuar) {
        console.log("\n==================");
        console.log("    BANCO NODE    ");
        console.log("==================");
        console.log("1. Ver Saldo");
        console.log("2. Depósito");
        console.log("3. Saque");
        console.log("4. Sair");
        
        let opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1": verSaldo(); break;
            case "2": depositar(); break;
            case "3": sacar(); break;
            case "4":
                console.log("Saindo... Até logo!");
                continuar = false;
                break;
            default:
                console.log("Opção inválida, tente novamente.");
        }
    }
}

iniciarSistema();
