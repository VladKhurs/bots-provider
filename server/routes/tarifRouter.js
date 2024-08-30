const Router = require('express')
const router = new Router()
const tarifController = require('../controllers/tarifController')

router.get('/one', tarifController.getOne)

module.exports = router
