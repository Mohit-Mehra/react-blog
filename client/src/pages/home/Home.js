import './home.css'
import Header from "../../components/header/Header";
import SideBar from '../../components/sidebar/SideBar';
import Posts from '../../components/posts/Posts';
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from 'react-router-dom';


function Home() {
  const [posts, setPosts] = useState([])
  const location = useLocation()
  console.log(location)

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/posts")
        setPosts(res.data)
    }
    fetchPosts()
  },[])
  return (
    <div>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <SideBar />
      </div>
    </div>
  )
}

export default Home
