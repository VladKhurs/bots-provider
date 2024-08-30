const Router = require("express")
const router = new Router()
const userBankController = require("../controllers/userBankController")

router.patch('/tarif', userBankController.changeTarif)

module.exports = router
