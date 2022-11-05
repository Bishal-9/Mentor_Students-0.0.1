const mongoose = require('mongoose')

const adSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  primaryText: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cta: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

const Ad = mongoose.model('Ad', adSchema)

module.exports = Ad
