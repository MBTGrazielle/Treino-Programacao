const db = require("../models/db")

const getUsuarios = async (request, response) => {
    try {
        let usuarios = await db("usuarios")

        response.status(200).send(usuarios)

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const getUsuariosId = async (request, response) => {
    try {
        const { id } = request.params
        const usuarios = await db("usuarios")

        const usuarioEncontrado = usuarios.find(usuario => usuario.id == id)

        if (!usuarioEncontrado) return response.status(404).send({
            message: `Nenhum usuário encontrado para esse id ${id}`
        })

        response.status(200).send(usuarioEncontrado)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const getUsuariosNome = async (request, response) => {
    try {
        let usuariosJson = await db("usuarios")
        let nomeRequest = request.query.nome.toLowerCase()
        let encontraUsuarioPeloNome = usuariosJson.filter(usuario => usuario.nome.toLowerCase().includes(nomeRequest))
        if (encontraUsuarioPeloNome == undefined) throw new Error("Usuário não encontrado.")
        response.status(200).send(encontraUsuarioPeloNome)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}


module.exports = {
    getUsuarios,
    getUsuariosId,
    getUsuariosNome
}