const {Tarif} = require('../models/models')

class TarifController {
    async create(req, res) {
        const {userName, companyName, companyPhone, companyAddress} = req.body
        const userInfo = await UserInfo.create({userName, companyName, companyPhone, companyAddress})
        return res.json(userInfo)
    }

    async getOne(req, res) {
      const {tarifId} = req.body
      const tarif = await Tarif.findOne({where: {id: tarifId}})
      return res.json(tarif)
    }

}

module.exports = new TarifController()
