const Router = require('express')
const router = new Router()
const UserInfoController = require('../controllers/UserInfoController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), UserInfoController.create)
router.get('/', UserInfoController.getAll)

module.exports = router
