const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const { TARITFS } = require('../utils/consts')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    userName: { type: DataTypes.STRING, allowNull: false },
    companyName: { type: DataTypes.STRING, allowNull: false },
    companyPhone: { type: DataTypes.STRING, allowNull: false },
    companyAddress: { type: DataTypes.STRING, allowNull: false },
})

const UserInfo = sequelize.define('user_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Tarif = sequelize.define('tarif', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    period: {type: DataTypes.INTEGER},
    limits: {type: DataTypes.STRING, allowNull: true},
    functions: {type: DataTypes.STRING, allowNull: true},
})

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

Tarif.hasMany(User)
User.belongsTo(Tarif)

module.exports = {
    User,
    UserInfo,
    Tarif
}
