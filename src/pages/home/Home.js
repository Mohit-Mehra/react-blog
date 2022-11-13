import './home.css'
import Header from "../../header/Header";
import SideBar from '../../sidebar/SideBar';
import Posts from '../../posts/Posts';


function Home() {
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
