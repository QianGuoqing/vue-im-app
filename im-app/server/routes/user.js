const express = require('express')
const router = express.Router()

router.get('/user/info', (req, res) => {
  return res.json({
    code: 1
  })
})

module.exports = router