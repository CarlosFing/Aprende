const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const req = require('express/lib/request')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'huyy0xpi0uhj3vq0',
    password: 'k9q4c6118k08ly45',
    database: 'jxwjgo8vnrtndvld'
}

//Middlewares---------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

//Routes-----------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.get('/api', routes)
app.get('/act1mat', routes)
app.get('/act2mat', routes)
app.get('/act3mat', routes)
app.get('/act4mat', routes)
app.get('/act5mat', routes)
app.get('/act1esp', routes)
app.get('/act2esp', routes)
app.get('/act3esp', routes)

//Server running---------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})