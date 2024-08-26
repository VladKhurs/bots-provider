const {UserInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class UserInfoController {
    async create(req, res) {
        const {email, userName, companyName, companyPhone, companyAddress} = req.body
        const userInfo = await UserInfo.create({email, userName, companyName, companyPhone, companyAddress})
        return res.json(userInfo)
    }

    async getAll(req, res) {
        const userInfos = await UserInfo.findAll()
        return res.json(userInfos)
    }

    async getOne(req, res) {
        const {email} = req.body
        const userInfo = await UserInfo.findOne({where: {email}})
        if (!userInfo) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        return res.json(userInfo)
    }

    async changeTarif(req, res, next) {
        try {
            const {email, tarifId} = req.body
            const userInfo = await UserInfo.findOne({where: {email}})
            if (!userInfo) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            userInfo.tarifId = tarifId
            await userInfo.save()
            res.json(userInfo)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }
}

module.exports = new UserInfoController()
