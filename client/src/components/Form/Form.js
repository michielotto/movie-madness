import React, { useState, useEffect } from 'react';
import _ from './style.module.scss';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', description: '', year: '', duration: '', image: '' });
  const post = useSelector(state => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post)
  }, [post])
  const handleSubmit = e => {
    e.preventDefault();
    currentId ? dispatch(updatePost(currentId, postData)) : dispatch(createPost(postData));
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({ title: '', description: '', year: '', duration: '', image: '' });
  }
  return (
    <form className={_.Form} onSubmit={handleSubmit}>
      <h3>{currentId ? 'Edit this movie' : 'Create a movie'}</h3>
      <section>
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
        </section>
        <article>
          <FileBase 
            type="file" 
            multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
          />
        </article>
     
        <div>
          <button type="submit">Submit</button>
          <span onClick={clear}>Clear</span>
        </div>
    </form>
  )
}

export default Form;