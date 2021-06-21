import { useState } from "react";
import { Display } from "./components/Display.js";
import { FormTiempoLlegarLinea } from "./components/FormTiempoLlegarLinea.js";
import { TiempoParaLinea } from "./components/TiempoParaLinea.js";

function App() {
  const [tiempo, setTiempo] = useState("");
  const [linea, setLinea] = useState("");
  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>Parada nº 15</h1>
        <Display />
        <TiempoParaLinea tiempo={tiempo} linea={linea} />
      </header>
      <section className="forms">
        <form>
          <label htmlFor="num-parada">Parada nº: </label>
          <input type="number" id="num-parada" />
          <button type="submit">Buscar</button>
        </form>
        <FormTiempoLlegarLinea
          setTiempo={setTiempo}
          linea={linea}
          setLinea={setLinea}
        />
      </section>
    </div>
  );
}

export default App;
