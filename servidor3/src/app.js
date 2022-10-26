const express = require("express")
const calculadoraRotas = require("./routes/calculadoraRoutes")
const app = express()

app.use(express.json())

app.use("/calculadora", calculadoraRotas)

module.exports = app