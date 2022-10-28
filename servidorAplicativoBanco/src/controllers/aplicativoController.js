const db = require("../models/db")

const getUsuarios = async (request, response) => {
    try {
        let usuarios = await db("aplicativo")

        response.status(200).send(usuarios)

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const getAcesso = async (request, response) => {
    try {
        let appBancoJson = await db("aplicativo")
        let nomeRequest = request.query.nome
        let senhaRequest = request.query.senha
        let encontraUsuarioPeloNome = appBancoJson.find(usuario => usuario.nome === nomeRequest)
        if (!nomeRequest) throw new Error("O nome é obrigatório.")
        if (encontraUsuarioPeloNome == undefined) throw new Error("O usuário não foi encontrado no nosso banco ou está incorreto.")
        if (!senhaRequest) throw new Error("A senha é obrigatória.")
        if (encontraUsuarioPeloNome.senha !== senhaRequest) throw new Error("A senha está incorreta.")
        if (encontraUsuarioPeloNome.nome === nomeRequest && encontraUsuarioPeloNome.senha === senhaRequest) return response.status(200).send({ message: "Login efetuado com sucesso!" })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

const getUsuariosId = async (request, response) => {
    try {
        const { id } = request.params
        const usuarios = await db("aplicativo")

        const usuarioEncontrado = usuarios.find(usuario => usuario.id == id)

        if (!usuarioEncontrado) return response.status(404).send({
            message: `Nenhum usuário encontrado para esse id ${id}`
        })

        response.status(200).send(usuarioEncontrado)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const criarUsuario = async (request, response) => {
    const usuarios = await db("aplicativo")
    const {
        nome, senha
    } = request.body

    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O nome é obrigatorio` })
    }

    if (!senha || senha.trim() === "") {
        return response.status(400).send({ message: `A senha é obrigaria` })
    }

    const nomeExiste = usuarios.some(usuario => usuario.nome === nome)

    if (nomeExiste === true) {
        return response.status(409).send({ message: `O usuário ${nome} já existe` })
    }

    const novoUsuario = {
        id: usuarios.length,
        nome, senha
    }

    usuarios.push(novoUsuario)

    response.status(201).send({ message: "Usuário cadastrado com sucesso", novoUsuario })
}

const alterarSenha = async (request, response) => {
    try {
        let usuarios = await db("aplicativo")
        const nomeRequest = request.body.nome
        let novaSenha = request.body.senha
        filtrarUsuario = usuarios.find(usuario => usuario.nome === nomeRequest)
        if (filtrarUsuario == undefined) throw new Error("Usuário não encontrado")
        filtrarUsuario.senha = novaSenha
        response.status(200).json(
            [
                {
                    "mensagem": "Senha atualizada com sucesso",
                }
            ]
        )
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const deletarUsuario = async (req, res) => {
    const { id } = req.params

    try {
        const usuario = await db("aplicativo")
        const usuarioIndice = usuario.findIndex(usuario => usuario.id == id)

        if (usuarioIndice === -1) return res.status(404).send({
            message: "Usuário não encontrada."
        })

        usuario.splice(usuarioIndice, 1)

        res.status(200).send({ message: "Usuário deletado com sucesso!" })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


module.exports = {
    getUsuarios,
    getAcesso,
    getUsuariosId,
    criarUsuario,
    alterarSenha,
    deletarUsuario
}