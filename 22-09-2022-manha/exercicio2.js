//fazer um programa que conte quantas letras tem no array
//deve ser impresso no console: Dentro da array existe 1 "A".

const letras = ["A", "a", "B", "C", "E", "e"];

//para contar e mostrar quantas letras tem dentro do array
let contador = 0;

for (let letra of letras) {
    if (letra === "A" || letra === "a") {
        contador++
    }
}
console.log(`Letra encontrada: ${contador}`)

//para retornar quando não encontra e se encontrar imprimir no console
if (contador === 0) {
    console.log('Letra não encontrada!')
} else {
    console.log(`Letra encontrada: ${contador}`);
    console.log("Letra encontrada: " + contador);
    console.log("Letra encontrada:", contador);
}
