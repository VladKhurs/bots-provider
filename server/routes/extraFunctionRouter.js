const Router = require('express')
const router = new Router()
const extraFunctionController = require('../controllers/extraFunctionController')

router.get('/all', extraFunctionController.getAll)
router.post('/all_where_tarif', extraFunctionController.fetchAllWhereTarif)

module.exports = router
