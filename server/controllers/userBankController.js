const ApiError = require("../error/ApiError")
const { UserBank, PurchasedFunction, UserInfo } = require("../models/models")

class UserBankController {

    async fetchUserBank(req, res, next) {
        try {
            const {userId} = req.body
            const userBank = await UserBank.findOne({where: {userId}})
            if (!userBank) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            res.json(userBank)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async changeTarif(req, res, next) {
        try {
            const {userId, tarifId} = req.body
            const userBank = await UserBank.findOne({where: {userId}})
            const userInfo = await UserInfo.findOne({where: {userId}})
            if (!userBank || !userInfo) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            userBank.tarifId = tarifId
            userInfo.tarifId = tarifId
            await userBank.save()
            await userInfo.save()
            res.json(userBank)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async pay(req, res, next) {
        try {
            const {money, userId} = req.body
            const userBank = await UserBank.findOne({where: {userId}})
            if (!userBank) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            if (userBank.money < money) {
                return next(ApiError.badRequest('Не достаточно средств на счете'))
            }
            else {
                userBank.money = userBank.money - money
            }
            await userBank.save()
            res.json(userBank)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async deposit(req, res, next) {
        try {
            const {money, userId} = req.body
            const userBank = await UserBank.findOne({where: {userId}})
            if (!userBank) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            userBank.money += money
            await userBank.save()
            res.json(userBank)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async setPurchasedFunction(req, res, next) {
        try {
            const {userBankId, extraFunctionId} = req.body
            let purchasedFunction = await PurchasedFunction.findOne({where: {userBankId, extraFunctionId}})
            if (purchasedFunction) {
                return next(ApiError.badRequest('Такая дополнительная функция уже куплена'))
            }
            purchasedFunction = await PurchasedFunction.create({
                userBankId, 
                extraFunctionId
            })
            res.json(purchasedFunction)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async fetchPurchasedFunctions(req, res, next) {
        try {
            const {userBankId} = req.body
            let purchasedFunctions = await PurchasedFunction.findAll({where: {userBankId}})
            res.json(purchasedFunctions)
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async deletePurchasedFunction(req, res, next) {
        try {
            const {userBankId, extraFunctionId} = req.body;
            let purchasedFunction = await PurchasedFunction.findOne({where: {userBankId, extraFunctionId}});
            if (!purchasedFunction) {
                return next(ApiError.badRequest('Такая дополнительная функция не найдена'));
            }
            await purchasedFunction.destroy();
            res.json(purchasedFunction);
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'));
        }
    }
}

module.exports = new UserBankController()
