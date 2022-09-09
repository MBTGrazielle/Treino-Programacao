//indexOf: faz busca e retorna o índice do primeiro elemento que está sendo procurado
//Se não tiver ele retorna -1
//sintaxe: variavel.indexOf('o que procura', posição)// desse jeito ele busca a partir da posição escolhida
//mas pode ser utilizado sem inserir posição:
//sintaxe: variavel.indexOf('o que procura')// desse jeito ele busca na string inteira
// const email = "grazimelo72@gmail.com";
// const email = "grazimelo72135895@gmail.com";
// const email = "g.@gmail.com";
//const email = "g.@gmailcom";
// const email = "g.@gmailcom";

const verificaArroba = email.indexOf('@');
console.log(verificaArroba);
console.log('------------------------------');
console.log(email.includes(".", verificaArroba));

// console.log(email.includes("."));
//diferença do includes() e indexOf()
//includes: busca algo         //indexOf: busca algo
//includes: retorna V ou F     //indexOf: retorna a posição do 1º elemento da string e se não tiver retorna -1

