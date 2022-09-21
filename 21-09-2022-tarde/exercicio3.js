//retornarconceito através das notas

function conceitoNota (nota){
    if(nota >= 9 && nota <= 10){
        console.log("Conceito A")
    }else if(nota >= 8 && nota <= 8.9){
        console.log("Conceito B")
    }else if (nota >= 6 && nota <= 7.9){
        console.log("Conceito C")
    }else if (nota >= 4 && nota <= 5,9){
        console.log("Conceito D")
    }else{
        console.log("Conceito E ")
    }
    }
    conceitoNota(7)