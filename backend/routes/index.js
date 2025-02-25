const router = require('express').Router()

router.use('/books', require('./booksRoutes'))

module.exports = router
