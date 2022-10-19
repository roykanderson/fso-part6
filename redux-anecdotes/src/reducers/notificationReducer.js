import { createSlice } from '@reduxjs/toolkit'

let timeoutID = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    set(state, action) {
      const notification = action.payload
      return notification
    },
    remove(state, action) {
      return null
    }
  }
})

export const { set, remove } = notificationSlice.actions

export const setNotification = (notification, seconds) => {
  return async (dispatch) => {
    clearTimeout(timeoutID)
    dispatch(set(notification))
    timeoutID = setTimeout(() => dispatch(remove()), seconds * 1000)
  }
}

export default notificationSlice.reducer