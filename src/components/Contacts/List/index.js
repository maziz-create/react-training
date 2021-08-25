import { useState } from "react";

function List({ contacts }) {

    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        // Object.keys => item'in keylerini veriyor yani fullname ve phone_number.
        // some => herhangi birisi yani phone_number ya da fullname
        return Object.keys(item).some((key) =>
            item[key] //item.fullname ya da item.phone_number
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        )
    })

    // console.log(filtered); //test

    return (
        <div>
            <input
                placeholder="filter contact"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <ul className="list">
                {
                    filtered.map((contact, index) => (
                        <li key={index} >{contact.fullname}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
