import { useCallback, useEffect, useState } from "react";

export const FormTiempoLlegarLinea = (props) => {
  const { parada, bus, setBus } = props;

  const urlApi = "https://api.tmb.cat/v1/ibus/stops/";
  const appId = "0031bdb3";
  const appKey = "1eef12f633798f1b3f0427e9c6e39525";
  const [buses, setBuses] = useState({});

  /* const getBuses = useCallback(async () => {
    const response = await fetch(
      `${urlApi}${parada}?app_id=${appId}&app_key=${appKey}`
    );
    if (!response.ok) {
      return false;
    }
    const dataBuses = await response.json();
    setBuses(dataBuses);
  }, [parada]);

  useEffect(() => {
    getBuses();
  }, [getBuses]);
 */
  const {
    status,
    data: { ibus },
  } = {
    status: "success",
    data: {
      ibus: [
        {
          routeId: "2130",
          line: "V13",
          "text-ca": "5 min",
          "t-in-s": 356,
          destination: "Av. Tibidabo",
          "t-in-min": 5,
        },
        {
          routeId: "1960",
          line: "196",
          "text-ca": "8 min",
          "t-in-s": 483,
          destination: "Bellesguard",
          "t-in-min": 8,
        },
        {
          routeId: "1230",
          line: "123",
          "text-ca": "17 min",
          "t-in-s": 1039,
          destination: "Iradier",
          "t-in-min": 17,
        },
      ],
    },
  };

  const escogerLinea = (e) => {
    const linea = e.target.value;
    if (linea === "") {
      setBus({});
      return;
    }
    if (status === "success") {
      const busLinea = ibus.find((busLinea) => busLinea.line === linea);
      setBus(busLinea);
    }
  };
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select
        id="tiempo-linea"
        value={bus.line}
        onChange={(e) => escogerLinea(e)}
      >
        <option value="">Elige línea</option>
        {ibus.map(({ line }) => (
          <option value={line} key={line}>
            {line}
          </option>
        ))}
      </select>
    </form>
  );
};
