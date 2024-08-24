const {UserInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class UserInfoController {
    async create(req, res) {
        const {userName, companyName, companyPhone, companyAddress} = req.body
        const userInfo = await UserInfo.create({userName, companyName, companyPhone, companyAddress})
        return res.json(userInfo)
    }

    async getAll(req, res) {
        const userInfos = await UserInfo.findAll()
        return res.json(userInfos)
    }

}

module.exports = new UserInfoController()
