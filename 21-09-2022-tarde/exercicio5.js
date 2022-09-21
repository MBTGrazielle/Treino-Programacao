//retornar nome se foi preenchido!
// const primeiroNome = "Grazielle";
// const sobrenome = "Torres";
// const apelido = "Grazi";



function retornarNome(primeiroNome, sobrenome, apelido) {
    if (!primeiroNome) {
        console.log('Preencha seu primeiro nome');
    } else {
        console.log(`${primeiroNome} ${sobrenome} ${apelido}`);
    }
}

retornarNome("", "Torres", "Grazi")