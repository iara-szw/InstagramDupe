import  BarraHorizontal from './BarraHorizontal'
function Tabla({ filas }) {
  return (
    <>
        <div id="tabla">

     {filas.map((fila) => (
        <BarraHorizontal
          key={fila.id}
          img={fila.img}
          nombre={fila.nombre}
          texto={fila.texto}
        />
      ))}
      </div>
</>
     
  )
}
export default Tabla;

