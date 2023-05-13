interface IProductBrand {
	id: number
	name: string
	logo: string
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
	reviews: {
		id: number
		author: string
		rating: number
		content: string
	}[]
}
export interface IProductMethods {
	getBrandDetails(): IProductBrand
}
