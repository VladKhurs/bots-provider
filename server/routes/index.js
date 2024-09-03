const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const userInfoRouter = require('./userInfoRouter')
const userBankRouter = require('./userBankRouter')
const tarifRouter = require('./tarifRouter')
const botRouter = require('./botRouter')
const coinRouter = require('./coinRouter')
const extraFunctionRouter = require('./extraFunctionRouter')

router.use('/user', userRouter)
router.use('/user_info', userInfoRouter)
router.use('/user_bank', userBankRouter)
router.use('/tarif', tarifRouter)
router.use('/bot', botRouter)
router.use('/coin', coinRouter)
router.use('/extra_function', extraFunctionRouter)

module.exports = router
