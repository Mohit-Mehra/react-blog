import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="Enter your Email" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your Password" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
      <Link className="link" to="/register">Register</Link>
      </button>
      
    </div>
  )
}

export default Login
