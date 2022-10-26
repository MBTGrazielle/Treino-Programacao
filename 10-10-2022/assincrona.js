//síncrona
// function multiplicar(numero1, numero2) {
//     return numero1 + numero2;
// }
// console.log(multiplicar(5, 6));

// //assíncrona
function somar(num1, num2) {
    setTimeout(() => {
        return num1 + num2
    }, 3000)
}
console.log(somar(2, 3))

// console.log('Teste');
// setTimeout(() => console.log('realizado'), 1000)
// setTimeout(() => console.log('por Grazi'), 2000)