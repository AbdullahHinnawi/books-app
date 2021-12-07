import {
  FETCH_NOTIFICATION,
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../utils/types'

const initialState = {
  message: '',
  success: false,
  error: false,
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATION:
      return state
    case SET_NOTIFICATION:
      return action.data
    case REMOVE_NOTIFICATION:
      return (state = initialState)
    default:
      return state
  }
}

export default notificationReducer
