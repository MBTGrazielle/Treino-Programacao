const getSomar = async (request, response) => {
    try {
        let numero1Request = Number(request.query.numero1)
        let numero2Request = Number(request.query.numero2)
        let somar = numero1Request + numero2Request
        response.status(200).send({
            message: `O resultado da sua soma é ${somar}`
        })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

const getSubtrair = async (request, response) => {
    try {
        let numero1Request = Number(request.query.numero1)
        let numero2Request = Number(request.query.numero2)
        let subtracao = numero1Request - numero2Request
        response.status(200).send({
            message: `O resultado da sua subtração é ${subtracao}`
        })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

const getMultiplicar = async (request, response) => {
    try {
        let numero1Request = Number(request.query.numero1)
        let numero2Request = Number(request.query.numero2)
        let multiplicar = numero1Request * numero2Request
        response.status(200).send({
            message: `O resultado da sua multiplicação é ${multiplicar}`
        })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

const getDividir = async (request, response) => {
    try {
        let numero1Request = Number(request.query.numero1)
        let numero2Request = Number(request.query.numero2)
        let dividir = numero1Request / numero2Request
        response.status(200).send({
            message: `O resultado da sua divisão é ${dividir}`
        })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

module.exports = {
    getSomar,
    getSubtrair,
    getMultiplicar,
    getDividir
}