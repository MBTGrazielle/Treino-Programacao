//programa para calcular e imprimir a soma de todos os números dentro de uma array
const numeros = [2, 3, 4, 6]

//resolução com método reduce
console.log(numeros.reduce((soma, numero) => soma + numero));

//resolução com for
let soma = 0;
for (let numero of numeros) {
    soma = soma + numero;
}
console.log(soma);