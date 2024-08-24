const Router = require('express')
const router = new Router()
const tarifController = require('../controllers/tarifController')

router.get('/', tarifController.getOne)

module.exports = router
