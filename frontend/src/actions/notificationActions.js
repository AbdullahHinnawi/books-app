import {
  FETCH_NOTIFICATION,
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../utils/types'

// Fetch notification
export const fetchNotification = () => {
  return { type: FETCH_NOTIFICATION }
}

// Set notification
export const setNotification = (notification) => {
  return { type: SET_NOTIFICATION, data: notification }
}

// Remove notification
export const removeNotification = () => {
  return { type: REMOVE_NOTIFICATION }
}
