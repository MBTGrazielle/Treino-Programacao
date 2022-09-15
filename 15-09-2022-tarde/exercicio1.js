//Condicionais: if else
//aplicação para um jogo (pedra,papel e tesoura) com duas pessoas
//papel ganha da pedra
//pedra ganha de tesoura
//tesoura ganha de papel

let gabriela = "papel"
let pricila = "pedra"

if (gabriela === "pedra" && pricila === "papel" || pricila === "pedra" && gabriela === "papel") {
    console.log('Papel ganhou!');
} else if (gabriela === "pedra" && pricila === "tesoura" || pricila === "pedra" && gabriela === "tesoura") {
    console.log('Pedra ganhou!');
} else if (gabriela === "pedra" && pricila === "pedra" || pricila === "pedra" && gabriela === "pedra") {
    console.log('Deu empate!');
} else if (gabriela === "tesoura" && pricila === "papel" || pricila === "tesoura" && gabriela === "papel") {
    console.log('Tesoura ganhou!');
} else if (gabriela === "tesoura" && pricila === "tesoura" || pricila === "tesoura" && gabriela === "tesoura") {
    console.log('Deu empate!');
} else {
    console.log('Deu empate!');
}
