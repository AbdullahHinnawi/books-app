import express from 'express'
import {
  getAllBooks,
  CreateNewBook,
  updateBook,
  deleteBook,
} from '../utils/booksMiddleware'

/** Express router providing book related routes
 * @module controllers/books
 * @requires express
 */
const booksRouter = express.Router()

/**
 * Route to get all books
 */
booksRouter.get('/', getAllBooks)

/**
 * Route to post a new book
 */
booksRouter.post('/', CreateNewBook)

/**
 * Route to update a book
 */
booksRouter.put('/:id', updateBook)

/**
 * Route to delete a book
 */
booksRouter.delete('/:id', deleteBook)

export default booksRouter
