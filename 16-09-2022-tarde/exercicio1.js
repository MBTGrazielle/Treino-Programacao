let jogador1 = 3;
let jogador2 = 3;

//o par ganha
if (jogador1 % 2 == 0 && jogador2 % 2 != 0 || jogador2 % 2 == 0 && jogador1 % 2 != 0) {
    console.log('Par ganhou');
} else {
    console.log('Deu empate!');
}

//o impar ganha
if (jogador1 % 2 == 0 && jogador2 % 2 != 0 || jogador2 % 2 == 0 && jogador1 % 2 != 0) {
    console.log('Ímpar ganhou');
} else {
    console.log('Deu empate!');
}

