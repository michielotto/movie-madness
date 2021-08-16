import React, { useState, useEffect } from 'react'
import './styles/global.css'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import { Layout } from './components/Layout/Layout'
import { Title } from './components/Title/Title'

const App = () => {
  const [ currentId, setCurrentId ] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <div>
      <Layout>
        <Title />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Posts setCurrentId={setCurrentId} />
      </Layout>
    </div>
  )
}

export default App