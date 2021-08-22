// bilgi => indirilen react eklentisi sayesinde rfce + tab yapınca react otomatik olarak geliyor.
import React from 'react'
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

export default Counter
