import { IProduct } from './product.interface'
import { Product } from './product.model'

export const insertProductToDb = async (payload: IProduct): Promise<IProduct> => {
	const product = new Product(payload)
	console.log(product.getBrandDetails())
	await product.save()
	return product
}
