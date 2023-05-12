import { Schema, model } from 'mongoose'
import { IProduct } from './product.interface'

const productSchema = new Schema<IProduct>({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	inStock: { type: Boolean, required: true },
	category: {
		id: { type: Number, required: true },
		name: { type: String },
	},
	brand: {
		id: { type: Number, required: true },
		name: { type: String, required: true },
		logo: { type: String, required: true },
	},
	reviews: [
		{
			id: { type: Number, required: true },
			author: { type: String, required: true },
			rating: { type: Number, required: true },
			content: { type: String, required: true },
		},
	],
})
export const Product = model<IProduct>('Product', productSchema)
