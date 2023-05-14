import { IUser } from './user.interface'
import { User } from './user.model'

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
	const user = new User(payload) // User -> class & user -> instance of User class indeed and object
	console.log(user.fullName())
	await user.save() // user.save() -> built in instance method
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
export const getAdminUsersFromDb = async () => {
	const admins = await User.getAdminUsers()
	return admins
}
