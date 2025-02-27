const { getBooks } = require("../services/booksService")
const Book = require('../models/book')

function sendResponse(res, success, status, message = null, data = null) {
  return res.status(status).json({ success, status, message, data })
}

async function getBooksController(req, res){
  try {
    const sortOption = req.query.sort
    const currentPage = parseInt(req.query.page) || 1
    const itemsPerPage = parseInt(req.query.limit) || 10
    const searchCategory = req.query.category || 'all'
    const searchQuery = req.query.search || ''

    const { books, totalAmount } = await getBooks(sortOption, currentPage, itemsPerPage, searchCategory, searchQuery)

    if (!books || books.length === 0) {
      return sendResponse(res, true, 200, 'No Books Found', { books: [], totalAmount: 0})
    }

    sendResponse(res, true, 200, 'Books Found', { books, totalAmount })
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
}

async function getBookController(req, res){
  try{
    const id = req.params.id
    const foundBook = await Book.findOne({_id: id})
    
    if(!foundBook){
      return sendResponse(res, false, 404, 'Book not found')
    }
    
    sendResponse(res, true, 200, 'Book found', foundBook)
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
}

async function createBookController(req, res){
  try{
    const newData = req.body
    const newBook = await Book.create({ ...newData })
    
    sendResponse(res, true, 200, 'Book created', newBook)
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
}

async function updateBookController(req, res){
  try {
      const id = req.params.id
      const newData = req.body
  
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        newData,
        {new: true}
      )
  
      if (!updatedBook) {
        return sendResponse(res, false, 404, 'Book not found')
      }
  
      sendResponse(res, true, 200, 'Book updated', updatedBook)
    } catch (error) {
      sendResponse(res, false, 500, 'Server error', error.message)
    }
}

async function deleteBookController(req, res){
  try{
      const id = req.params.id
      const deletedBook = await Book.deleteOne({_id: id})
  
      if (!deletedBook) {
        return sendResponse(res, false, 404, 'Book not found')
      }
  
      sendResponse(res, true, 200, 'Book deleted')
    } catch (error) {
      sendResponse(res, false, 500, 'Server error', error.message)
    }
}

module.exports = {
  getBooksController,
  getBookController,
  createBookController,
  updateBookController,
  deleteBookController,
}
