import "./settings.css"
import SideBar from '../../components/sidebar/SideBar';

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsPP">
            <img src="https://source.unsplash.com/random/?galaxy/" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}} />
        </div>
        <label>Username</label>
        <input type="text" placeholder="Mohit" />
        <label>Email</label>
        <input type="email" placeholder="mohit@gmail.com" />
        <label>Password</label>
        <input type="password" />
        <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}

export default Settings
