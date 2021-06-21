export const TiempoParaLinea = (props) => {
  const { tiempo, linea } = props;
  return (
    <h2>
      Tiempo para la línea {linea}: {tiempo}
    </h2>
  );
};
