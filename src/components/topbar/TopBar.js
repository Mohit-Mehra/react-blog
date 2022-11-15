import './TopBar.css'

function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
    </div>
    <div className="topCenter">
        <ul className="topList">
            <li className='topListItem'>Home</li>
            <li className='topListItem'>About</li>
            <li className='topListItem'>Contact</li>
            <li className='topListItem'>Write</li>
            <li className='topListItem'>Logout</li>

        </ul>
    </div>
    <div className="topRight">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png" alt="User" className='topImg' />
        <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}

export default TopBar
