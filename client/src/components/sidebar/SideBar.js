import './sidebar.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

function SideBar() {
  const [cats, setCat] = useState([])
  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get("/categories")
      setCat(res.data)
    }
    getCats()
  },[])
  return (
    <div className='sidebar'>
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img src="https://media.istockphoto.com/id/1182641010/photo/i-love-working-from-home.jpg?b=1&s=612x612&w=0&k=20&c=0BKNsGGSfC4E9QTHARTCBj-XfYGTRn0Hc2IKdblyhVI=" alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, repudiandae harum, vitae, labore excepturi dicta magni officia aut at et fugiat alias quis repellat.</p>
      </div>
      <div className="sideBarItem">
      <span className="sideBarTitle">CATEGORIES</span>
      <ul className="sideBarList">
        {cats.map(c=>(
          <Link to={`/?cat=${c.name}`} className="link">
          <li className="sideBarListItem">{c.name}</li>
          </Link>
        ))}
      </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
            <i className="sideBarIcon fa-brands fa-square-facebook"></i>
            <i className="sideBarIcon fa-brands fa-twitter"></i>
            <i className="sideBarIcon fa-brands fa-instagram"></i>
            <i className="sideBarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default SideBar
