const express = require('express')
const md5 = require('md5')
const router = express.Router()
const userModel = require('../models/userModel')

router.post('/user/login', (req, res) => {
  let { username, password } = req.body
  userModel.findOne({
    username: username,
    password: md5(password)
  }, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        msg: '服务器出错'
      })
    }
    if (!doc) {
      return res.json({
        code: 1,
        msg: '用户名或密码错误'
      })
    }
    return res.json({
      code: 0,
      data: doc
    })
  })
})

router.post('/user/register', (req, res) => {
  console.log(req.body)
  let { username, password, type } = req.body
  userModel.findOne({ username: username }, (err, doc) => {
    if (doc) {
      return res.json({
        code: 1,
        msg: '用户名已存在'
      })
    }
    userModel.create({
      username: username,
      password: md5(password),
      type: type
    }, (err, doc) => {
      if (err) {
        return res.json({
          code: 1,
          msg: '服务器出错'
        })
      }
      return res.json({
        code: 0,
        msg: '注册成功'
      })
    })
  })
})

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