const express = require('express')
const router = express.Router()

const Book = require("../models/book")

router.get('/', async (req, res) => {
  try {
    const books = await Book.find() 
    if (!books || books.length === 0) {
      return res.status(404).json({ message: 'No books found' })
    }
    res.json(books)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

module.exports = router