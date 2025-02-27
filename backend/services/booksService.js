const Book = require('../models/book')

const SORT_BY_LATEST = 'latest'
const SORT_BY_TITLE = 'title'
const SORT_BY_AUTHOR = 'author'


async function getBooks(sortOption, currentPage, itemsPerPage, searchCategory, searchQuery) {
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

  // 검색어 없을 떄
  if(searchQuery === ''){
    const books = await Book.find().sort(sortBy).skip(skip).limit(itemsPerPage)
    const totalAmount = await Book.countDocuments()
  
    return { books, totalAmount }
  }else{
    // 검색어 있을 때
    let filter = {}

    if (searchCategory === 'title') {
      filter.title = { $regex: searchQuery, $options: 'i' } // 대소문자 구분 없이 검색
    } else if (searchCategory === 'author') {
      filter.author = { $regex: searchQuery, $options: 'i' }
    } else if (searchCategory === 'all') {
      filter = {
        $or: [
          { title: { $regex: searchQuery, $options: 'i' } }, 
          { author: { $regex: searchQuery, $options: 'i' } }
        ],
      }
    }
    const books = await Book.find(filter).skip(skip).limit(itemsPerPage)
    const totalAmount = await Book.countDocuments(filter)
    
    return { books, totalAmount }
  }
}

module.exports = { getBooks }