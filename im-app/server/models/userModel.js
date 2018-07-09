const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/im_app_db'

// 链接数据库
mongoose.connect(DB_URL, err => {
  if (err) {
    console.log(`连接失败: ${err}`)
  } else {
    console.log('连接成功')
  }
})

// 建立UserSchema, schema是一种表结构, 数据库无法操作schema, 但是schema是表的模板
const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  type: { type: String, require: true },
  avatar: { type: String },
  description: { type: String }, /** genius: 个人简介, boss: 职位简介 */
  title: { type: String },       /** 职位名称 */
  company: { type: String },     /** boss: 公司名称 */
  money: { type: String }        /** boss: 薪资 */
})

// 创建userModel
const userModel = mongoose.model('user', userSchema)

module.exports = userModel