const controller = require("../controllers/calculadoraController")

const express = require("express")

const router = express.Router()

router.get("/somar", controller.getSomar)
router.get("/subtrair", controller.getSubtrair)
router.get("/multiplicar", controller.getMultiplicar)
router.get("/dividir", controller.getDividir)
module.exports = router