import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Stack } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {
  createBook,
  setCurrentBook,
  deleteBook,
  resetCurrentBook,
  updateBook,
} from 'actions/bookActions'
import { Grid, useTheme, useMediaQuery } from '@mui/material'

const BookForm = () => {
  const currentBook = useSelector((state) => state.book.currentBook)

  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  // Used to save a new book
  const handleSaveNewButton = () => {
    if (validateForm()) {
      dispatch(createBook(currentBook))
      dispatch(resetCurrentBook())
    }
  }

  // Used to update a book by it's id
  const handleSaveButton = () => {
    if (currentBook._id && validateForm()) {
      dispatch(updateBook(currentBook._id, currentBook))
      dispatch(resetCurrentBook())
    }
  }

  // Used to delete a book by it's id
  const handleDeleteButton = () => {
    if (currentBook._id) {
      dispatch(deleteBook(currentBook._id))
      dispatch(resetCurrentBook())
    }
  }

  // Used to reset the input fields
  const handleResetButton = () => {
    dispatch(resetCurrentBook())
  }

  const validateForm = () => {
    let isBookFormValid = true

    if (!currentBook.title) {
      isBookFormValid = false
      setError(true)
    }

    if (!currentBook.author) {
      isBookFormValid = false
      setError(true)
    }

    return isBookFormValid
  }

  return (
    <Grid
      item
      xs={matches ? 12 : 6}
      p={1} /*style={{ backgroundColor: '#0ff' }}*/
    >
      <h3>Create new book or edit one from book list</h3>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: '10px auto 10px auto', width: '100%' },
          '& .MuiButton-root': {},
          '& .textarea': { m: '10px auto 10px auto', width: '100%' },
        }}
        noValidate
        autoComplete="off"
        /*ml={1}*/
      >
        <div>
          <TextField
            required
            error={error && !currentBook.title}
            label="Title"
            id="outlined-size-small"
            value={currentBook.title || ''}
            onChange={(e) => {
              setError(false)
              dispatch(
                setCurrentBook({ ...currentBook, title: e.target.value })
              )
            }}
            size="small"
            helperText={error && !currentBook.title ? 'Title is required' : ''}
          />
        </div>
        <div>
          <TextField
            required
            error={error && !currentBook.author}
            label="Author"
            id="outlined-size-small"
            name="author"
            value={currentBook.author || ''}
            onChange={(e) => {
              setError(false)
              dispatch(
                setCurrentBook({ ...currentBook, author: e.target.value })
              )
            }}
            size="small"
            helperText={
              error && !currentBook.author ? 'Author is required' : ''
            }
          />
        </div>
        <div>
          <TextField
            label="Description"
            id="outlined-size-small"
            name="description"
            multiline
            minRows={3}
            value={currentBook.description || ''}
            onChange={(e) =>
              dispatch(
                setCurrentBook({ ...currentBook, description: e.target.value })
              )
            }
            size="small"
          />
        </div>
        <div>
          <Stack direction="row" spacing={1} mt={1}>
            <Button
              variant="contained"
              color="success"
              onClick={handleSaveNewButton}
              disabled={currentBook._id ? true : false}
            >
              Save new
            </Button>
            <Button
              variant="contained"
              onClick={handleSaveButton}
              disabled={currentBook._id ? false : true}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteButton}
              disabled={currentBook._id ? false : true}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              onClick={handleResetButton}
              disabled={currentBook._id ? false : true}
            >
              Reset fields
            </Button>
          </Stack>
        </div>
      </Box>
    </Grid>
  )
}
export default BookForm
