import React from "react";
import List from './List';
import Form from './Form';
import {} from './styles.css';

import { useState, useEffect } from 'react'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "defaultKayit1",
            phone_number: "1234123"
        },
        {
            fullname: "defaultKayit2",
            phone_number: "1255123"
        },
        {
            fullname:"aziz",
            phone_number:"1234123"
        },
        {
            fullname:"feyza",
            phone_number:"1234123"
        },
        {
            fullname:"esra",
            phone_number:"1234123"
        }
    ]);

    useEffect(() => {

    }, [contacts])

    return (
        <div id="container">
            {/* Form'dan aldığımız verileri list'e gönderiyoruz. */}
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
