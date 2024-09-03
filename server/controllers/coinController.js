const ApiError = require('../error/ApiError')
const {Coin} = require('../models/models')

class CoinController {
    async create(req, res, next) {
      try {
        const {name, logo, userBankId} = req.body
        const bot = await Coin.create({name, logo, userBankId})
        return res.json(bot)
      } catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
      }
    }

    async getOne(req, res, next) {
      try {
        const {userBankId} = req.body
        const bot = await Coin.findOne({where: {userBankId}})
        return res.json(bot)
      }  catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
      }
    }

    async update(req, res, next) {
      try {
        const {userBankId, name, logo} = req.body
        const bot = await Coin.findOne({where: {userBankId}})
        if (!bot) {
            return next(ApiError.badRequest('Бот не найден'))
        }
        bot.name = name
        bot.logo = logo
        await bot.save()
        return res.json(bot)
      }  catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
      }
    }
}

module.exports = new CoinController()
