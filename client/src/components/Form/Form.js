import React, { useState, useEffect } from 'react'
import _ from './style.module.scss'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', description: '', year: '', duration: '', image: '' })
  const post = useSelector(state => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))
  useEffect(() => {
    if (post) setPostData(post)
  }, [post])
  const handleSubmit = e => {
    e.preventDefault()
    currentId ? dispatch(updatePost(currentId, { ...postData, name: user?.result?.name })) : dispatch(createPost({ ...postData, name: user?.result?.name }))
    clear()
  };
  const clear = () => {
    setCurrentId(null)
    setPostData({ title: '', description: '', year: '', duration: '', image: '' })
  }
  if (!user?.result?.name) {
    return (
      <h1>Please sign in to view, create, update and delete movies.</h1>
    )
  }
  return (
    <form className={_.Form} onSubmit={handleSubmit}>
      <h3>{currentId ? 'Edit this movie' : 'Create a movie'}</h3>
      <section>
        <div>
          <input required placeholder="Movie Title" value={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })} />
        </div>
        <div>
          <textarea required placeholder="Give a description of the movie" value={postData.description} onChange={e => setPostData({ ...postData, description: e.target.value })} />
        </div>
        <div>
          <input required type="number" placeholder="Year" value={postData.year} onChange={e => setPostData({ ...postData, year: e.target.value })} />
        </div>
        <div>
          <input required placeholder="Movie duration" value={postData.duration} onChange={e => setPostData({ ...postData, duration: e.target.value })} />
        </div>
        </section>
        <article>
          <FileBase 
            type="file" 
            multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
          />
          <div>
            <button type="submit">Submit</button>
            <p onClick={clear}>Clear</p>
        </div>
        </article>
    </form>
  )
}

export default Form