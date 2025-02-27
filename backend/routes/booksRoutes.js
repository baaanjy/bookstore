const express = require('express')
const router = express.Router()

const Book = require("../models/book")

function sendResponse(res, success, status, message=null, data=null){
  return res.status(status).json({ success, status, message, data})
}

router.get('/', async (req, res) => {
  try {
    const sortOption = req.query.sort
    
    let sortBy = {}
    switch(sortOption){
      case 'latest': sortBy = {pub_date: -1}; break;
      case 'title': sortBy = {title: 1}; break;
      case 'author': sortBy = {author: 1}; break;
    }

    const books = await Book.find().sort(sortBy) 
    if (!books || books.length === 0) {
      sendResponse(res, false, 404, 'No Books Found')
    }

    sendResponse(res, true, 200, 'Books Found', books)
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const newData = req.body

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      newData,
      {new: true}
    )

    if (!updatedBook) {
      sendResponse(res, false, 404, 'Book not found')
    }

    sendResponse(res, true, 200, 'Book updated', updatedBook)
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
})

router.get('/:id', async (req, res) => {
  try{
    const id = req.params.id
    const foundBook = await Book.findOne({_id: id})

    if(!foundBook){
      sendResponse(res, false, 404, 'Book not found')
    }

    sendResponse(res, true, 200, 'Book found', foundBook)
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const id = req.params.id
    const deletedBook = await Book.deleteOne({_id: id})

    if (!deletedBook) {
      sendResponse(res, false, 404, 'Book not found')
    }

    sendResponse(res, true, 200, 'Book deleted')
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const newData = req.body
    const newBook = await Book.create({ ...newData })

    sendResponse(res, true, 200, 'Book created', newBook)
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
})

module.exports = router