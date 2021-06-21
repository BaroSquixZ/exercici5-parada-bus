import { useState } from "react";
import { Display } from "./components/Display.js";
import { FormNumParada } from "./components/FormNumParada.js";
import { FormTiempoLlegarLinea } from "./components/FormTiempoLlegarLinea.js";
import { TiempoParaLinea } from "./components/TiempoParaLinea.js";

function App() {
  const [bus, setBus] = useState({});
  const [error, setError] = useState(false);
  const [parada, setParada] = useState("2775"); //Variable que seteja el POL

  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>Parada nº 15</h1>
        <Display />
        <TiempoParaLinea bus={bus} />
      </header>
      <section className="forms">
        <FormNumParada setError={setError} setBus={setBus} bus={bus} />
        <FormTiempoLlegarLinea parada={parada} bus={bus} setBus={setBus} />
      </section>
    </div>
  );
}

export default App;
