const express = require('express')
const routes = express.Router()
routes.use(express.urlencoded({extended:true}))
const Controller = require('../controller/controller')

routes.get('/', Controller.index)
routes.get('/add', Controller.form)
routes.post('/add', Controller.create)
routes.get('/complete/:id', Controller.toComplete)
routes.get('/uncomplete/:id', Controller.toUncomplete)
routes.get('/delete/:id', Controller.deleteTask)

module.exports = routes