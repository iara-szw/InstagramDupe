import "./Post.css";
import likesIMG from "../assets/likes.png";
import comentarIMG from "../assets/comentar.png";
import mensajesIMG from "../assets/mensajes.png";
import guardarIMG from "../assets/guardar.png";

function Post({ img, user, likes }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="usuario">
          <img
            className="foto-perfil"
            src={img}
            alt=""
          />

          <h4>{user}</h4>
          <span className="tiempo">• 5h</span>
        </div>

        <h3>⋯</h3>
      </div>

      <img
        className="post-img"
        src={img}
        alt="post"
      />

      <div className="BarraOpciones">
        <div className="botones-izq">
          <img src={likesIMG} alt="" />
          <img src={comentarIMG} alt="" />
          <img src={mensajesIMG} alt="" />
        </div>

        <img src={guardarIMG} alt="" />
      </div>
<div className="extras">

      <h4 className="likes">
        {likes} likes
      </h4>
      <p className="caption">
        <strong>{user}</strong> cat🐱
      </p>

      <p className="comentarios">
        Ver los 100 comentarios
      </p>

      <p className="add-comment">
        Agregar un comentario
      </p>
      </div>
    </div>
  );
}

export default Post;