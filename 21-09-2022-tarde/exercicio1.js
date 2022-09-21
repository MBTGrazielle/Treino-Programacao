//Acesso negado:
// menores de 12 anos
//maiores de 65 anos
//portador de patologia cardiaca
//menores de 150m de altura

//acesso permitido
//demais pessoas
//valor para retornar:
//10 reais : se for estudante ou menor de 18 anos
//20 reais: o restante

function acessoMontanhaRussa(idade, portadorDoencaCardiaca, altura, estudante) {
    if (idade < 12 || idade > 65 || portadorDoencaCardiaca === true || altura < 150) {
        console.log('Você teve o acesso negado a Montanha Russa!');
    } else if (estudante === true || idade < 18) {
        console.log('Acesso permitido. O valor a pagar é 10 reais!');
    } else {
        console.log('Acesso permitido. O valor a pagar é de 20 reais!')
    }
}

acessoMontanhaRussa(66, false, 153, false)
