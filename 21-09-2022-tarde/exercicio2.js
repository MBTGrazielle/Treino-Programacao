//Vogal Maiuscula
//Vogal Minuscula
//Numero -0 a 9
//restante é letra consoante


function classificarCaracter(caracter) {
    if (caracter === "A" || caracter === "E" || caracter === "I" || caracter === "O" || caracter === "U") {
        console.log('É vogal maiúscula!');
    } else if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
        console.log('É vogal minúscula!');
    } else if (caracter >= 0 && caracter < 10) {
        console.log('É número!');
    } else {
        console.log('É consoante!');
    }
}

classificarCaracter("a")