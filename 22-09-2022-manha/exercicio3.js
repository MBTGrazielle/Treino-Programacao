//programa para achar o índice do número 10
const numeros1 = [54, 22, 14, 87, 284]

// for tradicional com variável fora
// let resposta = -1;
// for (let i = 0; i < numeros1.length; i++) {
//     let numero = numeros1[i];
//     if (numero == 10) {
//         resposta = i;
//         break;
//     }
// }
// console.log(resposta);
//

//if else sem variável fora
for (let i = 0; i < numeros1.length; i++) {
    let numero = numeros1[i];
    if (numero == 10) {
        resposta = i;
        break;
    } else {
        resposta = -1;
    }
}
console.log(resposta);

//método:
//find()+indexOf, indexOf(),filter+indexOf
console.log(numeros1.indexOf(10));



