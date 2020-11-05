import 'dotenv/config'
import express from 'express'

import UserController from './app/controllers/UserController'

const app = express()

app.use(express.json())

app.post('/users', UserController.store)

app.listen(process.env.PORT, () => {
    console.log(`Pai tá on na porta ${process.env.PORT}`)
})