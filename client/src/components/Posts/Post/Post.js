import _ from './style.module.scss'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <>
      {(user?.result?.name === post?.name || user?.result?.name === post?.name) && (
        <article className={_.Post}>
          <div>
            <img src={post.image} alt={post.title} />
            <button onClick={() => setCurrentId(post._id)}>edit</button>
            <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
          </div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <article>
            <span>year: {post.year}</span>
            <span>duration: {post.duration}</span>
          </article>
        </article>
      )}
    </>
  )
}

export default Post