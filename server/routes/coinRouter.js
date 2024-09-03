const Router = require('express')
const router = new Router()
const coinController = require('../controllers/coinController')

router.post('/one', coinController.getOne)
router.post('/', coinController.create)
router.patch('/', coinController.update)

module.exports = router
