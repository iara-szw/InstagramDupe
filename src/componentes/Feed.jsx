import Post from './Post'
import './feed.css'
function Feed({posts=[]}){
    return(
      <div className="feed">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            img={post.image}
            user={post.username}
            likes={post.likes}
          />
        ))
      ) : (
        <h2>Cargando posts...</h2>
      )}
    </div>
     )
}

export default Feed