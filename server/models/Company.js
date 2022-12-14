const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
}, {
  timestamps: true
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company
