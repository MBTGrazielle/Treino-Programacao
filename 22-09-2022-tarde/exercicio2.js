//programa para retornar separar pares e impares dentro de uma array
//retornar a soma do array par e impar 

const original = [1, 4, 12, 21, 53, 88, 112];

const copiaPar = [];
const copiaImpar = [];

for (let numero of original) {
    if (numero % 2 === 0) {
        copiaPar.push(numero);
    } else {
        copiaImpar.push(numero);
    }
}

//método reduce()
//nomedaArrayparaverificar.reduce((variavelguardavalor,itemporitem)=>variavelguardavalor+itemporitem)

console.log("Soma dos pares: " + copiaPar.reduce((somapar, pares) => somapar + pares))
console.log("Soma dos ímpares: " + copiaImpar.reduce((somaImpar, impares) => somaImpar + impares))
