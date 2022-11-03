require('dotenv').config() // invoca o dotenv
const express = require("express") //invoca o express
const cors = require("cors") //invoca o cors
const app = express() // executa o express
const database = require('./database/mongoConfig') //invoca o arquivo mongoConfig da database
app.use(express.json()) // transformar tudo em json *
app.use(cors()) //executar cors
database.connect() //executando a função connect do arquivo mongoConfig
module.exports = app //exporta o arquivo app.js