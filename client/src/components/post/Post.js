import './post.css'

function post({post}) {
  return (
    <div className='post'>
      {post.photo && (
      <img className='postImg' src={post.photo} alt="" />
      )}
      <div className="postInfo">
        <div className="postCats">
            <span className="postCats">Music</span>
            <span className="postCats">Life</span>
        </div>
        <span className="postTitle">{post.title}</span> 
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='postDesc'>{post.desc}</p>
    </div>
  )
}

export default post
