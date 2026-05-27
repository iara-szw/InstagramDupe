import { useState } from "react";
import Post from "./Post";
import PostModal from "./PostModal";
import "./feed.css";

function Feed({ posts = [] }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <div className="feed">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              img={post.image}
              user={post.username}
              likes={post.likes}
              post={post}
              onOpenModal={setSelectedPost}
            />
          ))
        ) : (
          <h2>Cargando posts...</h2>
        )}
      </div>

      {selectedPost && (<PostModal post={selectedPost} onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}

export default Feed;
