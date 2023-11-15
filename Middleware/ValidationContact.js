

const emailValidation = (req, res, next) => {
    const email = req.body.email;
    console.log('This is the mail from Body request:', email)
    next()
}

module.exports = { emailValidation };