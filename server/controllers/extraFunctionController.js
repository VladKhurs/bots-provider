const ApiError = require('../error/ApiError')
const {ExtraFunction} = require('../models/models')

class ExtraFunctionController {
  async getAll(res) {
    try {
        const extraFunctions = await ExtraFunction.findAll()
        return res.json(extraFunctions)
    }
    catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
    }
  }

  async fetchAllWhereTarif(req, res) {
    try {
        const {tarifId} = req.body
        const extraFunctions = await ExtraFunction.findAll({where: {tarifId}})
        return res.json(extraFunctions)
    }
    catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
    }
  }
}

module.exports = new ExtraFunctionController()
