const Company = require('../models/Company')

const create = async (req, res) => {
  try {
    const company = await Company.create(req.body)
    res.json({
      status: 'success',
      data: company
    })
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message
    })
  }
}

const index = async (req, res) => {
  try {
    const companies = await Company.find()
    res.json({
      status: 'success',
      data: companies
    })
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message
    })
  }
}

module.exports = {
  create,
  index
}
