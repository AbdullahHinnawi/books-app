import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import config from './utils/config'
import booksRouter from './controllers/books'
import middleware from './utils/middleware'
import logger from './utils/logger'

const app = express()

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
// Supports parsing of application/json type post data. The same way as bodyParser.json()
app.use(express.json())
// use requestLogger middleware with all routes
app.use(middleware.requestLogger)

app.use('/api/books', booksRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app
