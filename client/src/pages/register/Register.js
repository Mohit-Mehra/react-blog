import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"


const Register = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username" />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter your Email" />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your Password" />
        <button className="registerButton">register</button>
      </form>
      <button className="registerLoginButton">
      <Link className="link" to="/login">Login</Link>
      </button>
      
    </div>
  )
}

export default Register
