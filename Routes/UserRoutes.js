const express = require('express');

const userRoute = express.Router();

const { register, login } = require('../Controllers/UserControllers');

const { AuthValidation } = require('../Middleware/AuthValidation');

const { RegisterValidation, LoginValidation, Validation } = require('../Middleware/RegisterValidation');

userRoute.post('/register', RegisterValidation, Validation, register);


userRoute.post('/login', LoginValidation, Validation, login);

userRoute.get('/moncompte', AuthValidation, async (req, res) => {
    res.send(req.user);
})







module.exports = userRoute;