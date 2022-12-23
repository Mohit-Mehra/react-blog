import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  const handleSubmit = false
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="email" className="loginInput" placeholder="Enter your Username" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your Password" />
        <button className="loginButton" type="submit">Login</button>
      </form>
      <button className="loginRegisterButton">
      <Link className="link" to="/register">Register</Link>
      </button>
      
    </div>
  )
}

export default Login
