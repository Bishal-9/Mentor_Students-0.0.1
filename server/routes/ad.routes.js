const router = require('express').Router()
const { create, index, show } = require('../controller/ad.controller')

router.post('/', create)
router.get('/', index)
router.get('/:search', show)

module.exports = router
