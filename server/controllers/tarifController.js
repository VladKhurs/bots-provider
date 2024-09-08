const ApiError = require('../error/ApiError')
const {Tarif} = require('../models/models')

class TarifController {
    async create(req, res, next) {
      try {
        const {userName, companyName, companyPhone, companyAddress} = req.body
        const userInfo = await UserInfo.create({userName, companyName, companyPhone, companyAddress})
        return res.json(userInfo)
      } catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
      }
    }

    async getOne(req, res, next) {
      try {
        const {tarifId} = req.body
        const tarif = await Tarif.findOne({where: {id: tarifId}})
        return res.json(tarif)
      }  catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
      }
    }

    async getAll(req, res, next) {
      try {
        const tarifs = await Tarif.findAll()
        return res.json(tarifs)
      }  catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
      }
    }

}

module.exports = new TarifController()
