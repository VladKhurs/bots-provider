const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const userInfoRouter = require('./userInfoRouter')
const userBankRouter = require('./userBankRouter')
const tarifRouter = require('./tarifRouter')

router.use('/user', userRouter)
router.use('/user_info', userInfoRouter)
router.use('/user_bank', userBankRouter)
router.use('/tarif', tarifRouter)

module.exports = router
