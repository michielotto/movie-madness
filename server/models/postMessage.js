import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  year: Number,
  duration: String,
  image: String
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;