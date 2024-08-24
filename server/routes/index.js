const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const userInfoRouter = require('./userInfoRouter')
const tarifRouter = require('./tarifRouter')

router.use('/user', userRouter)
router.use('/user_info', userInfoRouter)
router.use('/tarif', tarifRouter)

module.exports = router
