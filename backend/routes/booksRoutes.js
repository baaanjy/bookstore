const express = require('express')
const router = express.Router()

const Book = require("../models/book")

function sendResponse(res, success, status, message=null, data=null){
  return res.status(status).json({ success, status, message, data})
}

router.get('/', async (req, res) => {
  try {
    const books = await Book.find() 
    if (!books || books.length === 0) {
      sendResponse(res, false, 404, 'No Books Found')
    }
    sendResponse(res, true, 200, 'Books Found', books)
  } catch (error) {
    sendResponse(res, false, 500, 'Server error', error.message)
  }
})

module.exports = router