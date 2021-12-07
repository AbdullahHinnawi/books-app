import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, setCurrentBook } from 'actions/bookActions'
import { Grid, useTheme, useMediaQuery } from '@mui/material'

const BookList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null)
  const books = useSelector((state) => state.book.books)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  const handleListItemClick = (index, book) => {
    setSelectedIndex(index)
    dispatch(setCurrentBook(book))
  }

  return (
    <Grid className="gridItem" item xs={matches ? 12 : 6} p={1}>
      <h3 style={{ textAlign: 'center', marginBottom: 27 }}>Book list</h3>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          border: '1px solid #E0E0E0',
          borderRadius: '5px',
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          {books &&
            books.map((book) => (
              <ListItemButton
                key={book._id}
                selected={selectedIndex === book._id}
                onClick={() => handleListItemClick(book._id, book)}
              >
                <ListItemText style={{ width: '50%' }} primary={book.title} />
                <ListItemText
                  style={{ width: '50%' }}
                  secondary={book.author}
                />
              </ListItemButton>
            ))}
        </List>
      </Box>
    </Grid>
  )
}

export default BookList
