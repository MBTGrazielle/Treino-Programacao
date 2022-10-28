const express = require("express")
const aplicativoRotas = require("./routes/aplicativoRoutes")
const app = express()

app.use(express.json())

app.use("/app", aplicativoRotas)

module.exports = app