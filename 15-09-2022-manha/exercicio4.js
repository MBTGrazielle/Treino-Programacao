//imprimir impares de 50 a 0 com unshift
let numeroImpar = [];

for (let numero = 1; numero < 50; numero += 2) {
    numeroImpar.unshift(numero)
}
console.log('Numeros impares em ordem decrescente', numeroImpar)