import dotenv from 'dotenv'
dotenv.config()

const IP = process.env.IP
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

const MONGODB_URI =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

export default {
  IP,
  PORT,
  NODE_ENV,
  MONGODB_URI,
}
