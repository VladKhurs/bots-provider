const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

const UserInfo = sequelize.define('user_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: {type: DataTypes.STRING, unique: true,},
    userName: { type: DataTypes.STRING, allowNull: false },
    companyName: { type: DataTypes.STRING, allowNull: false },
    companyPhone: { type: DataTypes.STRING, allowNull: false },
    companyAddress: { type: DataTypes.STRING, allowNull: false },
})

const Tarif = sequelize.define('tarif', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    period: {type: DataTypes.INTEGER},
    limits: {type: DataTypes.STRING, allowNull: true},
    functions: {type: DataTypes.STRING(1024), allowNull: true},
})

const ExtraFunction = sequelize.define('extra_function', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER, allowNull: true},
    name: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: true},
})

const UserBank = sequelize.define('user_bank', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    money: {type: DataTypes.INTEGER, allowNull: true},
    startDate: {type: DataTypes.DATE, allowNull: true},
    endDate: {type: DataTypes.DATE, allowNull: true},
})

const PurchasedFunction = sequelize.define('purchased_function', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Bot = sequelize.define('bot', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    logo: {type: DataTypes.STRING},
})

const Coin = sequelize.define('coin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    logo: {type: DataTypes.STRING},
})

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

Tarif.hasMany(ExtraFunction)
ExtraFunction.belongsTo(Tarif)

Tarif.hasMany(UserInfo)
UserInfo.belongsTo(Tarif)

Tarif.hasMany(UserBank)
UserBank.belongsTo(Tarif)

User.hasOne(UserBank)
UserBank.belongsTo(User)

UserBank.hasMany(PurchasedFunction)
PurchasedFunction.belongsTo(UserBank)

ExtraFunction.hasMany(PurchasedFunction)
PurchasedFunction.belongsTo(ExtraFunction)

UserBank.hasMany(Bot)
Bot.belongsTo(UserBank)

UserBank.hasOne(Coin)
Coin.belongsTo(UserBank)

module.exports = {
    User,
    UserInfo,
    UserBank,
    Tarif,
    ExtraFunction,
    PurchasedFunction,
    Bot,
    Coin
}
