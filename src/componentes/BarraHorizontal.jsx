function BarraHorizontal({img,nombre,texto }){
    return (<>
    <div id="barra">
        <img src={img}></img>
        <h5>{nombre}</h5>
        {texto && <p>{texto}</p>}
    </div>
    
    </>)
}
export default BarraHorizontal