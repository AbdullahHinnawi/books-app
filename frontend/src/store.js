import { createStore, combineReducers, applyMiddleware } from 'redux'
import bookReducer from './reducers/bookReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notificationReducer from 'reducers/notificationReducer'

const reducer = combineReducers({
  book: bookReducer,
  notification: notificationReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
