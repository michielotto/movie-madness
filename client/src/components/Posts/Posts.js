import Post from "./Post/Post"
import { useSelector } from "react-redux"
import React from "react"
import _ from './style.module.scss'

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts)
  const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <section className={_.Wrapper}>
      {
        user?.result?.name ? 
        posts.length < 1 ? <h3>If you have created movies, they will show up here... if not, please create one...</h3> : (
          posts.map((post, i) => (
            <React.Fragment key={i}>
              <Post post={post} setCurrentId={setCurrentId} />
            </React.Fragment>
          ))
        )
        :
        null
      }
    </section>
  )
}

export default Posts