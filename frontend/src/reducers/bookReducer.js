import {
  FETCH_BOOKS,
  NEW_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  SET_CURRENT_BOOK,
  RESET_CURRENT_BOOK,
} from '../utils/types'

const initialBook = {
  title: '',
  author: '',
  description: '',
}

const initialState = {
  currentBook: initialBook,
  books: [],
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.data,
      }
    case NEW_BOOK:
      return {
        ...state,
        books: [...state.books, action.data],
      }
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((b) =>
          b._id !== action.data._id ? b : action.data
        ),
      }
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((b) => b._id !== action.data),
      }
    case SET_CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.data,
      }
    case RESET_CURRENT_BOOK:
      return {
        ...state,
        currentBook: initialBook,
      }
    default:
      return state
  }
}

export default bookReducer
