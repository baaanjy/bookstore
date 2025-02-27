const Book = require('../models/book')

const SORT_BY_LATEST = 'latest'
const SORT_BY_TITLE = 'title'
const SORT_BY_AUTHOR = 'author'


async function getBooks(sortOption, currentPage, itemsPerPage) {
  let sortBy = {}

  switch (sortOption) {
    case SORT_BY_LATEST:
      sortBy = { pub_date: -1 }
      break
    case SORT_BY_TITLE:
      sortBy = { title: 1 }
      break
    case SORT_BY_AUTHOR:
      sortBy = { author: 1 }
      break
  }
  const skip = (currentPage - 1) * itemsPerPage

  const books = await Book.find().sort(sortBy).skip(skip).limit(itemsPerPage)
  const totalAmount = await Book.countDocuments()

  return { books, totalAmount }
}

module.exports = { getBooks }