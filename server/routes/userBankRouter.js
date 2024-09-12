const Router = require("express")
const router = new Router()
const userBankController = require("../controllers/userBankController")

router.post('/one', userBankController.fetchUserBank)
router.patch('/tarif', userBankController.changeTarif)
router.patch('/pay', userBankController.pay)
router.patch('/deposit', userBankController.deposit)
router.post('/purchased_function', userBankController.setPurchasedFunction)
router.post('/purchased_function/delete', userBankController.deletePurchasedFunction)
router.post('/purchased_function/all', userBankController.fetchPurchasedFunctions)

module.exports = router
