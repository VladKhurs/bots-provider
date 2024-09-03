const Router = require('express')
const router = new Router()
const botController = require('../controllers/botController')

router.post('/one', botController.getOne)
router.post('/', botController.create)
router.patch('/', botController.update)

module.exports = router
