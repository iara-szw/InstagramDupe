import { useEffect, useState } from "react";
import './App.css';
import Feed from './componentes/Feed';
import Stories from './componentes/Stories.jsx';

import RightSidebar from './componentes/RightSidebar';
import Tabla from './componentes/Tabla';
import menu from './assets/menu';
import { ObtenerImagenes } from "./services/CatAPI";
import logo from './assets/logo.png';

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

  return (
    <>
      <Tabla id="sidebar" filas={menu} ></Tabla>
      <div className="main-content">
        <Stories posts={posts}></Stories>
        <Feed posts={posts}></Feed>
      </div>
      <RightSidebar posts={posts}></RightSidebar>
    </>
  );
}

export default App;
