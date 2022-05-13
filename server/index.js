require('dotenv').config()
const express = require('express');
const sequelize = require('./db_con');
const model = require('./model/model');
const cors = require('cors');
const path = require('path');
const router = require('./router/index')
const appRoot = require('app-root-path');

const PORT = process.env.PORT || 5002

const app = express()
app.use(cors())
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/api',router)

app.get('/', function (req, res) {
    res.sendFile(appRoot + '/view/index.html');
});

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log("Server started!"))
    }catch(e){
        console.log(e)
    }
}

start() 