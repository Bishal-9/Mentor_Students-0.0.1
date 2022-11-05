const router = require('express').Router()
const { create, index } = require('../controller/company.controller')

router.post('/', create)
router.get('/', index)

module.exports = router
