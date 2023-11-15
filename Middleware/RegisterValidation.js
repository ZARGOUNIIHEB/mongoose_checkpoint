const { body, validationResult } = require('express-validator');

exports.RegisterValidation = [
    body('email', 'Please provide a Valide Email').isEmail(),
    body('password', 'Please provide a Valide Password').isLength({ min: 8 })

]

exports.LoginValidation = [
    body('email', 'Please provide a Valide Email').isEmail()
]

exports.Validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}