const express = require('express')
const userRouter = require('./routes/user')

const app = express()
app.use('/', userRouter)

app.listen(9090, () => {
  console.log(`server is listening at port 9090...`)
})