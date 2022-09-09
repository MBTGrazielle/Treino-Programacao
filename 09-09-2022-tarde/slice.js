//slice: significa fatia/ faz uma cópia do original sem alterá-lo
//sintaxe:
//variavel.slice(índice inicial, índice que não irá aparecer)
//Obs: Não é obrigatório utilizar os índices, se o slice() estiver vazio ele entende que precisa copiar tudo.

const frase = "Amanhã começa o projeto guiado!"

// console.log(frase.slice());// faz cópia de tudo 
// console.log('-----------------------');
// console.log(frase.slice(7));// faz cópia a partir do caractere do índice 7
// console.log('-----------------------');
// console.log(frase.slice(20))// faz cópia a partir do caractere do índice 20
// console.log('-----------------------');
// console.log(frase.slice(11, -5)); // faz cópia a partir do caractere do índice 11 e para no -5(de trás pra frente)
// console.log('-----------------------');
// console.log(frase.slice(37))// retorna string vazia porque não existe essa posição
// console.log('-----------------------');
// console.log(frase.slice(-1))//faz cópia de trás pra frente
// console.log('-----------------------');
// console.log(frase.slice(-15))//faz cópia de trás pra frente
// console.log('-----------------------');
// console.log(frase.slice(11, 15));// faz cópia a partir do caractere do índice 11 e para no 11
// console.log('-----------------------');

const cidadeEstado = "Salvador-BA";

console.log(cidadeEstado.slice(-2));//ideal para rodar de forma genérica
console.log(cidadeEstado.slice(9));//retorna a partir da posição escolhida
console.log(cidadeEstado.slice(0, -3));
console.log(cidadeEstado.slice(0, 8));