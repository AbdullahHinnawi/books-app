import axios from 'axios'
const baseUrl = '/api/books'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createBook = async (newBook) => {
  const res = await axios.post(baseUrl, newBook)
  return res.data
}

const updateBook = async (id, updatedBookObject) => {
  const res = await axios.put(`${baseUrl}/${id}`, updatedBookObject)
  return res.data
}

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
