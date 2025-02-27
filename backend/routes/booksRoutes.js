const express = require('express')
const router = express.Router()

const {
  getBooksController,
  createBookController,
  getBookController,
  updateBookController,
  deleteBookController,
} = require('../controllers/booksController')


router.get('/', getBooksController)

router.get('/:id', getBookController)

router.post('/', createBookController)

router.put('/:id', updateBookController)

router.delete('/:id', deleteBookController)


module.exports = router