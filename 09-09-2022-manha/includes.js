//para pesquisar assuntos JavaScript: MDN Mozzila 
//JavaScript: url= https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
//Todos assuntos Front, Back etc: url= https://developer.mozilla.org/pt-BR/
//Métodos de String: url= https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods

//sintaxe: é a forma de escrever um código
//includes()= verifica se existe string dentro de outra string, retornando verdadeiro ou falso
//sintaxe: str.includes(searchString[, position])
//str(nome da variável)
//searchString(o que você buscar)
//position (posição/índice)


const frase = "Eu moro em Salvador";
//descobrir o tamanho de uma variável string, quantos caracteres:
// console.log(frase.length);//(length é uma propriedade que retorna tamanho)
// console.log('--------------------------------------');

//para encontrar algo dentro da variável sem utilizar a posição(índice):
// console.log(frase.includes('Salvador'));//sem posição ele entende que precisa começar a busca pela posição 0.
// console.log('--------------------------------------');

//para encontrar algo dentro da variável sem utilizar a posição(índice):
// console.log(frase.includes('Salvador', 11));//com posição ele entende que precisa começar da posição escolhida.
// console.log('--------------------------------------');

//diferenciando palavras com letras maiúscula e minúscula:
// console.log(frase.includes('salvador'));//sem posição ele entende que precisa começar a busca pela posição 0.
// console.log('--------------------------------------');
// console.log(frase.includes('salvador', 11));//com posição ele entende que precisa começar da posição escolhida.

//para retornar algo se for verdadeiro ou falso com if/else:
// let verifica = frase.includes('Salvador')
// if (verifica == true) {
//     console.log('Existe na frase.')
// } else {
//     console.log('Não existe na frase.')
// }

//verifica e retorna se é V ou F
// let verifica1 = frase.includes('Salvador')
// console.log(verifica1);

//verfica e retorna o valor da frase inteira
// let verifica = frase.includes('salvador')
// if (verifica == true) {
//     console.log(frase)
// } else {
//     console.log('Não existe na frase.')
// }
