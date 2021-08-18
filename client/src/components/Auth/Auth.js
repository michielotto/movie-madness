import React, { useState } from 'react'
import _ from './style.module.scss'
import Input from './Input'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signup, signin } from '../../actions/auth'

const Auth = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const initialState = { firstName: '', lastName: '', email: '', password: '' }
  const [isSignUp, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)


  const handleSubmit = (e) => {
    e.preventDefault()
    isSignUp ? dispatch(signup(formData, history)) : dispatch(signin(formData, history))
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    try {
      dispatch({ type: 'AUTH', data: { result, token } })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = (error) => {
    console.log(error)
  }

  return (
    <div className={_.Auth}>
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit}>
        {
          isSignUp ? 
          <>
            <Input autoFocus name='firstName' type='text' placeholder='First Name' handleChange={handleChange} />
            <Input name='lastName' type='text' placeholder='Last Name' handleChange={handleChange} />
            <Input name='email' type='email' placeholder='Email' handleChange={handleChange} />
            <Input name="password" placeholder='Password' type='password' handleChange={handleChange} />
          </>
          :
          <>
            <Input name="email" placeholder='Email' type='email' handleChange={handleChange} />
            <Input name="password" placeholder='Password' type='password' handleChange={handleChange} />
          </>
        }
        <button type='submit'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        <GoogleLogin 
          clientId='677630279933-3qkmhhmdr0k47q1magjtfomuf0f7go2l.apps.googleusercontent.com'
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >Sign in with Google</button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy='single_host_origin'
        />
        <span onClick={() => setIsSignup(!isSignUp)}>{isSignUp ? `Already have an account? Sign In` : `Don't have an account? Sign Up`}</span>
      </form>
    </div>
  )
}

export default Auth
