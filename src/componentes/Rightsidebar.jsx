import "./RightSidebar.css";

function RightSidebar({ posts = [] }) {
  const currentUser = posts[0];
  const suggestions = posts.slice(1, 6);

  if (!currentUser) return null;

  return (
    <div className="right-sidebar">
      <div className="user-profile">
        <div className="profile-avatar-ring">
          <img
            className="profile-avatar"
            src={currentUser.image}
            alt={currentUser.username}
          />
        </div>
        <div className="profile-info">
          <span className="profile-username">{currentUser.username}</span>
          <span className="profile-name">Upvox</span>
        </div>
        <button className="switch-btn">Switch</button>
      </div>

      <div className="suggestions-header">
        <span className="suggestions-title">Suggestions for you</span>
        <a href="#" className="see-all">See All</a>
      </div>

      <div className="suggestions-list">
        {suggestions.map((post) => (
          <div key={post.id} className="suggestion-item">
            <img
              className="suggestion-avatar"
              src={post.image}
              alt={post.username}
            />
            <div className="suggestion-info">
              <span className="suggestion-username">{post.username}</span>
              <span className="suggestion-reason">Follows you</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="footer-links">
          <a href="#">About</a>  <a href="#">Help</a> <a href="#">Press</a> {" "}
          <a href="#">API</a> <a href="#">Jobs</a>  <a href="#">Privacy</a>{" "}
          <a href="#">Terms</a>  <a href="#">Locations</a>  <a href="#">Language</a>{" "}
          <a href="#">Meta Verified</a>
        </div>
        <p>© 2023 INSTAGRAMDupe FROM Iara</p>
      </div>
    </div>
  );
}

export default RightSidebar;
