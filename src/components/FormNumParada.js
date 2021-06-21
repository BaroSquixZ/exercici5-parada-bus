export const FormNumParada = (props) => {
feature-numparadas
    return

}
=======
  const { setError, bus, setBus } = props;
  const urlAPI = "https://api.tmb.cat/v1/ibus/stops/2775?";
  const appId = "b3956491";
  const appKey = "b7af445677be260f52d3d02c5c4bc9de";

  const tmbAPI = {
    status: "success",
    data: {
      ibus: [
        {
          routeId: "0230",
          line: "23",
          "text-ca": "8 min",
          "t-in-s": 520,
          destination: "Parc Logístic",
          "t-in-min": 8,
        },
      ],
    },
  };

  const comprobarEstado = (e) => {
    e.preventDefault();
    const linea = buscarLinea(e);
    console.log(linea);
    const response = tmbAPI;
    if (response.status !== "success") {
      setError(true);
      console.log("hola");
      return false;
    }
    if (response.status === "success") {
      const busLinea = response.data.ibus.find(
        (busLinea) => busLinea.line === linea
      );
      setBus(busLinea.line);
    }
  };

  const buscarLinea = (e) => {
    setBus(e.target.value);
    console.log(buscarLinea);
  };

  return (
    <form>
      <label htmlFor="num-parada">Parada nº: </label>
      <input
        type="number"
        id="num-parada"
        value={bus.line}
        onChange={buscarLinea}
      />
      <button type="submit" onClick={comprobarEstado}>
        Buscar
      </button>
    </form>
  );
};
main
