//programa para retornar apenas os pares dentro de uma array
//push
//if
//for
const original = [1, 4, 12, 21, 53, 88, 112];

const copiaPar = [];
const copiaImpar = [];

function parImpar(listaPar, listaImpar) {
    for (let numero of original) {
        if (numero % 2 === 0) {
            listaPar.push(numero);
        } else {
            listaImpar.push(numero);
        }
    }

    console.log(copiaPar);
    console.log(copiaImpar);
}

parImpar(copiaPar, copiaImpar);