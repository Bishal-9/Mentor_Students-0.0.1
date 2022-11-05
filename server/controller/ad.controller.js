const Ad = require('../models/Ad')

const create = async (req, res) => {
  try {
    const ad = await Ad.create(req.body)
    res.json({
      status: 'success',
      data: ad
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
    const ads = await Ad.find()
    res.json({
      status: 'success',
      data: ads
    })
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message
    })
  }
}

const show = async (req, res) => {
  try {
    const ad = await Ad.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $unwind: "$company",
      },
      {
        $match: {
          $or: [
            { "company.name": { $regex: req.params.search, $options: "i" } },
            { primaryText: { $regex: req.params.search, $options: "i" } },
            { headline: { $regex: req.params.search, $options: "i" } },
            { description: { $regex: req.params.search, $options: "i" } },
          ],
        },
      },
    ])
    res.json({
      status: 'success',
      data: ad
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
  index,
  show
}
