import React from 'react'
import { useState } from "react";

function ThirdState() {
    // sonradan eklediğimiz üçüncü state grubumuz [1].
    const [number, setNumber] = useState(0);

    return (
        <div align="center">
            <h2>Üçüncü state'e dair</h2>
            <h3>{number}</h3>
            <button onClick={() => setNumber(number + 1)}>Artır</button>
        </div>
    )
}

export default ThirdState
