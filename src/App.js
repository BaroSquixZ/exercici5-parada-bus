import { useState } from "react";
import { Display } from "./components/Display.js";
import { FormTiempoLlegarLinea } from "./components/FormTiempoLlegarLinea.js";
import { TiempoParaLinea } from "./components/TiempoParaLinea.js";

function App() {
  const [bus, setBus] = useState({});
  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>Parada nº 15</h1>
        <Display />
        <TiempoParaLinea bus={bus} />
      </header>
      <section className="forms">
        <form>
          <NumParada> <label htmlFor="num-parada">Parada nº: </label></NumParada>
          <input type="number" id="num-parada" />
          <button type="submit">Buscar</button>
        </form>
        <FormTiempoLlegarLinea bus={bus} setBus={setBus} />
      </section>
    </div>
  );
}

export default App;
