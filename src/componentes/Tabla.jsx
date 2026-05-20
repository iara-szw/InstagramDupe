
import './Tabla.css'
import  BarraHorizontal from './BarraHorizontal'
function Tabla({ filas =[]}) {
  return (
    <>
        <div id="tabla">

     {filas.map((fila) => (
        <BarraHorizontal
          key={fila.id}
          icono={fila.icono}
          nombre={fila.nombre}
          texto={fila.texto}
        />
      ))}
      </div>
</>
     
  )
}
export default Tabla;

