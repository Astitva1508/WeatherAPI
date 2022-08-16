require('dotenv').config()
require('express-async-errors')

const express=require('express')
const app=express()

const weatherRoute=require('./routes/weather')

const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/getWeather',weatherRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server listening on PORT ${PORT}`))

