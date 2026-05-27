import { useState } from "react";
import "./PostModal.css";
import likesIMG from "../assets/likes.png";
import comentarIMG from "../assets/comentar.png";
import mensajesIMG from "../assets/mensajes.png";
import guardarIMG from "../assets/guardar.png";

const fakeComments = [
  { id: 1, user: "salvadxrx", text: "Holuu", time: "1d", likes: 1 },
  { id: 2, user: "edubarros101", text: "Muy lindo el gato ", time: "1d", likes: 1 },
  { id: 3, user: "theactornekhiataylor", text: "Linda foto", time: "2d", likes: 0 },
  { id: 4, user: "organic__al", text: "Fotito", time: "3d", likes: 4 },
];

function PostModal({ post, onClose }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");

  if (!post) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <button className="modal-close" onClick={onClose}>X</button>

      <button className="modal-arrow modal-arrow--left">&#8249;</button>
      <button className="modal-arrow modal-arrow--right">&#8250;</button>

      <div className="modal-container">
        <div className="modal-image-side">
          <img src={post.image} alt="post" className="modal-img" />
        </div>

        <div className="modal-info-side">
          <div className="modal-header">
            <img src={post.image} alt={post.username} className="modal-avatar" />
            <div className="modal-header-info">
              <span className="modal-username">{post.username}</span>
            </div>
          </div>

          <div className="modal-divider" />

          <div className="modal-comments-area">
            <div className="modal-comment">
              <img src={post.image} alt={post.username} className="modal-comment-avatar" />
              <div className="modal-comment-body">
                <p className="modal-comment-text">
                  <strong>{post.username}</strong> Foto de gatito
                </p>
                <div className="modal-comment-meta">
                  <span>3d</span>
                  <span>See translation</span>
                </div>
              </div>
            </div>

            {fakeComments.map((c) => (
              <div key={c.id} className="modal-comment">
                <div className="modal-comment-avatar-placeholder" />
                <div className="modal-comment-body">
                  <p className="modal-comment-text">
                    <strong>{c.user}</strong> {c.text}
                  </p>
                  <div className="modal-comment-meta">
                    <span>{c.time}</span>
                    {c.likes > 0 && <span>{c.likes} like</span>}
                    <span>Responder</span>
                  </div>
                </div>
                <span className="modal-comment-like"><img src={likesIMG}></img></span>
              </div>
            ))}
          </div>

          <div className="modal-divider" />

          <div className="modal-actions">
            <div className="modal-actions-left">
              <img
                src={likesIMG}
                alt="like"
                className={`modal-action-icon ${liked ? "liked" : ""}`}
                onClick={() => setLiked(!liked)}
              />
              <img src={comentarIMG} alt="comentar" className="modal-action-icon" />
              <img src={mensajesIMG} alt="mensajes" className="modal-action-icon" />
            </div>
            <img
              src={guardarIMG}
              alt="guardar"
              className={`modal-action-icon ${saved ? "saved" : ""}`}
              onClick={() => setSaved(!saved)}
            />
          </div>

          <div className="modal-likes-info">
            <p className="modal-liked-by">
              Liked by <strong>Cat</strong> and{" "}
              <strong>{post.likes.toLocaleString()} others</strong>
            </p>
            <p className="modal-timestamp">Hace 3 dias</p>
          </div>

          <div className="modal-divider" />

          <div className="modal-add-comment">
            <span className="modal-emoji-btn"></span>
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="modal-comment-input"
            />
            {comment && (
              <button
                className="modal-post-btn"
                onClick={() => setComment("")}
              >
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
