// Fazer uma função para calcular IMC.
function calcularIMC(nome, peso, altura) {
    let imc = (peso / (altura ** 2)).toFixed(1) // elevando ao quadrado
    if (imc >= 30) {
        console.log(nome, "seu IMC é:", imc, ",você está com obesidade!")
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log(nome, "seu IMC é:", imc, ",você está com sobrepeso!")
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(nome, "seu IMC é:", imc, ",você está com peso ideal!")
    } else {
        console.log(nome, "seu IMC é:", imc, ",você está abaixo do peso ideal!")
    }

}
calcularIMC("Gabriela", 85, 1.68)
calcularIMC("Grazielle", 63, 1.58)
calcularIMC("Brizza", 61, 1.55)
calcularIMC("Alane", 68, 1.56)
calcularIMC("Leticia", 63, 1.62)
calcularIMC("Priscila", 66, 1.65)
