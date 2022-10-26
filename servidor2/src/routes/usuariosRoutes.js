const controller = require("../controllers/usuariosController")

const express = require("express")

const router = express.Router()

router.get("/", controller.getUsuarios)
router.get("/pesquisar/", controller.getUsuariosNome)
router.get("/:id/", controller.getUsuariosId)

module.exports = router