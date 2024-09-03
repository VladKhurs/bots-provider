const {UserInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class userInfoController {
    async create(req, res) {
        try {
            const {email, userName, companyName, companyPhone, companyAddress} = req.body
            const userInfo = await UserInfo.create({email, userName, companyName, companyPhone, companyAddress})
            return res.json(userInfo)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async getAll(req, res) {
        try {
            const userInfos = await UserInfo.findAll()
            return res.json(userInfos)
        }
        catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async getOne(req, res) {
        try {
            const {email} = req.body
            const userInfo = await UserInfo.findOne({where: {email}})
            if (!userInfo) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            return res.json(userInfo)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }
}

module.exports = new userInfoController()
