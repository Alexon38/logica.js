const carro = {
    modelo: "Corsa Classic",
    fabricante: "Chevrolet",
    ano: 1996,
    cor: "prata",
    combustivel: "gasolina",
    portas: 4,
};

console.log("--- Detalhes do Veículo ---");

for (let propriedade in carro) {
    console.log("- " + propriedade + ": " + carro[propriedade]);
}