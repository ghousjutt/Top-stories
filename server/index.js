require('dotenv').config({ path: './.env' })
let express = require('express')
let app = express()
let cors = require('cors')
let routes = require('./Routes')

app.use('/', cors(), routes())

app.listen(process.env.port || 8080)