import express from 'express'
import { Router } from 'express'
import { postQuote, getInTouch } from "../controllers/quotationContoller.js";


const quoteRouter = Router()

quoteRouter.post('/submit-quote', postQuote);
quoteRouter.post('/enquire', getInTouch)

export default quoteRouter