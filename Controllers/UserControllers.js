const userSchema = require('../Model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        //envoi du Data
        const { name, email, password } = req.body;
        const found = await userSchema.findOne({ email });
        if (found) {
            return res.json({ msg: 'Deja Inscrit' })
        }
        const newUser = await new userSchema(req.body);

        // l'utilisation de bcrypt
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        newUser.password = hash;

        newUser.save();
        res.status(200).json({ msg: 'Bienvenue' });
    } catch (err) {
        console.log(err);
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const found = await userSchema.findOne({ email });
        if (!found) { return res.json({ msg: 'email introuvable' }) };
        const match = bcrypt.compare(password, found.password);
        if (!match) { return res.json({ msg: 'password fausse' }) };
        // Partie Token
        const payload = { id: found._id };
        var token = jwt.sign(payload, process.env.privateKey);
        res.json({ msg: 'you are welcome login ', found, token });
        console.log('Logged in to ypur session successfully', email, password);

    } catch (err) {
        console.log(err);
    }
}