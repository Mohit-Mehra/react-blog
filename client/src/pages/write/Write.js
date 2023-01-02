import "./write.css"
import {useState,useContext} from 'react'
import axios from 'axios'
import {Context} from '../../context/Context'

function Write() {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState("")
  const {user} = useContext(Context)

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newPost = {
      username:user.username,
      title,
      desc
    }
    if(file){
      const data = FormData()
      const filename = Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
    }
    axios.post("/posts",)
  }
  return (
    <div className="write">
        <img className="writeImg" src="https://source.unsplash.com/random/?galaxy/" alt="" />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="Icon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story........." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  )
}

export default Write
