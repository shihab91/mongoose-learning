import { Request, Response } from 'express'
import { insertProductToDb } from './product.service'
export const createProduct = async (req: Request, res: Response) => {
	const data = req.body
	const product = await insertProductToDb(data)
	res.status(200).json({
		status: 'success',
		data: product,
	})
}
