import { useState, useEffect, useCallback } from "react";
import { BusDisplay } from "./BusDisplay.js";

export const Display = () => {
  const [busQuePasanPorLaParada, setBusQuePasanPorLaParada] = useState({
    bus: [
      {
        linea: "V16",
        destino: "Universitat",
        tiempo: "1min",
      },
      {
        linea: "H12",
        destino: "Hospital",
        tiempo: "6min",
      },
      {
        linea: "M14",
        destino: "Psiquiatra",
        tiempo: "10min",
      },
      {
        linea: "L53",
        destino: "Bomberos",
        tiempo: "14min",
      },
    ],
  });
  const [infoToDisplay, setInfoToDisplay] = useState([]);

  const [busAMostrar, setBusAMostrar] = useState(0);

  /* const cambiarPropiedadBottomBusAMostrar = () => {
    for (const bus of busQuePasanPorLaParada.bus) {
      setTimeout(() => {
        setBusAMostrar(busAMostrar + 30);
        console.log(busAMostrar);
      }, 3000 * bus);
    }
  }; */

  /*  useEffect(() => {
    cambiarPropiedadBottomBusAMostrar();
  }, [busQuePasanPorLaParada.bus.length]); */

  const displayInfoCallback = useCallback(() => {
    setInfoToDisplay(
      busQuePasanPorLaParada.bus.map((bus) => <BusDisplay bus={bus} />)
    );
  }, [busQuePasanPorLaParada.bus]);

  const displayInfo = useEffect(() => {
    displayInfoCallback();
  }, [displayInfoCallback]);
  return (
    <div className="display">
      <div className="display-container" /* style={{ bottom: busAMostrar }} */>
        {infoToDisplay}
      </div>
    </div>
  );
};
