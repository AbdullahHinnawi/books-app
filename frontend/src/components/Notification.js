import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNotification } from '../actions/notificationActions'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const dispatch = useDispatch()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    dispatch(fetchNotification())
  }, [dispatch])

  return (
    <Grid container p={1}>
      {notification.message && (
        <Grid item xs={matches ? 12 : 6} p={1}>
          <Box
            p={1.3}
            style={notification.success ? successStyles : errorStyles}
          >
            {notification.message}
          </Box>
        </Grid>
      )}
    </Grid>
  )
}

const successStyles = {
  color: 'green',
  border: '1px solid green',
  background: '#DEF1DD',
  borderRadius: 5,
}

const errorStyles = {
  color: '#731C23',
  border: '1px solid #731C23',
  background: '#F8D7D9',
  borderRadius: 5,
}

export default Notification
