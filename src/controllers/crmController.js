import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then(savedContact => res.json(savedContact))
        .catch(err => res.status(500).send(err));
};