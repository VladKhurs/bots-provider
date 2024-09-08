const ApiError = require('../error/ApiError')
const {Bot} = require('../models/models')

class BotController {
    async create(req, res, next) {
      try {
        const {name, logo, userBankId} = req.body
        const bot = await Bot.create({name, logo, userBankId})
        return res.json(bot)
      } catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
      }
    }

    async getOne(req, res, next) {
      try {
        const {userBankId} = req.body
        const bot = await Bot.findOne({where: {userBankId}})
        return res.json(bot)
      }  catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
      }
    }

    async update(req, res, next) {
      try {
        const {userBankId, name, logo} = req.body
        const bot = await Bot.findOne({where: {userBankId}})
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

module.exports = new BotController()
