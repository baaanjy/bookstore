const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  author: {
    type: Schema.Types.String,
    required: true,
  },
  publisher: {
    type: Schema.Types.String,
    required: true,
  },
  pub_date: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
  },
  sales: {
    type: Schema.Types.Number,
    required: true,
  },
  stock: {
    type: Schema.Types.Number,
    required: true,
  },
  details: {
    type: Schema.Types.String,
    required: false,
  },
})

module.exports = model('Book', bookSchema)
