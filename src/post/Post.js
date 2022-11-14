import './post.css'

function post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://source.unsplash.com/random/?Music/" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCats">Music</span>
            <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>
    </div>
  )
}

export default post
