const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const adminRouter = require('./adminRouter')
const userInfoRouter = require('./userInfoRouter')
const userBankRouter = require('./userBankRouter')
const tarifRouter = require('./tarifRouter')
const botRouter = require('./botRouter')
const coinRouter = require('./coinRouter')
const extraFunctionRouter = require('./extraFunctionRouter')
const historyRouter = require('./historyRouter')

router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/user_info', userInfoRouter)
router.use('/user_bank', userBankRouter)
router.use('/tarif', tarifRouter)
router.use('/bot', botRouter)
router.use('/coin', coinRouter)
router.use('/extra_function', extraFunctionRouter)
router.use('/history', historyRouter)

module.exports = router
