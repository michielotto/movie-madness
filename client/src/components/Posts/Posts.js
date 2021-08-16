import Post from "./Post/Post";
import { useSelector } from "react-redux";
import React from "react";
import _ from './style.module.scss';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts);
  console.log(posts);
  return (
    <section className={_.Wrapper}>
      {
        !posts.length ? <h3>Loading movies...</h3> : (
          posts.map((post, i) => (
            <React.Fragment key={i}>
              <Post post={post} setCurrentId={setCurrentId} />
            </React.Fragment>
          ))
        )
      }
    </section>
  )
}

export default Posts;