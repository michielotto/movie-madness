import _ from './style.module.scss';

const Post = () => {
  return (
    <div className={_.Post}>
      <article>
        <img src="" alt="" />
        <h2>Title</h2>
        <p>Description</p>
        <span>year</span>
        <span>duration</span>
      </article>
    </div>
  )
}

export default Post;