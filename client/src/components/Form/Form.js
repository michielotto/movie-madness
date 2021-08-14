import React, { useState } from 'react';
import _ from './style.module.scss';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({ title: '', description: '', year: '', duration: '', image: '' });
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createPost(postData))
  };
  const clear = () => {
    console.log('hello')
  }
  return (
    <form className={_.Form} onSubmit={handleSubmit}>
      <h3>Create a movie</h3>
      <div>
        <h5>Title</h5>
        <input placeholder="Guardians of the galaxy" value={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })} />
      </div>
      <div>
        <h5>Description</h5>
        <textarea placeholder="This is an scifi action movie that plays off in space" value={postData.description} onChange={e => setPostData({ ...postData, description: e.target.value })} />
      </div>
      <div>
        <h5>Year</h5>
        <input type="number" placeholder="2015" value={postData.year} onChange={e => setPostData({ ...postData, year: e.target.value })} />
      </div>
      <div>
        <h5>Duration</h5>
        <input placeholder="2 hours 15 minutes" value={postData.duration} onChange={e => setPostData({ ...postData, duration: e.target.value })} />
      </div>
      <article>
        <FileBase 
          type="file" 
          multiple={false} 
          onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
        />
      </article>
      <button type="submit">Create</button>
      <button onClick={clear}>Clear</button>
    </form>
  )
}

export default Form;