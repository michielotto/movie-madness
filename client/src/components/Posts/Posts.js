import Post from "./Post/Post";
import { useSelector } from "react-redux";
import React from "react";

const Posts = () => {
  const posts = useSelector(state => state.posts);
  console.log(posts);
  return (
    !posts.length ? <h3>Loading movies...</h3> : (
      posts.map((post, i) => (
        <React.Fragment key={i}>
          <Post post={post} />
        </React.Fragment>
      ))
    )
  )
}

export default Posts;