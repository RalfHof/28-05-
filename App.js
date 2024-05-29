
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");
  const[yourName, setYouName] =useState("Fremder")

  function handleClick() {
    console.log("geklickt");
  }

  function handleOnMouseLeave() {
    setColor("white");
  }

  function handleOnMouseOver() {
    setColor("black");
  }

  function handleOnChange(event) {
    setYouName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hallo {yourName}</h1>
      <input onChange={handleOnChange} placeholder="Eingabe Feld" />


      <button
        style={{ backgroundColor: color }}
        onMouseLeave={handleOnMouseLeave}
        onMouseOver={handleOnMouseOver}
        onClick={handleClick}
      >
        Bestätigen
      </button>
    </div>
  );
}

export default App;