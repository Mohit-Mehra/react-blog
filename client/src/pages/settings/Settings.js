import "./settings.css"
import SideBar from '../../components/sidebar/SideBar';
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from 'axios'


function Settings() {
  const { user } = useContext(Context)
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name;
      data.append("name", filename)
      data.append("file", file)
      updatedUser.profilePic = filename
      try {
        await axios.post("/upload", data)
      } catch (err) {

      }
    }
    try {
      await axios.put("/users/" + user._id, updatedUser)
    } catch (err) {

    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={user.profilePic} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)} />
          <button className="settingsSubmit" type="submit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}

export default Settings
