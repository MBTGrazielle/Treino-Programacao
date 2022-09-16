// 129,99 -- 100 %
//  80 -- X
// x aproximado 61, 5

// 100% - 61, 5% = 38, 5 %
//cupom aproximado 38,5%

// 129,99 -- 100 %
//  49,99 -- cupom
// x aproximado 38,5%

let precoDoTenis = 129.99;
let meuDinheiro = 80.00;
let descontoNecessario = precoDoTenis - meuDinheiro;

let cupom = (descontoNecessario * 100) / precoDoTenis;
console.log(cupom);