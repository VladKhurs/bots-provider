require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const {Tarif} = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const { TARITFS } = require('./utils/consts')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()



        TARITFS.forEach(async (e) => {

            const tarif = await Tarif.findOne({where: {name: e.name}})
            if (!tarif) {
                await Tarif.create({
                    name: e.name,
                    description: e.description,
                    price: e.price,
                    period: e.period,
                    limits: e.limits,
                    functions: e.functions
                })
            }
        })



        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
