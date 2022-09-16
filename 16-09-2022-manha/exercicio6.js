//calcular taxa de juros
// let montante = 90000;
// let capital = 60000;
// let tempo = 24;

function calculoTaxaDeJuros(montante, capital, tempo) {
    let taxaDeJuros = (montante / capital) ** (1 / tempo) - 1;
    console.log((taxaDeJuros * 100).toFixed(2) + "%")
}

calculoTaxaDeJuros(90000, 60000, 24)