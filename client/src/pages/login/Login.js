import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import "./login.css"
import {Context} from "../../context/Context"
import axios from 'axios';

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const {user,dispatch ,isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type:'LOGIN_START'})
    try {
      const res = await axios.post("/auth/login",{
        username : userRef.current.value,
        password : passwordRef.current.value,
      })
      dispatch({type:'LOGIN_SUCCESS',payload:res.data})

    } catch (error) {
      dispatch({type:'LOGIN_FAILURE'})
    }
  }
  console.log(user)
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your Username" ref={userRef} />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your Password" ref={passwordRef} />
        <button className="loginButton" type="submit">Login</button>
      </form>
      <button className="loginRegisterButton">
      <Link className="link" to="/register">Register</Link>
      </button>
      
    </div>
  )
}

export default Login
