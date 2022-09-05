//for of (muito bom para listas)
//não precisa de incremento porque ele já entende que precisa percorrer item por item
// let nomesParticipantesgrupodeEstudos = ['Alane', 'Grazielle', 'Priscila'];
// 1ª passada:[0]
// let nome= Alane;
// 2ª passada:[1]
// let nome=Grazielle;
// 3ª passada:[2]
// let nome= Priscila

// for (let nome of nomesParticipantesgrupodeEstudos) {
//     const listanome = nome;
//     nome++
//     console.log(listanome);
// }

//imprimir multiplicando por 2
//let listanumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numero of listanumeros) {
//     const imprimenumero = numero * 2;
//     console.log(imprimenumero);
// }

//imprimir diminuindo 1
let listanumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of listanumeros) {
    const imprimenumero = numero - 1;
    console.log(imprimenumero);
}
