// Exercício 2: Seleção para um time de vôlei
function selecaoTimeDeVolei(nome, altura){
    if(altura >=205){
        console.log(`${nome}, sua posição será central.`)
    }else if(altura >=196 && altura <205){
        console.log(`${nome}, sua posição será oposto.`)
    }else if(altura >=186 && altura <196){
        console.log(`${nome}, sua posição será ponteiro.`)
    }else if(altura >=180 && altura <185){
        console.log(`${nome}, sua posição será líbero.`)
    }else{
        console.log(`${nome}, infelizmente você foi reprovado.`)
    }
    }
    selecaoTimeDeVolei("Brizza", 155)
    selecaoTimeDeVolei("Gabriela", 168)
    selecaoTimeDeVolei("RuPaul", 200)