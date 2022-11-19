import './post.css'

function post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://source.unsplash.com/random/?music/" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCats">Music</span>
            <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span> 
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque blanditiis nam impedit quos minus, cum alias eum exercitationem maiores officiis natus quibusdam molestias quis enim perferendis mollitia distinctio. Velit, vero corrupti necessitatibus optio perspiciatis nam officiis similique, reprehenderit quos laboriosam numquam eum reiciendis modi voluptates, recusandae tempora minus facere!</p>
    </div>
  )
}

export default post
