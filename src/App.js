import logo from './logo.svg';
import './App.css';
// state tanımlıyoruz
import { useState } from "react";

function App() {
  //State'i böyle tanımlıyoruz. const[stataName, functionOfChangeName] = useState(initialState);
  const [name, setName] = useState("Mehmet Aziz");

  return (
    <div className="App">
      <h1>Merhaba!</h1>
    </div>
  );
}

export default App;
