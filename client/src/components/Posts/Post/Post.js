import _ from './style.module.scss';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <article className={_.Post}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <span>{post.year}</span>
      <span>{post.duration}</span>
      <button onClick={() => setCurrentId(post._id)}>Edit</button>
      <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
    </article>
  )
}

export default Post;