import { Model, Schema, model } from 'mongoose'
import { IProduct, IProductMethods } from './product.interface'

type ProductModel = Model<IProduct, {}, IProductMethods>

const productSchema = new Schema<IProduct, ProductModel, IProductMethods>({
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
productSchema.method('getBrandDetails', function getBrandDetails() {
	return this.brand
})

export const Product = model<IProduct, ProductModel>('Product', productSchema)
