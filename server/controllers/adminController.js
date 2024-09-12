const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Admin } = require('../models/models')

const generateJwt = (id, login) => {
    try {
        return jwt.sign(
            {id, login},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
    } catch (e) {
        return next(ApiError.badRequest('Неизвестная ошибка'))
    }
}

class AdminController {
    async login(req, res, next) {
        try {
            const {login, password} = req.body
            const user = await Admin.findOne({where: {login}})
            if (!user) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            if (password !== user.password) {
                return next(ApiError.badRequest('Указан неверный пароль'))
            }
            const token = generateJwt(user.id, user.login)
            return res.json({token})
        } catch {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.login)
            return res.json({token})
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async adminHistory(req, res, next) {
        try {
            const {login} = req.body
            const user = await Admin.findOne({where: {login}})
            if (!user) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            return res.json({user})
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }
}

module.exports = new AdminController()
