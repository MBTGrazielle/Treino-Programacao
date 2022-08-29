// array é representado [ ]// lista de coisas

//let grupodeEstudos = ['Alane', 'Grazielle', 'Priscila', 'Brizza'];
//length: tamanho(quantidade) - 1 = 3
//  índice posição              //   0   1    2   3
//let idadeParticipantesgrupoEstudo = [25, 29, 30, 29];

//let somaIdades = idadeParticipantesgrupoEstudo[0] + idadeParticipantesgrupoEstudo[3];
// some as idades = 25 + 29 =54
// let grupodeEstudos = ['Alane', 'Grazielle', 'Priscila', 'Brizza'];
// let idadeParticipantesgrupoEstudo = [25, 29, 30, 29];

// console.log('Segue a lista de idades:');
// console.log(`A idade de ${grupodeEstudos[0]} é ${idadeParticipantesgrupoEstudo[0]}`);
// console.log(`A idade de ${grupodeEstudos[1]} é ${idadeParticipantesgrupoEstudo[1]}`);
// console.log(`A idade de ${grupodeEstudos[2]} é ${idadeParticipantesgrupoEstudo[2]}`);
// console.log(`A idade de ${grupodeEstudos[3]} é ${idadeParticipantesgrupoEstudo[3]}`);

// 1 forma de acessar posição na array
let grupodeEstudos = ['Alane', 'Grazielle', 'Priscila', 'Brizza'];
let idadeParticipantesgrupoEstudo = [25, 29, 30, 29];
console.log('Em 2023 as idades serão: ');
for (let idade of idadeParticipantesgrupoEstudo) {
    const listaIdades = idade + 1;
    idade++;
    //console.log(`Em 2023 as meninas terão: ${listaIdades}`);
    //console.log("Em 2023 as meninas terão:" + listaIdades);
    //console.log("Em 2023 as meninas terão:");
    console.log(listaIdades);
}



// 2 forma de acessar posição na array
// console.log(idadeParticipantesgrupoEstudo[0])
// console.log(idadeParticipantesgrupoEstudo[3]);


// 3 forma de acessar posição na array
//console.log("A idade das meninas em 2023 será:" + idadeParticipantesgrupoEstudo);


//4 forma de acessar posição na array
//console.log(idadeParticipantesgrupoEstudo);




