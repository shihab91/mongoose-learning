import express from 'express'
import { createProduct } from './product.controller'
const router = express.Router()
router.post('/insert-product', createProduct)
export default router
