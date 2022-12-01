import './home.css'
import Header from "../../components/header/Header";
import SideBar from '../../components/sidebar/SideBar';
import Posts from '../../components/posts/Posts';
import { useEffect, useState } from "react"
import axios from "axios"


function Home() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/posts")
      console.log(res)
    }
    fetchPosts()
  },[])
  return (
    <div>
      <Header />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </div>
  )
}

export default Home
