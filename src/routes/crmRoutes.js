import { get } from "mongoose"
import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact, helloWorld, parrotMessage } from "../controllers/crmController"

const routes = (app) => {
// get all contacts
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next()
    }, getContacts)
    
// post new contact
    .post(addNewContact)

    app.route('/contact/:contactId')
// get specific contat
    .get(getContactWithID)

// update contact
    .put(updateContact)

//  delete a contact
    .delete(deleteContact)

    app.route('/helloWorld')
    .get(helloWorld)

    app.route('/parrot')
    .post(parrotMessage)
}

export default routes;