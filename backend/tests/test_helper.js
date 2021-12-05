import Book from '../models/Book'

const initialBooks = [
  {
    title: 'The Road to React',
    author: 'Robin Wieruch',
    description:
      'The Road to React: Your journey to master React.js in JavaScript by Wieruch builds an application with you and explains different features along the way. The author took an approach of learning as you go where you first see the problem and then get an answer, you pick up things while practicing. It starts with the easiest concepts and then introduces you to advanced ones like React with TypeScript, performance improvements, testing, etc.',
  },
  {
    title: 'Learn AWS Serverless Computing',
    author: 'Scott Patterson',
    description:
      'This is a great book for beginners as well as intermediate cloud learners. It starts with foundational concepts and then quickly moves to build complex solutions. The book mainly focuses on AWS Lambda, Amazon API Gateway, and a few services from AWS.',
  },
]

/**
 * Used by books.test.js module to get current books in database
 * @returns Current books in database
 */
export const booksInDb = async () => {
  const books = await Book.find({})
  return books.map((b) => b.toJSON())
}

export default {
  initialBooks,
  booksInDb,
}
