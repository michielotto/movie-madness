import React, { useState } from 'react'
import _ from './style.module.scss'
import Input from './Input'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Auth = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isSignUp, setIsSignup] = useState(false)
  const handleSubmit = () => {
    console.log('submit')
  }
  const handleChange = () => {
    console.log('change')
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } })
      history.push('/')
      console.log(result)
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
            <Input autoFocus name='First Name' type='text' placeholder='First Name' handleChange={handleChange} />
            <Input name='Last Name' type='text' placeholder='Last Name' handleChange={handleChange} />
            <Input name='Email' type='email' placeholder='Email' handleChange={handleChange} />
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

export default Auth;
