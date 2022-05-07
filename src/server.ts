import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import brandRoutes from './routes/brand.routes'
import categoryRoutes from './routes/category.routes'
import productRoutes from './routes/product.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())

//npm i express-fileupload @types/express-fileupload

app.use('/brands', brandRoutes)
app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)

app.listen(9090, () => {
  console.log('Server is running...');
})