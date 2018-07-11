const express = require('express')
const md5 = require('md5')
const router = express.Router()
const userModel = require('../models/userModel')

router.post('/user/update', (req, res) => {
  let { user_id } = req.cookies
  if (!user_id) {
    return res.json({
      code: 1
    })
  }
  let moreInfoData = req.body
  userModel.findByIdAndUpdate(user_id, moreInfoData, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        msg: '服务器错误'
      })
    }
    let totalData = Object.assign(doc, moreInfoData)
    return res.json({
      code: 0,
      data: totalData
    })
  })
})

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
    res.cookie('user_id', doc._id)
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
  let { type } = req.query
  if (!type) {
    userModel.find({}, (err, doc) => {
      return res.json(doc)
    })
  } else {
    type = type[0].toUpperCase() + type.substring(1)
    userModel.find({type}, (err, doc) => {
      if (err) {
        return res.json({
          code: 1,
          msg: '服务器错误'
        })
      }
      return res.json({
        code: 0,
        data: doc
      })
    })
  }
})

router.get('/user/info', (req, res) => {
  let { user_id } = req.cookies
  if (!user_id) {
    return res.json({
      code: 1
    })
  }
  userModel.findOne({ _id: user_id }, (err, doc) => {
    if (err) {
      return res.json({
        code: 0,
        msg: '服务器错误'
      })
    }
    if (!doc) {
      return res.json({
        code: 1,
        msg: '用户不存在'
      })
    } else {
      return res.json({
        code: 0,
        data: doc
      })
    }
  })
})

router.get('/user', (req, res) => {
  let { username } = req.query
  if (!username) {
    return res.json({
      code: 1,
      msg: 'error'
    })
  }
  userModel.findOne({ username }, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        msg: '服务器错误'
      })
    }
    return res.json({
      code: 0,
      data: doc
    })
  })
})

module.exports = router