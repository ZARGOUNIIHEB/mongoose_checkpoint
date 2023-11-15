var jwt = require('jsonwebtoken');
const userSchema = require('../Model/User');

exports.AuthValidation = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        var decoded = jwt.verify(token, process.env.privateKey);
        if (!decoded) { return res.json({ errors }) }
        const user = await userSchema.findById(decoded.id);
        res.user = user;
        next();
    } catch (err) {
        console.log(err)
    }
}