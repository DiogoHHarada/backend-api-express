import express from 'express'
import { getPubliController } from '../controllers/publication/getPubliController.js'
import { createPubliController } from '../controllers/publication/createPubliController.js'
import { updatePubliController } from '../controllers/publication/updatePubliController.js'
import { avatarUpdatePubliController } from '../controllers/publication/avatarUpdatePubliController.js'
import { deletePubliController } from '../controllers/publication/deletePubliController.js'

const router = express.Router()

router.get('/', getPubliController)

router.post('/', createPubliController)

router.put('/', updatePubliController)

router.patch('/', avatarUpdatePubliController)

router.delete('/', deletePubliController)

export default router