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

/*
    not: jquery ile react'ın render etme mekanizması arasındaki fark nedir?
    jquery => render edilecek şeyin yeni şey ile aynı olup olmadığına bakmaz, render eder.
    react => render edilecek şey ile yeni şey aynı ise render etmez!
    fakat react'ın da tekrar render edebildiği durumlar olabiliyor. bunlara memorise konularında 
    değinilecek.
*/
