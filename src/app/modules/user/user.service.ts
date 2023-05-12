import { IUser } from './user.interface'
import { User } from './user.model'

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
	const user = new User(payload)
	await user.save()
	return user
}
export const getUserFromDb = async (): Promise<IUser[]> => {
	const users = await User.find()
	return users
}
export const getUserByIdFromDb = async (payload: string): Promise<IUser | null> => {
	const user = await User.findOne({ id: payload }, { contactNo: 0 })
	return user
}
