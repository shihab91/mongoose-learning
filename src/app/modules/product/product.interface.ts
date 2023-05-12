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
	brand: {
		id: number
		name: string
		logo: string
	}
	reviews: {
		id: number
		author: string
		rating: number
		content: string
	}[]
}
