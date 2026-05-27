import { useState } from "react";
import userData from "../assets/InfoUsuario";
import PostModal from "./PostModal";
import "./Profile.css";

function Profile({ posts = [] }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const profilePic = posts[0]?.image || "";

  return (
    <div className="profile-page">

      {}
      <div className="profile-header">
        <div className="profile-pic-wrapper">
          <img
            className="profile-pic"
            src={profilePic}
            alt={userData.username}
          />
        </div>

        <div className="profile-details">
          <div className="profile-top-row">
            <h2 className="profile-handle">{userData.username}</h2>
            <button className="btn-edit">Edit profile</button>
            <button className="btn-settings">Configuracion</button>
          </div>

          <div className="profile-stats">
            <span><strong>{posts.length}</strong> posts</span>
            <span><strong>{userData.followers.toLocaleString()}</strong> followers</span>
            <span><strong>{userData.following}</strong> following</span>
          </div>

          <div className="profile-bio">
            <p className="profile-fullname">{userData.fullName}</p>
            <p className="profile-bio-text">{userData.bio}</p>
            <a className="profile-website" href="#">{userData.website}</a>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button className="profile-tab profile-tab--active">
          <span></span>POSTS
        </button>
        <button className="profile-tab">
          <span></span>SAVED
        </button>
        <button className="profile-tab">
          <span></span>TAGGED
        </button>
      </div>

      <div className="profile-grid">
        {posts.map((post) => (
          <div
            key={post.id}
            className="profile-grid-item"
            onClick={() => setSelectedPost(post)}
          >
            <img src={post.image} alt={post.username} className="profile-grid-img" />
            <div className="profile-grid-overlay">
              <span>{post.likes}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}

export default Profile;
