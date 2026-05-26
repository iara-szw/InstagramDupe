import "./Stories.css";

function Stories({ posts = [] }) {
  const stories = posts.slice(0, 8);

  return (
    <div className="stories-wrapper">
      <div className="stories-container">
        {stories.map((post) => (
          <div key={post.id} className="story-item">
            <div className="story-avatar-ring">
              <img
                className="story-avatar"
                src={post.image}
                alt={post.username}
              />
            </div>
            <span className="story-username">{post.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
