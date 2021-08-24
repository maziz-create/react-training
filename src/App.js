import './App.css';
import { useState, useEffect } from 'react';

/*
  useEffect(react'tan import edildi.) 
  açıklama => bir state tanımladık. state değiştiği anda ilgili component render edilecek.
  peki biz herhangi bir state'in güncellenme durumunu yani render edilme durumunu nasıl yakalayabiliriz?
  bu eventi nasıl yakalayabiliriz?

  kural => useState de dahil, useEffect gibi hooklar bir if yapısının içinde olmamalı. componentin 
  tepesinde bulunmalı ve herhangi bir kontrole tabi olmamalı.
*/

function App() {
  // ilk state'imiz
  const [number, setNumber] = useState(0);

  // sonradan eklediğimiz içinci state'imiz.
  const [name, setName] = useState("Mehmet");

  useEffect(() => { /* herhangi bir state güncellendiği anda konsola yaz. */
    console.log("state güncellendi!");
  })

  useEffect(() => {/* fark => [] budur. buna dependency array deniliyor. 
    anlamı => component mount edildiğinde yakala. monte edildiğinde.. */
    console.log("component mount edildi!");
  }, []);

  useEffect(() => {/* fark => [number] budur. 
    anlamı => sadece number state güncellendiği anda konsola yaz. 
    */
    console.log("number state güncellendi!");
  }, [number]);

  useEffect(() => {
    console.log("number veya name state güncellendi!");
  }, [number, name]);

  return (
    <div className="App">
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h2>{name}</h2>
      <button onClick={() => setName("Mehmet değil Mehmet Aziz")}>Click</button>
    </div>
  );
}

export default App;
