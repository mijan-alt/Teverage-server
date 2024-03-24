import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import quoteRouter from './routes/QuotationRoute.js'
import productRouter from './routes/ProductRoute.js'
import connectDb from './db/connectDb.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', quoteRouter)
app.use('/', productRouter)

console.log('something is happening')

console.log("something");


connectDb(app)
