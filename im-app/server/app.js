const express = require('express')
const bodyParser = require('body-parser')
const cookieParser =require('cookie-parser')
const userRouter = require('./routes/user')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/', userRouter)

app.listen(9090, () => {
  console.log(`server is listening at port 9090...`)
})