import Book from '../models/Book'

/**
 * This middleware function is used to get all books.
 * @param req - Express Request.
 * @param res - Express Response.
 * @param next - Next function
 * @returns All books
 */
export const getAllBooks = async (_req, res, next) => {
  try {
    const books = await Book.find({})
    return res.status(200).json(books)
  } catch (exception) {
    return next(exception)
  }
}

/**
 * This middleware function is used to create a new book.
 * @param req - Express Request.
 * @param res - Express Response.
 * @param next - Next function
 * @returns Saved book object
 */
export const CreateNewBook = async (req, res, next) => {
  const body = req.body

  try {
    if (!body.title || !body.author) {
      return res
        .status(400)
        .send({ message: 'Book title or author is missing' })
    }

    const book = new Book({
      title: body.title,
      author: body.author,
      description: body.description,
    })
    const savedBook = await book.save()
    res.status(201).json(savedBook)
  } catch (exception) {
    next(exception)
  }
}

/**
 * This middleware function is used to update a book by it's id.
 * @param req - Express Request.
 * @param res - Express Response.
 * @param next - Next function
 * @returns Updated book object
 */
export const updateBook = async (req, res, next) => {
  const body = req.body

  const book = {
    title: body.title,
    author: body.author,
    description: body.description,
  }

  if (!body.title || !body.author) {
    return res.status(400).send({ message: 'Book title or author is missing' })
  }

  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, book, {
      new: true,
    })
    res.status(200).json(updatedBook)
  } catch (exception) {
    next(exception)
  }
}

/**
 * This middleware function is used to delete a book by it's id.
 * @param req - Express Request.
 * @param res - Express Response.
 * @param next - Next function
 * @returns nothing to return. Status code = 204
 */
export const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id)

    if (!book) {
      return res
        .status(404)
        .json({ message: `Book with id ${req.params.id} not found` })
    }
    await Book.findByIdAndDelete(req.params.id)
    return res.status(204).end()
  } catch (exception) {
    next(exception)
  }
}
