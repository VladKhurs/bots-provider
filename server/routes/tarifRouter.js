const Router = require('express')
const router = new Router()
const tarifController = require('../controllers/tarifController')

router.post('/one', tarifController.getOne)
router.get('/all', tarifController.getAll)

module.exports = router
