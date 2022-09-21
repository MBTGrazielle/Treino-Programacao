//retornar dias da semana 
//função com parametro dia da semana sendo um numero
//1 a 7: iniciando de domingo
//restante:não é um dia da semana válido

function diaDaSemana(diaDaSemana) {
    if (diaDaSemana === 1) {
        console.log('Domingo');
    } else if (diaDaSemana === 2) {
        console.log('Segunda');
    } else if (diaDaSemana === 3) {
        console.log('Terça');
    } else if (diaDaSemana === 4) {
        console.log('Quarta');
    } else if (diaDaSemana === 5) {
        console.log('Quinta');
    } else if (diaDaSemana === 6) {
        console.log('Sexta');
    } else if (diaDaSemana === 7) {
        console.log('Sábado');
    } else {
        console.log('Dia da semana inválido');
    }
}

diaDaSemana(1)