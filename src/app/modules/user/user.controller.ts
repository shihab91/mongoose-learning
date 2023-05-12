import { Request, Response } from 'express'
import { createUserToDb, getUserByIdFromDb, getUserFromDb } from './user.service'

export const createUser = async (req: Request, res: Response) => {
	const data = req.body
	const user = await createUserToDb(data)
	res.status(200).json({
		status: 'success',
		data: user,
	})
}
export const getUsers = async (req: Request, res: Response) => {
	const users = await getUserFromDb()
	res.status(200).json({
		status: 'success',
		data: users,
	})
}
export const getUserById = async (req: Request, res: Response) => {
	const id = req.params.id
	const user = await getUserByIdFromDb(id)
	res.status(200).json({
		status: 'success',
		data: user,
	})
}
