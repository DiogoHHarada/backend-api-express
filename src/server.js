//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import publicationRouter from './routers/publicationRouter.js'
import { logger } from './middleware/logger.js'

const app = express()
const port = 3000

app.use(logger)
app.use(express.json())

app.get('/', (req, res) => { 
    res.send("Olá seja Bem Vindo")
})

app.use('/user', userRouter)
app.use('/publication', publicationRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})