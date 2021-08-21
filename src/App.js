import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

// componentlerde değişken render edebiliriz=>
const name = "Mehmet Aziz";

function App() {
  return (
    <div className="App">
      {/* Header componentini çalıştırdık. eğer içinde
       bir children yoksa eğer <Header></Header> olarak
       kullanılmamalıymış.*/}
      <Header />
      {/* komponentte değişken render etmek*/}
      <h1>{name}</h1>
      <h1>{`benim adım => ${name}`}</h1>
    </div>
  );
}
/* jsx nedir ? => burası bir javascript dökümanı ve içinde html yazabiliyoruz... return içinde yani.
      bunun sebebini jsx veriyor. bu yazdıklarımız birer html değil aslında. javascript fakat
      arka tarafta html'e dönüştürülüyor. index.html'de root var, o roota gönderiliyor o da doma yolluyor muhtemelen.
       */

/*
kural => bazı özel keyword'ler var. bunlar jsx içinde yazılamaz. if,for(label for'undan bahsediyoruz. zaten kendisi
htmlFor olarak açıyor), class(className yazcan)
*/

/*
    kural=> bu return kısmında bir div olmadan proje ayağa kalkmaz.
    çünkü kapsayıcı bir element şart. div kullanılmayadabilir.
    "<>"
    "</>" şeklinde fragment isimli şeyi de kullanabilirsin. yeter ki return altındaki her şeyi kapsayan en az tek bir şey olsun.
    */

export default App;
