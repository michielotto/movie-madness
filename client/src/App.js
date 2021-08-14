import React, { useEffect } from 'react'
import './styles/global.css'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <div>
      <h2>Movie Madness</h2>
      <Form />
      <Posts />
    </div>
  )
}

export default App