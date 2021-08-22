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

  //State'in initialValue ' sunu array olarak verip aşağıda map ederek yazdırabiliriz.
  const [friends, setFriends] = useState(["Deniz", "Samet"]);

  return (
    <div className="App">
      <h1>Merhaba, {name}!</h1>
      <button onClick={() => setName("isim değiştirildi => Ahmet")}>Click</button>

      {//key verme sebebimiz => buralarda map gibi şeyleri kullanman için her bi dive unique key vermek zorundasın
        friends
          .map((friend, index) => (
            <div key={index}>{friend}</div>
          ))
      }
      <br />
      <br />
      {/* 
          friends dizisine yeni eleman ekledik. dikkat edilmesi gerekenler:
          => dizinin initialState'i bir dizi olduğu için biz de dizi olarak verdik. 
          Yoksa yukarıdaki mapleme işlemi sıkıntı çıkartır.
          => önceki değerleri vermeyip direkt Onuru verirsek eski değerler gider.
          Bunun için    ...eskiDizi  mevzusu var, biliyorsun.
      */}
      <button onClick={() => setFriends([...friends, ['Yeni Kişi => Onur']])}>Click</button>
    </div>
  );
}

export default App;
