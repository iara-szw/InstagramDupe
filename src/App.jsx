import { useEffect, useState } from "react";
import './App.css';
import Feed from './componentes/Feed';
import Stories from './componentes/Stories';
import RightSidebar from './componentes/Rightsidebar';
import Profile from './componentes/Profile';
import Tabla from './componentes/Tabla';
import menu from './assets/menu';
import { ObtenerImagenes } from "./services/CatAPI";
import logo from './assets/logo.png';

function App() {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState("feed");

  useEffect(() => {
    const fetchCats = async () => {
      const data = await ObtenerImagenes();
      const formattedPosts = data.map((cat, index) => ({
        id: cat.id,
        image: cat.url,
        username: `cat_user_${index}`,
        likes: Math.floor(Math.random() * 1000),
      }));
      setPosts(formattedPosts);
    };
    fetchCats();
  }, []);

  return (
    <>
      <Tabla filas={menu} onNavigate={setView} />

      {view === "feed" && (
        <>
          <div className="main-content">
            <Stories posts={posts} />
            <Feed posts={posts} />
          </div>
          <RightSidebar posts={posts} />
        </>
      )}

      {view === "profile" && (
        <div className="main-content main-content--wide">
          <Profile posts={posts} />
        </div>
      )}
    </>
  );
}

export default App;
