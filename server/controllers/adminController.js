const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Admin } = require('../models/models')

const generateJwt = (id, email) => {
    try {
        return jwt.sign(
            {id, email},
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
            const {email, password} = req.body
            const user = await Admin.findOne({where: {email}})
            if (!user) {
                return next(ApiError.badRequest('Пользователь не найден'))
            }
            if (password !== user.password) {
                return next(ApiError.badRequest('Указан неверный пароль'))
            }
            const token = generateJwt(user.id, user.email)
            return res.json({token})
        } catch {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email)
            return res.json({token})
        } catch (e) {
            return next(ApiError.badRequest('Неизвестная ошибка'))
        }
    }
}

module.exports = new AdminController()
