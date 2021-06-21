export const TiempoParaLinea = (props) => {
  const { bus } = props;
  return (
    <h2>
      Tiempo para la línea {bus.line}: {bus["text-ca"]}
    </h2>
  );
};
