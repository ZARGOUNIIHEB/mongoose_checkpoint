const ContactSchema = require('../Model/Contact');

const getAllUsers = async (req, res) => {
    try {
        const contact = await ContactSchema.find();
        res.status(200).json({ msg: 'you got all the contacts', contact });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const addNewContact = async (req, res) => {
    try {
        const newContact = new ContactSchema(req.body);
        console.log("New Contact", req.body);
        await newContact.save();
        res.status(200).json({ msg: 'you added new Contact', newContact });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const updatedContact = await ContactSchema.findByIdAndUpdate(id, { $set: { ...req.body } });
        console.log("Updated Contact", updatedContact);
        res.status(200).json({ msg: 'Contact updated', updatedContact });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const contact = await ContactSchema.findById(id);
        res.status(200).json({ msg: 'Contact', contact });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const removeContact = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const deletedContact = await ContactSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Contact', deletedContact });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};



module.exports = { getAllUsers, addNewContact, updateContact, getContactById, removeContact };