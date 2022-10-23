const express = require('express')
const router = express.Router()

const characterController = require('../controllers/characterController')

//rutas
router.get('/', characterController.home)
router.get('/characters', characterController.mostrar)
router.get('/characters/create', characterController.create)
router.post('/characters/create', characterController.post)
router.get('/characters/editar/:_id', characterController.editar)
router.put('/characters/editar/:_id', characterController.edicion)
router.get('/characters/borrar/:_id', characterController.borrar)
router.get('/characters/detalle/:_id', characterController.detalle)


module.exports = router