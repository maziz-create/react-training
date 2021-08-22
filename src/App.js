import logo from './logo.svg';
import './App.css';
// state tanımlıyoruz
import { useState } from "react";
/* 
  state nedir ? 
  uygulamamızda değerinin değişme potansiyeli yüksek olan şeyleri taşıyan javascript objesidir.
  istediğimiz bir anda istediğimiz bir değeri değiştirebiliriz. mesela birisi mesaj attığında
  sayfayı yenilemeden o mesajı görmek gibi.
*/

// not: herhangi bir state güncellendiği anda return işlemi baştan render edilir.
function App() {
  //State'i böyle tanımlıyoruz. const[stataName, functionOfChangeName] = useState(initialState);
  const [name, setName] = useState("Mehmet Aziz");

  return (
    <div className="App">
      <h1>Merhaba, {name}!</h1>
      <button onClick={() => setName("isim değiştirildi => Ahmet")}>Click</button>
    </div>
  );
}

export default App;
