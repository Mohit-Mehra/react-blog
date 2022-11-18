import './TopBar.css'
import {Link} from 'react-router-dom';

function TopBar() {
  const user = false;
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
            <li className='topListItem'>
            <Link className='link' to="/">Home</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/">About</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/">Contact</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/">Write</Link>
            </li>
            <li className='topListItem'>
              {user && "Logout"}
            </li>

        </ul>
    </div>
    <div className="topRight">
      {
        user ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png" alt="User" className='topImg' />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
            <Link className='link' to="/login">Login</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/register">Register</Link>
            </li>
          </ul>
        )
      }
        <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}

export default TopBar
