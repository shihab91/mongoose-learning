import { Types } from 'mongoose'

interface IProductBrand {
	id: number
	name: string
	logo: string
}
interface IReviews {
	id: number
	author: string
	rating: number
	content: string
}
export interface IProduct {
	id: number
	name: string
	description: string
	price: number
	inStock: boolean
	category: {
		id: number
		name?: string
	}
	brand: IProductBrand
	reviews: Types.DocumentArray<IReviews>
}
export interface IProductMethods {
	getBrandDetails(): IProductBrand
}
