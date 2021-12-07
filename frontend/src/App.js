import BookForm from 'components/BookForm'
import React from 'react'
import BookList from './components/BookList'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Notification from 'components/Notification'

const App = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <h1 style={{ marginLeft: 16 }}>Books App</h1>
      <Notification />
      <Grid container p={1}>
        <BookForm />
        <BookList />
      </Grid>
    </Box>
  )
}

export default App
