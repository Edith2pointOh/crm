import mongoose from "mongoose";
import { ContactSchema, parrotSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);
const Parrot = mongoose.model('Parrot', parrotSchema);

export const addNewContact = (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then(savedContact => res.json(savedContact))
        .catch(err => res.status(500).send(err));
};

export const getContacts = (req, res) => {
    Contact.find({})
        .then(contacts => res.json(contacts))
        .catch(err => res.status(500).send(err));
};

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId)
        .then(contact => res.json(contact))
        .catch(err => res.status(500).send(err));
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true })
        .then(updatedContact => res.json(updatedContact))
        .catch(err => res.status(500).send(err));
};

export const deleteContact = (req, res) => {
    Contact.deleteOne({ _id: req.params.contactId })
        .then(() => res.json({ message: 'Contact deleted successfully' }))
        .catch(err => res.status(500).send(err));
};

// little self post test
export const parrotMessage = (req, res) => {
    const newParrot = new Parrot(req.body);
    newParrot.save()
        .then(savedParrot => res.json(savedParrot))
        .catch(err => res.status(500).send(err));
};