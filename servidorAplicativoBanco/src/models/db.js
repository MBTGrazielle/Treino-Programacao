const db = (aplicativo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (aplicativo === "aplicativo") {
                return resolve(require("./aplicativoModel.json"))
            }
            return reject(new Error(`Não existe o aplicativo no nosso banco.`))
        }, 1500)
    })
}

module.exports = db