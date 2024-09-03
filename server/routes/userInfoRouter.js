const Router = require('express')
const router = new Router()
const userInfoController = require('../controllers/userInfoController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), userInfoController.create)
router.get('/all', userInfoController.getAll)
router.post('/one', userInfoController.getOne)
module.exports = router
