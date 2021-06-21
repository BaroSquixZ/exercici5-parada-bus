import { useState } from "react";

export const BusDisplay = (props) => {
  const {
    bus: { linea, destino, tiempo },
    busAMostrar,
  } = props;

  return (
    <div className="bus">
      <span className="linea">{linea}</span>
      <span className="destino">{destino}</span>
      <span className="tiempo">{tiempo}</span>
    </div>
  );
};
