export const FormTiempoLlegarLinea = (props) => {
  const { setTiempo, linea, setLinea } = props;
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
    if (status === "success") {
      setLinea(e.target.value);
    }
  };
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea" value={linea} onChange={(e) => escogerLinea(e)}>
        <option value="">Elige línea</option>
        {ibus.map((bus) => (
          <option value={bus.line} key={bus.line}>
            {bus.line}
          </option>
        ))}
      </select>
    </form>
  );
};
