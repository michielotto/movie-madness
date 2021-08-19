import React, { useState, useEffect } from 'react'
import _ from './style.module.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    // const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/')
    setUser(null)
  }
  return (
    <section className={_.Navbar}>
      <Link to="/"><h3>Movie Madness</h3></Link>
      <span>{user?.result.name}</span>
      {user ? <button onClick={logout}>Logout</button> : <button><Link to="/auth">Sign in</Link></button>}
    </section>
  )
}

export default Navbar