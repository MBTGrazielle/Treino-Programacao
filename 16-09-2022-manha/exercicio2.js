//Formula juros compostos
//M = C * (1+i) elevado a t

// C = 1000;
// t = 5;
// i = 12, 5 %
//     M ?

let capital = 1000;
let tempo = 5;
let juros = 12.5;
let montante = capital * (1 + juros) ** tempo;
console.log(montante);

