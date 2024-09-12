const ApiError = require('../error/ApiError')
const {History} = require('../models/models')

class HistoryController {
  async getAll(req, res, next) {
    try {
        const history = await History.findAll()
        return res.json(history)
    }
    catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
    }
  }

  async create(req, res, next) {
    try {
      const {date, time, managerLogin, operation, adminId} = req.body
      const historyItem = await History.create({date, time, managerLogin, operation, adminId})
      return res.json(historyItem)
    } catch (e) {
      return next(ApiError.badRequest('Неизвестная ошибка'))
    }
  }
}

module.exports = new HistoryController()
