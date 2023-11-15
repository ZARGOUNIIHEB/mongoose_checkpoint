const express = require('express');
const { getAllUsers, addNewContact, updateContact, getContactById, removeContact } = require('../Controllers/ContactControllers');
const { emailValidation } = require('../Middleware/ValidationContact');


const ContactRoute = express.Router();

ContactRoute.use(express.json());

// route get All Contact
// http://localhost:5003/contact/getAll
ContactRoute.get('/contact/getAll', getAllUsers)

// route post Contact
// http://localhost:5003/contact/addContact
ContactRoute.post('/contact/addContact', emailValidation, addNewContact)


// route update Contact
// http://localhost:5003/contact/updateContact/:id
ContactRoute.put('/contact/updateContact/:id', updateContact)

// route get contact by id
// http://localhost:5003/contact/getContact/:id
ContactRoute.get('/contact/getContact/:id', getContactById)


// route delete Contact
// http://localhost:5003/contact/deleteContact/:id
ContactRoute.delete('/contact/deleteContact/:id', removeContact)

module.exports = ContactRoute;