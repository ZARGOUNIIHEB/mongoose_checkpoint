const mongoose = require('mongoose');

const ConnectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://ihebzargounipr:07112023@cluster0.jjgehee.mongodb.net/?retryWrites=true&w=majority');
        console.log('You are connected to your database');
    } catch (err) {
        console.log(err)
    }
}

module.exports = ConnectDb;