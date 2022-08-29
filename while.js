//while significa enquanto
// aceita incremento
// precisamos declarar uma variável fora (ponto inicial)
//dentro colocamos o ponto final
//imprimir de 0 a 10

// let numero = 0;//ponto inicial
// while (numero <= 10) { //ponto final
//     const listaNumeros = numero;//variavel para guardar a cada vez que passa
//     numero++;//incremento
//     console.log(listaNumeros);
// }

//imprimir os numeros pares entre 0 e 10
// let numero = 0;
// while (numero <= 10) { //ponto final
//     const listaNumeros = numero;//variavel para guardar a cada vez que passa
//     numero += 2;//incremento
//     console.log(listaNumeros);
// }

//imprimir os numeros impares entre 0 e 10
// let numero = 1;
// while (numero <= 10) { //ponto final
//     const listaNumeros = numero;//variavel para guardar a cada vez que passa
//     numero += 2;//incremento
//     console.log(listaNumeros);
// }

//imprima de 10 a 0 (decrescente)
// let numero = 10;
// while (numero >= 0) { //ponto final
//     const listaNumeros = numero;//variavel para guardar a cada vez que passa
//     numero -= 1;//incremento
//     console.log(listaNumeros);
// }

//imprima de 50 a 0, reduzindo 5 a cada passada.
let numero = 50;//ponto inicial
while (numero >= 0) { //ponto final
    const listaNumeros = numero;//variavel para guardar a cada vez que passa
    numero -= 5;//incremento/dizer como eu quero que ele faça
    console.log(listaNumeros);
}