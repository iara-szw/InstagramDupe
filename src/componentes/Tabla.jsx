import './Tabla.css';
import BarraHorizontal from './BarraHorizontal';

function Tabla({ filas = [], onNavigate }) {
  return (
    <div id="tabla">
      {filas.map((fila) => (
        <div key={fila.id} onClick={() => {
          if (fila.nombre === "Profile") onNavigate("profile");
          else onNavigate("feed");
        }}>
          <BarraHorizontal
            icono={fila.icono}
            nombre={fila.nombre}
            texto={fila.texto}
          />
        </div>
      ))}
    </div>
  );
}

export default Tabla;
