/**
 * @module actions/notificationActions
 * @desc Redux notification actions.
 */
import {
  FETCH_NOTIFICATION,
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../utils/types'

/**
 * @function
 * @desc Fetches notification object.
 */
export const fetchNotification = () => {
  return { type: FETCH_NOTIFICATION }
}

/**
 * @function
 * @desc Sets notification object with a new value.
 */
export const setNotification = (notification) => {
  return { type: SET_NOTIFICATION, data: notification }
}

/**
 * @function
 * @desc Resets the notification object to the initial value.
 */
export const removeNotification = () => {
  return { type: REMOVE_NOTIFICATION }
}
