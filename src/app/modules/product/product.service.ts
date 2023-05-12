import { Product } from './product.model'

export const insertProductToDb = async () => {
	const product = new Product({
		id: 4,
		name: 'samsung iPhone 12',
		description: 'A high-end smartphone from Apple',
		price: 1099,
		inStock: true,
		category: {
			id: 1,
			name: 'Electronics',
		},
		brand: {
			id: 1,
			name: 'Apple',
			logo: 'https://example.com/apple-logo.png',
		},
		reviews: [
			{
				id: 1,
				author: 'John Doe',
				rating: 4,
				content: 'This is a great phone!',
			},
		],
	})
	await product.save()
	return product
}
