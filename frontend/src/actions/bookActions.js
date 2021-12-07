import bookService from '../services/bookService'
import {
  FETCH_BOOKS,
  NEW_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  SET_CURRENT_BOOK,
  RESET_CURRENT_BOOK,
} from '../utils/types'
import { removeNotification, setNotification } from './notificationActions'

export const fetchBooks = () => async (dispatch) => {
  try {
    const books = await bookService.getAll()
    dispatch({
      type: FETCH_BOOKS,
      data: books,
    })
  } catch (error) {
    console.log(error)
  }
}

export const setCurrentBook = (book) => (dispatch) => {
  dispatch({ type: SET_CURRENT_BOOK, data: book })
}

export const resetCurrentBook = () => async (dispatch) => {
  dispatch({ type: RESET_CURRENT_BOOK })
}

export const createBook = (book) => async (dispatch) => {
  try {
    const createdBook = await bookService.createBook(book)
    dispatch({ type: NEW_BOOK, data: createdBook })

    const message = `Book with title'${createdBook.title} added' successfully!`
    dispatch(setNotification({ message: message, success: true, error: false }))
    setTimeout(async () => {
      await dispatch(removeNotification())
    }, 5000)
  } catch (error) {
    console.log(error)
  }
}

export const updateBook = (bookId, book) => async (dispatch) => {
  try {
    const updatedBook = await bookService.updateBook(bookId, book)
    dispatch({ type: UPDATE_BOOK, data: updatedBook })

    const message = `Book with title'${updatedBook.title} updated' successfully!`
    dispatch(setNotification({ message: message, success: true, error: false }))
    setTimeout(async () => {
      await dispatch(removeNotification())
    }, 5000)
  } catch (error) {
    console.log(error)
  }
}

export const deleteBook = (bookId) => async (dispatch) => {
  try {
    await bookService.deleteBook(bookId)
    dispatch({ type: DELETE_BOOK, data: bookId })

    const message = 'Book deleted successfully!'
    dispatch(setNotification({ message: message, success: true, error: false }))
    setTimeout(async () => {
      await dispatch(removeNotification())
    }, 5000)
  } catch (error) {
    console.log(error)
  }
}
