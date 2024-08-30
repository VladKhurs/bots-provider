const { UserBank } = require("../models/models")

class UserBankController {
  async changeTarif(req, res, next) {
    try {
        const {userId, tarifId} = req.body
        const userBank = await UserBank.findOne({where: {userId}})
        if (!userBank) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        userBank.tarifId = tarifId
        await userBank.save()
        res.json(userBank)
    } catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
    }
}
}

module.exports = new UserBankController()
