const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

router.get('/user/list', (req, res) => {
  userModel.find({}, (err, doc) => {
    return res.json(doc)
  })
})

router.get('/user/info', (req, res) => {
  return res.json({
    code: 1
  })
})

module.exports = router