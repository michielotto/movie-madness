import React, { useState, useEffect } from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

const Home = () => {
  const [ currentId, setCurrentId ] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])
  return (
    <>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
    </>
  )
}

export default Home