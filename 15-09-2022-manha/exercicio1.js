//imprimir dentro da array separando numero par e numero impar com push
let numeroPar = [];
let numeroImpar = [];
for (let numero = 0; numero <= 50; numero++) {
    if (numero % 2 == 0) {
        numeroPar.push(numero);
    } else {
        numeroImpar.push(numero)
    }
}
console.log(numeroPar)
console.log(numeroImpar)