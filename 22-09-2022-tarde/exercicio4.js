//programa para retornar quantos pets cada pessoa tem
//for tradiconal contador
//if dentro(contador) e fora(retorno pets)

// deve retornar: Sou (nome) tenho (quantidade) (pets)
//detalhe o nome pet deve ser feito um if separado para caso a pessoa tenha 1 pet ou n tenha
//se tiver 1:Sou (nome) tenho (quantidade) (pet)
//se tiver mais de 1:Sou (nome) tenho (quantidade) (pets)
//se não tiver:Sou (nome) tenho não tenho pets

//1. nome da pessoa
//2. quantidade de pets

const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Alane",
        pets: ["Betowen"],
    },
    {
        nome: "Luciana",
        pets: ["Ikki", "Eme"],
    },
    {
        nome: "Gabriela",
        pets: ["Vinicius", "Aitofel", "Taylor", "Apolo", "Nina", "Fiona", "Tonico", "Jerry", "Minimay", "Jove", "Pierre"],
    },
    {
        nome: "Leticia",
        pets: ["Pitty", "BillyBlack", "Gatila", "Tortuguinho"],
    },
    {
        nome: "Grazielle",
        pets: ["Maria", "Lupita"],
    },
];