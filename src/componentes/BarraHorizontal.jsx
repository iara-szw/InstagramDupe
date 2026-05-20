import "./BarraHorizontal.css";

function BarraHorizontal({ icono, nombre, texto }) {
  return (
    <div className="barra-horizontal">
      <img
        className="icono"
        src={icono}
        alt={nombre}
      />

      <h3>{nombre}</h3>

      {texto && <p>{texto}</p>}
    </div>
  );
}

export default BarraHorizontal;