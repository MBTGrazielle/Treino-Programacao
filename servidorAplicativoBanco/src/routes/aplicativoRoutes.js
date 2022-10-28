const controller = require("../controllers/aplicativoController")

const express = require("express")

const router = express.Router()

router.get("/usuarios", controller.getUsuarios)
router.get("/usuarios/acesso/", controller.getAcesso)
router.get("/usuarios/:id", controller.getUsuariosId)
router.post("/usuarios/criar", controller.criarUsuario)
router.patch("/usuarios/alterar/", controller.alterarSenha)
router.delete("/usuarios/deletar/:id", controller.deletarUsuario)

module.exports = router