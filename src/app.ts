import express, { Application } from 'express'
import cors from 'cors'
// application routes
import userRoute from './app/modules/user/user.route'
import productRoute from './app/modules/product/product.route'
const app: Application = express()

// using cors
app.use(cors())
// parse data
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
// routes
app.use('/api/v1/user', userRoute)
app.use('/api/v1/products', productRoute)
app.get('/', (req, res) => {
	res.send('app running')
})
export default app

// inserting a test data into mongodb
/**
 * step 1: create interface
 * step 2: schema
 * step 3: model
 * step 4: database query
 *   */

// pattern -> (MCV-> Model view controller) & Modular
/**
 * interface -> some.interface.ts
 * schema & model -> some.model.ts
 * route
 * route function -> some.controller.ts
 * database query function -> service
 */
