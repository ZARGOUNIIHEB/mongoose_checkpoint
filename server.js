const express = require('express');
const ConnectDb = require('./Config/ConnectDb');
const ContactRoute = require('./Routes/ContactRoutes');
const cors = require('cors');
const userRoute = require('./Routes/UserRoutes');
require('dotenv').config();

const app = express();

const port = 5003;

ConnectDb();

app.use(cors());
app.use(express.json());


//Route principale pour les contacts
app.use('/', ContactRoute);

//Route principale pour l'authentification 
app.use('/auth', userRoute);







app.listen(port, (err) =>
    err ? console.log(err) : console.log(`You are connected successfully to the port ${port}`));