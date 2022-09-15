const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "a"
        },

        {
            resposta: "c",
            correta: "c"
        },

        {
            resposta: "a",
            correta: "a"
        },

        {
            resposta: "b",
            correta: "b"
        },

        {
            resposta: "c",
            correta: "c"
        }
    ]
}

function corrigirProva(prova) {

    let questoesCorretas = 0;
    let notaDaProva = 0;

    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            questoesCorretas++;
        }
    }

    notaDaProva = questoesCorretas * 2;
    console.log(`O aluno ${prova.aluno} acertou ${questoesCorretas} questões e obteve ${notaDaProva} pontos na nota final.`)
}

corrigirProva(prova);