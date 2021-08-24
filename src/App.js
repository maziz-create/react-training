import './App.css';
import { useState, useEffect } from 'react';
import ThirdState from './components/ThirdState';

/*
  LifeCycle nedir? componentler de insanlar gibi yaşar ve ölür.
  biz burada bu yaşam döngüsünü kontrol ettik.
  yaşadıkları ve öldükleri anlarda neler olacağına dair işlemler yaptık.
  bunları yaparken useEffect(+2overload) kullandık.
*/

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

  // sonradan eklediğimiz üçüncü state grubumuz [2]. (ilki ThirdState.js ' de yer alıyor.)
  const [isVisible, setIsVisible] = useState(true);

  /* ilk ve ikinci state'e dair useEffect ve mount kullanımları */
  useEffect(() => { /* herhangi bir state güncellendiği anda konsola yaz. */
    console.log("herhangi bir state güncellendi!");
  })

  useEffect(() => {/* fark => [] budur. buna dependency array deniliyor. 
    anlamı => component mount edildiğinde yakala. monte edildiğinde.. */
    console.log("component mount edildi!");
  }, []);

  useEffect(() => {/* fark => [number] budur. 
    anlamı => sadece number state güncellendiği anda konsola yaz. 
    */
    console.log("number state güncellendi!");

    /* NOT! burası component unmount edildiğini algılar. Önemlidir!
    Bazen componentler kaldırılır fakat componente veri sağlayan şey kaldırılmadığı için
    performans kaybı, memory leak mevzuları oluşur. Component unmount edildiği zaman 
    clearInterval ile gereksiz şeyleri kaldırıyoruz.
    */
    return () => clearInterval("durdurmak istediğin method, mevzular");
  }, [number]);

  useEffect(() => {
    console.log("number veya name state güncellendi!");
  }, [number, name]);


  return (
    <div className="App">
      <h2>İlk state'e dair</h2>
      <h3>{number}</h3>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h2>İkinci state'e dair</h2>
      <h3>{name}</h3>
      <button onClick={() => setName("Mehmet değil Mehmet Aziz")}>Click</button>

      <hr />

      {isVisible && <ThirdState />}
      <button onClick={() => setIsVisible(!isVisible)}>Üçüncü State'i kaldır veya göster!</button>
    </div>
  );
}

export default App;
