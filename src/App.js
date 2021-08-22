import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User'

// componentlerde değişken render edebiliriz=>
const name = "Mehmet Aziz";

// componentlerde koşullu değişken render edebiliriz
const isLoggedIn = true; //giriş yapmış.

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
      <h1>{
        isLoggedIn
        ? `Benim adım ${name} ve giriş yaptım.`
        : `Benim adım ${name} ve giriş yapmadım`
      }</h1>
      {/* başka bir componentte yapılacak iş için buradan prop gönderiyoruz.
      Angulardaki karşılığı => @Input(): değişkenIsmi; dedesinden yani bizden veriyi bekliyor. */}
      <User 
      name="Mehmet Aziz Algüllü => app.js'den gönderildi."
       age={22}
       address={{
         title: "adres",
         zipcode: "135"
       }} 
       />
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
