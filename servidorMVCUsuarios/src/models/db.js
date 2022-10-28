const db = (usuarios) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuarios === "usuarios") {
                return resolve(require("./usuariosModel.json"))
            }
            return reject(new Error(`Não existe os usuários ${usuarios} na nossa ficha.`))
        }, 1500)
    })
}

module.exports = db