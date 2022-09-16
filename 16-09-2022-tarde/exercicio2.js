//DOMINÓ-verificar se é bucha ou não e qual é a bucha

// function verificaBucha(ladoA, ladoB) {
//     if (ladoA == ladoB) {
//         console.log('É bucha!');
//     } else {
//         console.log('Não é bucha!');
//     }
// }

// verificaBucha(1, 1);

function verificaBucha(ladoA, ladoB) {
    if (ladoA == 0 && ladoB == 0) {
        console.log('É bucha de branco!');
    } else if (ladoA == 1 && ladoB == 1) {
        console.log('É bucha de Ás!');
    } else if (ladoA == 2 && ladoB == 2) {
        console.log('É bucha de Duque!');
    } else if (ladoA == 3 && ladoB == 3) {
        console.log('É bucha de Terno!');
    } else if (ladoA == 4 && ladoB == 4) {
        console.log('É bucha de Quadra!');
    } else if (ladoA == 5 && ladoB == 5) {
        console.log('É bucha de Quina!');
    } else if (ladoA == 6 && ladoB == 6) {
        console.log('É bucha de Sena!');
    } else {
        console.log('Não é bucha!');
    }
}
verificaBucha(5, 5)
verificaBucha(4, 4)
verificaBucha(3, 3)
verificaBucha(2, 2)
verificaBucha(1, 1)
verificaBucha(6, 6)
verificaBucha(0, 0)
verificaBucha(5, 4)