const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

//html
const page1 = '/page/design/app.html'

//scripts
const script1 = '/page/design/app.js'

//middleware
app.use(cors())
app.use(express.json())

//routes
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname + page1))
})
app.get("/page/design/app.js",(req,res)=>{
  res.sendFile(path.join(__dirname+script1))
})

app.listen(3000,()=>{
  console.log("server started on port 3000")
})