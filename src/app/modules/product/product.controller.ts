import { NextFunction, Request, Response } from 'express'
import { insertProductToDb } from './product.service'
export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
	const product = await insertProductToDb()
	res.status(200).json({
		status: 'success',
		data: product,
	})
}
