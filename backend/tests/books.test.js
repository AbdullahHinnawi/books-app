import mongoose from 'mongoose'
// supertest package helps to write tests for APIs
import request from 'supertest'
import helper from './test_helper'
import Book from '../models/Book'
import app from '../app'

const api = request(app)

/**
 * Before each test, delete database content, then
 * save the initial books to the database
 */
beforeEach(async () => {
  await Book.deleteMany({})

  let book = new Book(helper.initialBooks[0])
  await book.save()

  book = new Book(helper.initialBooks[1])
  await book.save()
})

/**
 * Test to ensure that all book objects are returned
 */
test('using GET request, all book objects are returned', async () => {
  const response = await api.get('/api/books')
  expect(response.body).toHaveLength(helper.initialBooks.length)
})

/**
 * Test to ensure that all book objects are returned as json
 */
test('book objects are returned as json', async () => {
  await api
    .get('/api/books')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

/**
 * Test to ensure that book object has an id property
 */
test('book object has an id property', async () => {
  const books = await helper.booksInDb()
  books.map((b) => expect(b._id).toBeDefined())
})

/**
 * Test to ensure that a valid book obejct can be added successfully
 */
test('a valid book obejct can be added', async () => {
  const newBook = {
    title: 'Spring Boot in Action',
    author: 'Craig Walls',
    description:
      'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
  }

  await api
    .post('/api/books')
    .send(newBook)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const booksAtEnd = await helper.booksInDb()
  expect(booksAtEnd).toHaveLength(helper.initialBooks.length + 1)

  // The title of the newBook can be found
  const bookTitles = booksAtEnd.map((b) => b.title)
  expect(bookTitles).toContain(newBook.title)
})

/**
 * Test to ensure that adding a book fails if the
 * title or author properties are missing
 */
test('adding a book fails if the title or author properties are missing', async () => {
  let newBook = {
    title: '',
    author: 'Edsger W. Dijkstra',
    description: '',
  }

  let response = await api.post('/api/books').send(newBook)
  expect(response.status).toBe(400)

  newBook = {
    title: 'Edsger W. Dijkstra',
    author: '',
    description: '',
  }

  response = await api.post('/api/books').send(newBook)
  expect(response.status).toBe(400)
})

/**
 * Test to ensure that a book obejct can be
 * deleted successfully
 */
test('if a book object deleted, expect response with status code 204', async () => {
  const booksAtStart = await helper.booksInDb()
  const bookToDelete = booksAtStart[0]

  await api.delete(`/api/books/${bookToDelete._id}`).expect(204)

  const booksAtEnd = await helper.booksInDb()
  expect(booksAtEnd).toHaveLength(helper.initialBooks.length - 1)

  // After deleting, the title of the deleted book can not be found
  const bookTitles = booksAtEnd.map((b) => b.title)
  expect(bookTitles).not.toContain(bookToDelete.title)
})

/**
 * Test to ensure that a book obejct can be
 * updated successfully
 */
test('a book can be updated', async () => {
  const booksAtStart = await helper.booksInDb()
  let bookToUpdate = booksAtStart[0]

  bookToUpdate = { ...bookToUpdate, title: `${bookToUpdate.title} updated` }

  await api.put(`/api/books/${bookToUpdate._id.toString()}`).send(bookToUpdate)

  const booksAtEnd = await helper.booksInDb()

  const result = booksAtEnd.filter(
    (b) => b._id.toString() === bookToUpdate._id.toString()
  )

  expect(result[0].title).toContain('updated')
})

/**
 * When tests are done, close the connection to MongoDB
 */
afterAll(() => {
  mongoose.connection.close()
})
