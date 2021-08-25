import React from "react";
import { useState, useEffect } from "react";

// formu submit ettikten sonra değerlerini sıfırlıyoruz.
const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmit = (e) => {
        e.preventDefault(); //form submit olduğunda sayfa yenilenmesini önler.

        // validation
        if (form.fullname === '' || form.phone_number === '') {
            console.log("An unexpected error occured");
            return false;
        }

        addContact([...contacts, form]);
    }

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    placeholder="Full Name"
                    value={form.fullname}
                    name="fullname"
                    onChange={onChangeInput} />
            </div>

            <div>
                <input
                    placeholder="Phone Number"
                    value={form.phone_number}
                    name="phone_number"
                    onChange={onChangeInput} />
            </div>

            <br />

            <button>Add</button>

        </form>
    )
}

export default Form
