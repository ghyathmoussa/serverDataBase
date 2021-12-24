const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const body_parser = require('body-parser')
const front_end_port = 'http://localhost:3000/'
const db = require('./app/models')
let corsOption = {
    origin:'http://localhost:4000/'
}

app.use(cors())

//parse request for content-type application/json
app.use(body_parser.json())

app.get('/',(req,res) => {
    res.status(200).json({message:'Hello from json server'})
})

// app.use('/findAll',)

db.sequelize.sync({force:true}).then(() => {
    console.log('Drop and re-sync DB')
})

app.listen(port,() => console.log('Server Work at server: ',port))
