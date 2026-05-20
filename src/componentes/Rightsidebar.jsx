import './RightSidebar.css';

const generateAvatar = (seed) =>
  `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`;

const suggestions = [
  { id: 1, username: 'imkir', reason: 'Follows you' },
  { id: 2, username: 'organic__al', reason: 'Followed by chirag_singla17' },
  { id: 3, username: 'im_gr', reason: 'Followed by chirag_singla17' },
  { id: 4, username: 'abh952', reason: 'Follows you' },
  { id: 5, username: 'sakbrl', reason: 'Follows you' },
];

function RightSidebar() {
  return (
    <div className="right-sidebar">
      {/* Perfil del usuario */}
      <div className="user-profile">
        <div className="profile-avatar-ring">
          <img
            className="profile-avatar"
            src={generateAvatar('upvox')}
            alt="upvox_"
          />
        </div>
        <div className="profile-info">
          <span className="profile-username">upvox_</span>
          <span className="profile-name">Upvox</span>
        </div>
        <button className="switch-btn">Switch</button>
      </div>

      {/* Sugerencias */}
      <div className="suggestions-header">
        <span className="suggestions-title">Suggestions for you</span>
        <a href="#" className="see-all">See All</a>
      </div>

      <div className="suggestions-list">
        {suggestions.map((s) => (
          <div key={s.id} className="suggestion-item">
            <img
              className="suggestion-avatar"
              src={generateAvatar(s.username)}
              alt={s.username}
            />
            <div className="suggestion-info">
              <span className="suggestion-username">{s.username}</span>
              <span className="suggestion-reason">{s.reason}</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="footer-links">
          <a href="#">About</a> · <a href="#">Help</a> · <a href="#">Press</a> · <a href="#">API</a> Â· <a href="#">Jobs</a> · <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Locations</a> · <a href="#">Language</a> · <a href="#">Meta Verified</a>
        </div>
        <p>Â© 2023 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
}

export default RightSidebar;
