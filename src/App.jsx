import { useEffect, useState } from "react";
import './App.css'
import Feed from './componentes/Feed'
import menu from './assets/menu'
import { ObtenerImagenes } from "./services/CatAPI";
import Tabla from './componentes/Tabla'
import logo from './assets/logo.png'

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
<img id="logo" src={logo}></img>
<Tabla id="sidebar" filas={menu}></Tabla>
  <Feed posts={posts}></Feed>

</>

)
}

export default App
