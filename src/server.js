
// importar lib e iniciar express
const express = require('express');
const server = express()
const path = require('path');
const pages = require('./pages.js');


server
//utilizar body do require
.use(express.urlencoded({ extended: true }))
//utilizando arquivo estatico
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('./save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(5500)