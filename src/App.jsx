import { useEffect, useState } from "react";
import './App.css'
import menu from './assets/menu'
import { ObtenerImagenes } from "./services/CatAPI";
import Tabla from './componentes/Tabla'
function App() {
  const [posts, setPosts] = useState([]);
useEffect(() => {
  const fetchCats = async () => {
    const data = await ObtenerImagenes();

    const formattedPosts = data.map((cat, index) => ({
      id: cat.id,
      image: cat.url,
      username: `cat_user_${index}`,
      likes: Math.floor(Math.random() * 1000)
    }));

    setPosts(formattedPosts);
  };

  fetchCats();
}, []);
const [postActual,SetPost]= useState();
  return (

<>
<Tabla filas={menu}></Tabla>


</>

)
}

export default App
