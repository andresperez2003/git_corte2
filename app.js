const express = require('express')

//app conectar por el puerto local el express
//especificar los middleware a utilizar



const app = express()
const workerRoutes = require('./routes/worker')
const userRoutes = require('./routes/user')
const API_VERSION = 'api/v1'


//Pruebas con extesion Rest Client
app.use(express.json())


//Pruebas desde postman
app.use(express.urlencoded({extended:true}))


app.use(`/${API_VERSION}/workers`, workerRoutes);
app.use(`/${API_VERSION}/users`, userRoutes);

module.exports = app;
