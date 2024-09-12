const Router = require('express')
const router = new Router()
const historyController = require('../controllers/historyController')

router.post('/', historyController.create)
router.get('/all', historyController.getAll)

module.exports = router
