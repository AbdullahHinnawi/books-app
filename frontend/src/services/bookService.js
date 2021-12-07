import axios from 'axios'
const baseUrl = '/api/books'

/**
 * @function
 * @desc Fetches all book objects
 * @returns array of books
 */
const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

/**
 * @function
 * @desc Creates a new book object
 * @param {Object} newBook
 * @returns created book object
 */
const createBook = async (newBook) => {
  const res = await axios.post(baseUrl, newBook)
  return res.data
}

/**
 * @function
 * @desc Updates book object by it's id
 * @param {String} id - book id to be updated
 * @param {Object} updatedBookObject
 * @returns the updated book object
 */
const updateBook = async (id, updatedBookObject) => {
  const res = await axios.put(`${baseUrl}/${id}`, updatedBookObject)
  return res.data
}

/**
 * @function
 * @desc Deletes book object by it's id
 * @param {String} id - book id to be deleted
 * @returns status of 204 - No content
 */
const deleteBook = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`)
  return res.data
}

export default {
  getAll,
  createBook,
  updateBook,
  deleteBook,
}
